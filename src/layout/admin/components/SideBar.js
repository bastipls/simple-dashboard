import React from 'react'
import PropTypes from 'prop-types';
import { LinkMenuItem } from '../components/LinkMenuItem';
import { LinkSubMenuItem } from '../components/LinkSubMenuItem';
import { checkGroups } from '../../../helpers/checkGroupsAndPermissions';

export const SideBar = ({routes,user}) => {
    
    const { groups } = user
    const handleOnClickMenuItem = () =>{

    }
    return (
        <div className="sidebar">
        <ul className="sidebar__nav">
        
        {
            routes.map((prop, key) => {
                // &&  checkGroups(groups,prop.groups) 
                if(!prop.redirect &&  checkGroups(groups,prop.groups)  ){


                    return (
                        // Verifico si es parte del menu sidebar
                        prop.isMenuItem &&
                        // Diferencio si es menu normal y submenu
                        (
                        prop.isSubMenu === false ?
                        <LinkMenuItem onClick={handleOnClickMenuItem}  key={key} prop={prop} />
                        :
                        <LinkSubMenuItem onClick={handleOnClickMenuItem}   key={key} prop={prop} />
                        )
                    )
                } 
                
                return null;
                
            })
        }
    
        </ul>
    </div>
    )
}




SideBar.propTypes = {
    routes:PropTypes.array.isRequired
};

