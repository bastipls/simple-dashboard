import { CircularProgress } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { FormDuplicateJob } from './FormDuplicateJob';

export const DuplicateJob = ({match}) => {


    const {
        params: { id },
      } = match;
   
    const {jobs,duplicatingJob} = useSelector( state => state.jobs );
    const { catsUsers } = useSelector(state => state.cats)


    return (
     <div>
         { ( catsUsers.length && jobs.length  )  ?  <FormDuplicateJob id={id} jobActual={duplicatingJob} jobs={jobs} catsUsers={catsUsers} /> : <CircularProgress /> } 

     </div>
   
    )

}
