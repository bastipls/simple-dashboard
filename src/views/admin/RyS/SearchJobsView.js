import React from 'react'
import { useSelector } from 'react-redux';
import { MyMaterialTableSearch } from './components/MyMaterialTableSearch';

export const SearchJobsView = () => {
    const {jobs } = useSelector( state => state.jobs );

    return (
        <div className="search-job__conatiner-table">
          <MyMaterialTableSearch title="Buscar Empleo" jobs={jobs} /> 
        </div>
    )
}
