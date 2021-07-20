import {  Box, Button, Grid, TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { startUpdateUser } from '../../../actions/auth';

const initialState = {
    first_name:'',
    last_name:'',
    id_cats:null,
    email:''
}
export const ProfileView = () => {
    const dispatch = useDispatch();
    const { loading  } = useSelector(state => state.ui)
    const {catsUsers} = useSelector( state => state.cats );
    const { user } = useSelector( state => state.auth );
    const [userProfile, setUserProfile] = useState( user.id_cats  ? user :  initialState)
    const [inputAutoCompleteValue, setInputAutoCompleteValue,] = useState('');

    const {
        first_name,
        last_name,
    } = userProfile

    const handleOnChangeAuotComplete = ( event,objectValue) => {
        if(objectValue){
            setUserProfile({
                first_name:objectValue.first_name,
                last_name:objectValue.last_name,
                id_cats:objectValue.id,
                email:objectValue.username
            })
        }
    }
    const handleInputChangeAutoComplete = (event,newValue ) =>{  
        setInputAutoCompleteValue(newValue)    
    }
    useEffect(() => {
       if(user.id_cats !== null){
           setInputAutoCompleteValue(user.email)
           setUserProfile({
            first_name:user.first_name,
            last_name:user.last_name,
            id_cats:user.id_cats,
            email:user.email
           })
       }
    }, [user])
    const handleOnSubmit =( e) =>{
        e.preventDefault();
        dispatch(startUpdateUser(userProfile))
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <Grid
                item
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                className={`profile__container base__card ${user.id_cats && 'profile__active'}`}
                wrap="wrap"
            
            >
                <Grid
                    item
                    xs={12}
                    container
                    alignItems="center"
                    className={ `${ user.id_cats ? 'profile_container-active': 'profile_container-inactive' }`}
                    >
                    <Box  className="profile__title"  m={2} mb={15} style={{width:"30%"}}>
                        <h1 > Perfil </h1><h2>{user.first_name} {user.last_name}</h2> 
                    
                    </Box>
                </Grid>
                <Grid
            
                    item
                    container 
                    justify="center"
                    alignItems="flex-start"
                    >

                    {/* Mi container de boton y correo */}
                    <Grid
                        item
                        xs={12}
                        container
                        justify="center"
                        alignItems="center"
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            lg={5}
                            container 
                            className="profile__container-input" 
                        >
                            <Autocomplete
                                onChange={handleOnChangeAuotComplete}
                                onInputChange={handleInputChangeAutoComplete}
                                fullWidth   
                                
                                required
                                inputValue={ inputAutoCompleteValue}
                                options={catsUsers}
                                getOptionLabel={(option) => option.username}
                                renderInput={(params) => <TextField {...params} type="email" label="Correo CATS" required variant="outlined" />}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            lg={3}
                            container 
                            className="profile__container-input" 
                            >      
                            <Button
                                size="large"
                                fullWidth
                                disabled={loading}
                                // margin="normal"
                                type="submit" variant="contained" color="primary"
                                
                            >
                                Actualizar
                            </Button>      
                        </Grid>
                    </Grid>
                    {/* Fin contaienr correo y boton */}
                    <Grid
                        item
                        xs={12}
                        container
                        justify="center"
                        alignItems="center"
                    >
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            lg={4}
                            container 
                            className="profile__container-input" 
                            > 
                            <TextField 
                                fullWidth
                                required
                                name="first_name"
                                label="Nombre"
                                value={first_name}
                                autoComplete="nope"
                                variant="outlined"
                                inputProps={
                                    { readOnly: true, }
                                }
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            
                            /> 
                        </Grid>
                        
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            lg={4}
                            container 
                            className="profile__container-input" 
                            > 
                            <TextField 
                                fullWidth
                                required
                                name="last_name"
                                label="Apellido"
                                value={last_name}
                                autoComplete="nope"
                                variant="outlined"
                                inputProps={
                                    { readOnly: true, }
                                }
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            
                            /> 
                        </Grid>
                    </Grid>
                </Grid>     
            </Grid>
        </form>
    )
}
