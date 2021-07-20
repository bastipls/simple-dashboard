
import { URL_GLOBAL } from '../constants/constants';

export const getClienDeal = (id) => {
        const url =`${URL_GLOBAL}/hubspot-deal-client/${id}`;
        const token = localStorage.getItem('token') || '';
        return fetch(url,{method: 'GET', headers: {'Authorization':`Token ${token}`}});
  
}
