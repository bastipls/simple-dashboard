import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadGroups } from '../../../actions/administration';
import { MyMaterialTableGroups } from './components/MyMaterialTableGroups'

export const GroupsView = () => {
    const {loading,groups} = useSelector( state => state.administration );
    const dispatch = useDispatch(); 
    useEffect(() => {
        dispatch(startLoadGroups())
    }, [dispatch])
    return (
        <div className="administration__container ">
            <MyMaterialTableGroups loading={loading} groups={groups} />
         </div>
    )
}
