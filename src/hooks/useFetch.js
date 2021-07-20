import { URL_GLOBAL } from "../constants/constants";


// Este custom hook se encarga de hacer caulquier peticion que se desee
// usando token o sin este
const useFetch = (path,data,method='GET',wihToken=false)=>{
    
    const url =`${URL_GLOBAL}/${ path }`;

    if(wihToken){
        const token = localStorage.getItem('token') || '';
        if(method === 'GET')
        {
        
            return fetch(url,
                {
                method,
                headers: {
                    'Authorization':`Token ${token}`
                }
                }
                );
        
        }else{
        return fetch(url,
                {
                    method,
                    headers:{
                        'Content-Type':'application/json', 
                        'Authorization':`Token ${token}` 
                    },
                    body:JSON.stringify(data)
                })
            
        }
    }else{
        if(method === 'GET')
        {
        
            return fetch(url,
                {
                method,
                }
                );
            
        }else{
            return fetch(url,
                {
                    method,
                    headers:{
                        'Content-Type':'application/json',  
                    },
                    body:JSON.stringify(data)
                })
            
        }

    }


}
export const useFakeFetch = (path) => {
   const data = JSON.parse(JSON.stringify(path));
   return {ok:true,body:data};
}
export default useFetch;
