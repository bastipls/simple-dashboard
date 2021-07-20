import { URL_GLOBAL } from "../constants/constants";

export const downloadDocument = async (filename,path) => {
    const anchor = document.createElement("a");
    document.body.appendChild(anchor);
    const file = `${URL_GLOBAL}/cats-document-download/?atr=${path}`;
    const token = localStorage.getItem('token') || '';
    const  headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Authorization', `Token ${token}`);
    fetch(file, { headers })
        .then(response => response.blob())
        .then(blobby => {
            const objectUrl = window.URL.createObjectURL(blobby);
            console.log(objectUrl)
            anchor.href = objectUrl;
            anchor.download = filename;
    
            anchor.click();
    
            window.URL.revokeObjectURL(objectUrl);
        });
}
