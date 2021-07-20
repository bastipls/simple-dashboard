import React, { useEffect } from 'react'
import {   useDispatch, useSelector } from 'react-redux';

import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';

import routes from '../../routers/routes'
import { RoutesView } from '../../routers/RoutesView';
import { LinearProgress } from '@material-ui/core';
import { startLoadTasks } from '../../actions/tasks';
import { startLoadAllMaintainers } from '../../actions/maintainers';

export const AdminLayout = () => {

    const dispatch = useDispatch();
    const {visibilitySideBar,loading} = useSelector( state => state.ui );
    const { user }   = useSelector(state => state.auth);
    useEffect(() => {
        
        dispatch(startLoadTasks())
        dispatch(startLoadAllMaintainers())

    
    }, [dispatch])

   

    return (
        <div className={`base__overlay-scrollbar  ${ visibilitySideBar ? 'sidebar__expand':'' } `}>
        {loading && <LinearProgress className="base__linear-progress" />}
        <NavBar user={user} />
        { user &&  <SideBar routes={routes} user={user} />}

        
        <div id="wrap" className="wrapper">
            <div className="row">

          
                { user && <RoutesView routes={routes} user={user} />}
                
            </div>
        </div>

        </div>
    )
}
