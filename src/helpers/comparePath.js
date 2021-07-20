// Esta funcion se utiliza en LinkSubMenuItem para 
// Controlar el estado del collapse del menu
export const comprePath = (routes,path) => {
    const in_permission =  routes.some( route =>  (route.layout + route.path) === path )
    return in_permission
}

