// Esta funcion se dedica a verificar los permisos con los que cuenta el usuario
export const checkPermissions = (user_gp,route_p) => {
    const in_permission =  user_gp.some( group => 
        route_p && group.permissions.some( permission => route_p.includes(permission.codename))
    )
   
    return in_permission
}
// Esta funcion se dedica a verifcar los grupos con los que cuenta el usuario
export const checkGroups  = (user_gp,route_gp) => {
    const user_gp_list = user_gp.map( gp  => gp.name   ) 
    const in_list = route_gp.every( gp => user_gp_list.includes(gp) )
    return in_list;
}