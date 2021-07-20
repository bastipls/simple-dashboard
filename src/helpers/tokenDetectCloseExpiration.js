import moment from "moment"
import { startChecking, startLoadingUser } from "../actions/auth";

// Esta funcion se eencarga de detectar si esta a 15 min de expirar
// Se utiliza por ejemplo al momento de hacer una accion importante
// Con el fin de mantener el token renovado, ya que si llamas a esta funcion lo actualizara
// Dando 5 horas mas al token
export const tokeDetectCloseExpiration = (dispatch) => {
    const expireToken = localStorage.getItem('token-init-date') || ''
     // Verifico si mi token esta a menos de 15 min  de expirar para realizar la peticion
    const closeToExpirte = moment(expireToken).add(1,'hour').add(45,'minutes').format()
    const actualDate = moment().format()
   
    if(  moment(actualDate).isAfter(closeToExpirte)  ){
        dispatch(startChecking())
        dispatch(startLoadingUser())
    }
}
