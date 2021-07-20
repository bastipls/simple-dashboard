
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { checkGroups } from '../helpers/checkGroupsAndPermissions'

// Componenente que se encarga de recorrer mi archivo de rutas y listar estas
export const RoutesView = ({routes,user}) => {
    const { groups } = user;

    return (
        <Switch>
            {
        
            routes.map(({component:Component,layout,path,groups:route_groups,isSubMenu,subMenus},key)=>(
                // Verifico si cuenta con el grupo relacionado con el componente  
                checkGroups(groups,route_groups)   &&
                ( isSubMenu === false ? 
                    <Route 
                        path={layout + path}
                        exact
                        render={(props) => <Component {...props} />}
                        key={key}
                    />
                :
                    subMenus.map(({component:Component,layout,path},key) =>(
                        // Aqui si deseo puedo hacer uan condicion segun los permisos del usuario
                        <Route 
                            path={layout + path}
                            exact
                            render={(props) => <Component {...props} />}
                            key={key}
                        />
                    ))
                )
                
           

            ))
        }
        {/* Valaidacion si no tiene relacionado su perfil con el correo de id_cats
        
        Quitrla una vez se realice el registro den la app */}
        <Redirect to="/admin/perfil" /> 
  
        </Switch>
    )
}
