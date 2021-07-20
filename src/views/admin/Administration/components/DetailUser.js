
import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  startLoadGroups, startLoadUserActive } from '../../../../actions/administration';
import { MyMaterialTableSearch } from '../../RyS/components/MyMaterialTableSearch';
import { FormUser } from './FormUser';

export const DetailUser = ({match}) => {
    const dispatch = useDispatch();
    const {groups,users,loading } = useSelector( state => state.administration );
    const {
        params: { id },
      } = match;
      useEffect(() => {
        dispatch(startLoadUserActive(id))
          
      }, [dispatch,id])
      useEffect(() => {
        dispatch(startLoadGroups())
          
      }, [dispatch])
    
    
    
      
    return (
      <>
    { !loading && users.active ? 
    <>
    <FormUser userActive={users.active} groups={groups} /> 
    <MyMaterialTableSearch title={`Requerimientos creados ${users.active.first_name}`} jobs={users.active.jobs} /> 
    </>
    : <CircularProgress />
 
     }
    </>

    )
}
