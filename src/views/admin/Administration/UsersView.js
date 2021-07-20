import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadUsers } from '../../../actions/administration';

import { MyMaterialTableUsers } from './components/MyMaterialTableUsers'

export const UsersView = () => {
    const dispatch = useDispatch();
    const {loading,users:{usersList}} = useSelector( state => state.administration );
    const {user:userLogged} = useSelector( state => state.auth );
    useEffect(() => {
       dispatch(startLoadUsers())
    }, [dispatch])
  
    return (
        <div className="administration__container ">
            <MyMaterialTableUsers loading={loading} users={ usersList ?  usersList.filter(user => user.id !==userLogged.id ) : []} />
        </div>
    )
}
