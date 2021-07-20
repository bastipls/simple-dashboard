import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const LinkMenuItem = ({prop}) => {


    return (
        <li 
            className="sidebar__nav-item">
            <NavLink 
                to={prop.layout + prop.path}
                className="sidebar__nav-link"
                >
                <div className="sidebar__conatiner-icon">
                    <FontAwesomeIcon icon={prop.icon} />
                </div>
                <span>
                    {prop.name}
                </span>
            </NavLink>
        </li>
    )
}
