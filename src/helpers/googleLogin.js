
import { URL_GLOBAL } from '../constants/constants';

export const googleLogin = async (token) => {
    const url =`${URL_GLOBAL}/rest-auth/google/`;
    const resp = await fetch(url,{method: 'POST', headers: {'Content-Type':'application/json'},body:JSON.stringify({access_token:token.accessToken})});
    const body = await resp.json()
    return body
}
