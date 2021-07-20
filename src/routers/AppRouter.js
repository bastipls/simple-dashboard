import { Backdrop, CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {
    BrowserRouter,
    Redirect,
    Switch,
  } from "react-router-dom";
import { startChecking } from '../actions/auth';
import { AdminLayout } from '../layout/admin/AdminLayout'
import { LoginLayout } from '../layout/login/LoginLayout';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
    const {checking,access} = useSelector( state => state.auth );
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])
    if(checking){
        return (
            <Backdrop  open={true} >
            <CircularProgress color="inherit" />
            </Backdrop>
        )
    }
    
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PublicRoute  
                        path="/login" 
                        component={LoginLayout}
                        isAuthenticated={!!access}
                          />
                    <PrivateRoute  
                        path="/admin" 
                        component={AdminLayout }
                        isAuthenticated={!!access}

                        />

                  
                    <Redirect from="/" to="/login" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
