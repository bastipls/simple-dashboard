import moment from "moment"
import { types } from "../constants/types"

export const notificationAdd  = (msg) => {
    const dateNow = moment(new Date()).format("DD/MM/YYYY HH:mm")
    const idDateNow = moment(new Date()).format("X")
    return {
    type:types.notificationAdd,
    payload:{
        id:idDateNow,
        created:dateNow,
        msg:msg,

    }
    }
}
export const notificationDelete  = (idError) => ({
    type:types.notificationDelete,
    payload:idError
})