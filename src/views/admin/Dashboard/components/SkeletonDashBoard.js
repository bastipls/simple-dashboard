import React from 'react'
import { Skeleton } from '@material-ui/lab';
import { LinearProgress } from '@material-ui/core';
export const SkeletonDashBoard = () => {
    return (
        <>
        <div className="dashboard__item-card-week dashboard__item base__card">
            <LinearProgress style={{width:"100%",position:"absolute",top:0}} />

        </div>
        <div className="dashboard__item-card-general dashboard__item base__card">
        <Skeleton width="100%" height={290} />
        </div>
        <div className="dashboard_item-pie dashboard__item base__card">

        <Skeleton  variant="circle" width={250} height={250} />
        </div>
        </>
    )
}
