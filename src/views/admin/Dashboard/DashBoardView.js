import React from 'react'
import { MyPieChartSector } from './components/MyPieChartSector'
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { MyStatusCard } from './components/MyStatusCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadChartsData } from '../../../actions/charts';
import { MyMetricCard } from './components/MyMetricCard';

import { SkeletonDashBoard } from './components/SkeletonDashBoard';

export const DashBoardView = () => {
    const dispatch = useDispatch();
    const {dataCharts:{
                      jobs_per_sector,
                      all_jobs,
                      jobs_this_week,
                      jobs_last_week
                    },
        loading} = useSelector( state => state.charts );
   
    useEffect(() => {
        dispatch(startLoadChartsData())
    }, [dispatch])
    
    if(loading){
        return (
            <SkeletonDashBoard />
        
        )
    }

    return (
       
            <>
            <div className="dashboard__item-card-week dashboard__item base__card">
                <MyMetricCard  dataLastWeek={jobs_last_week} dataThisWeek={jobs_this_week} />
            </div>
            <div className="dashboard__item-card-general dashboard__item base__card">
               <MyStatusCard  title={all_jobs} subTitle="Total de tareas ingresadas" icon={faTasks} color="#3F51B5" />
            </div>
            <div className="dashboard_item-pie dashboard__item base__card">
                <p className="dashboard__title-item">Tareas ingresados por sector</p>
                <MyPieChartSector data={jobs_per_sector ? jobs_per_sector : []}  /> 

            </div>
            </>
        
        
           
            
        
        
    )
}
