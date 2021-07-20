// Funcion para subir archivos
export const uploadFile = ( url,data,method = 'POST' ) => {
    const formData = new FormData()
    formData.append('file',data)
    if ( method === 'POST' ) {
 
        return fetch(url,{
            method,
            headers:{
                'Content-type':'application/pdf'
            },
            body:formData
            
        })
    }
}