
import { CircularProgress } from '@material-ui/core';
import React from 'react'
import {  useSelector } from 'react-redux'
import { FormJob } from './components/FormJob';




export const CreateJobView = () => {
    const {loading:loadingCats,catsUsers} = useSelector( state => state.cats );
    const {user} = useSelector(state => state.auth);
    const {active:jobActive} = useSelector(state => state.jobs)
    const { deals } = useSelector(state => state.hubspot)

    return (
    //    ( !loadingCats && user  )  ?   
    //    <FormJob  
    //         user={user} 
    //         catsUsers={catsUsers} 
    //         jobActive={jobActive} 
    //         inProccess={false} 
    //         duplicating={false} 
    //         deals={deals}
    //         />  
    //     : 
        <CircularProgress />
    )
}
