import React from 'react'
import { MetricCard } from 'react-metric-card'

export const MyMetricCard = ({loading,dataLastWeek,dataThisWeek}) => {
    // La comparacion dataLastWeek ===0 ?1 :dataLastWeek es para saber si es 0
    // Ya que si ese es el caso me daria error o en js Infinity
    const compare = (( dataThisWeek-dataLastWeek)/(dataLastWeek ===0 ?1 :dataLastWeek))*100 || 0
   
    return (
        <MetricCard
            value={`${dataThisWeek} Tareas`}
            trend={{
                slope: Math.sign(compare) ,
                description: 'comparado con la semana anterior.',
                value: `${compare}%`
            }}
            title='REQUERIMIENTOS INGRESADOS DURANTE LA SEMANA'
            error={null}
            cardBgColor={compare > 0 ? '#ECF9EF': (compare ===0 ? '#E8F4FD' : '#FDECEA' ) }
    />
    )
}
