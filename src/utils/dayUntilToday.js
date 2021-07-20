import moment from "moment-timezone"

// Funcion para saber cuantos dias hay entre una fecha anterior y hoy
export const daysUntilToday = (date) => {
    const created  =moment(date).set({hour:0,minute:0,second:0,millisecond:0})

    const currentDay = moment().tz('America/Santiago').startOf('day').diff(created,'days')
      
    
    return currentDay
}
export const daysUntilFinished = (date,dateFinished) => {
    const created  =moment(date).set({hour:0,minute:0,second:0,millisecond:0})

    const currentDay = moment(dateFinished).tz('America/Santiago').startOf('day').diff(created,'days')
      
    
    return currentDay
}
