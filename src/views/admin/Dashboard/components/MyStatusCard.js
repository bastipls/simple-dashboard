import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const MyStatusCard = ({title,subTitle,icon,color}) => {
    return (
        <div  className="dashboard__status-card base__no-select" style={{background:color}}>
            <FontAwesomeIcon  size="lg" icon={icon} />
            
            <h3 > {title}</h3>
            <p>{subTitle}</p>

        </div>
    )
}
