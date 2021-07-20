import {  faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Collapse } from '@material-ui/core'
import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { comprePath } from '../../../helpers/comparePath'

export const LinkSubMenuItem = ({prop}) => {
    const [showMenuItem, setShowMenuItem] = useState(false)
    const history = useHistory()
    return (
    <li  className="sidebar__nav-item">
        <div onClick={() => setShowMenuItem(!showMenuItem) } className="sidebar__nav-link" >
            <div className="sidebar__conatiner-icon">
                <FontAwesomeIcon icon={prop.icon} />
            </div>
            <span>
                {prop.name}
            </span>
            <div className="sidebar__conatiner-icon sidebar__icon-dropdown">
                <FontAwesomeIcon icon={showMenuItem ?  faSortDown : faSortUp} />
            </div>
        </div>

        <Collapse
            in={ comprePath(prop.subMenus,history.location.pathname) ? true: showMenuItem}
        >
         <ul>
             {
                prop.subMenus.map((menu,key) => (
                // Aqui si deseo puedo hacer uan condicion segun los permisos del usuario
                <li key={key}>
                    <NavLink
                        to={menu.layout + menu.path}
                        className="sidebar__nav-link"
                    >
                         <div  className="sidebar__conatiner-icon">
                            <FontAwesomeIcon 
                                icon={menu.icon}
                                />
                        </div>
                        <span>
                            {menu.name}
                        </span>
                    </NavLink>
                </li>
                ))
             }
        </ul>
        </Collapse>

   
       

        
        
      </li>
       
    )
}
