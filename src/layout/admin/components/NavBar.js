import React, {  useState } from 'react'
import { faBars, faExclamationTriangle, faSignOutAlt, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import avatarImg from '../../../assets/img/avatar.jpeg';

import { useDispatch, useSelector } from 'react-redux';
import {   showSidebar } from '../../../actions/ui';
import { startLogout } from '../../../actions/auth';
import { Badge, ListItemIcon, Menu, MenuItem } from '@material-ui/core';
export const NavBar = ({user}) => {
    const dispatch = useDispatch();
    const { visibilitySideBar } = useSelector( state => state.ui );
    const [anchorEl, setAnchorEl] = useState(null);
    
    const avt = avatarImg;
    const handelShowSideBar = () =>{
        dispatch(showSidebar(visibilitySideBar))
    }
    const handleClcik = (e)=>{
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
      };
    const handleLogout = () =>{
        dispatch(startLogout())
    }

    const [bag, setBag] = useState(null)
    const handleBagError = (e) =>{
        setAnchorEl(e.currentTarget);
    }
    const handleCloseBagError = () =>{
        setBag(null)
    }
    return (
        // Navbar
        <div className="navbar">
            <ul className="navbar__nav">
                <li className="navbar__nav-item" >
                    <span onClick={handelShowSideBar} className="navbar__nav-link">
                            <FontAwesomeIcon  icon={faBars} />           
                    </span>
                </li>
                <li className="navbar__nav-item" >
                    <Link  to="#">
                        {/* FIXME: Cambiar logo por uno default o con css solo poner LOGO */}
                       
                    </Link>
                </li>
                <li className="navbar__nav-item">
                   
                
                </li>
                
               
            </ul>
            <ul className="navbar__nav">
            {/* TODO:Terminar de hacer esto */}
                <span  onClick={handleBagError}> 
                                <Menu
                                    
                                    anchorEl={null}
                                    keepMounted
                                    open={Boolean(bag)}
                                    onClose={handleCloseBagError}
                                    getContentAnchorEl={null}
                                    
                                    anchorOrigin={{
                                        vertical: 'right',
                                        horizontal: 'left',
                                    }}
                                    
                                    transformOrigin={{
                                    vertical: 'right',
                                    horizontal: 'right',
                                    }}
                                >
                                    <MenuItem>hola</MenuItem>
                                    <MenuItem>hola</MenuItem>
                                </Menu>
                                <Badge  badgeContent={4} color="primary">
                                    <FontAwesomeIcon icon={faExclamationTriangle} />
                                </Badge>
                    </span>
            </ul>
                     

            {/* <form className="navbar__search">
                <input type="" />
                <FontAwesomeIcon  icon={faSearch}  />
            </form> */}
            {/* Navbar Right */}
            <ul className="navbar__nav navbar__nav-right">
            
                <span className="navbar__username">{user && user.username}</span>
        
                {/* EndDropDown */}
                {/* Avatar */}
                <li className="navbar__nav-item navbar__avt-wrapper" >
                    <div className="navbar__avatar ">

                        <img src={avt} className="navbar__dropdown-toggle"  aria-controls="simple-menu" onClick={handleClcik}  alt="imagen de perfil"/>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            getContentAnchorEl={null}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                              }}
                            
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                            }}
                        
                        >

                        <MenuItem 
                            component={Link}
                            to="/admin/perfil"
                            
                        >
                        <ListItemIcon>
                            <FontAwesomeIcon  icon={faUserTie}/>
                        </ListItemIcon>
                        Perfil
                        </MenuItem>
                 
                         <MenuItem onClick={handleLogout} >
                        <ListItemIcon>
                            <FontAwesomeIcon  icon={faSignOutAlt} />
                        </ListItemIcon>
                         Salir
                         </MenuItem>
                        </Menu>
        
                    </div>
                </li>
                
                
                {/* End Avatar */}
            </ul>
            {/* End Navbar Right */}

  
        </div>
        // End navbar
    )
}
