import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogin } from '../../actions/auth'
// import { startLogin } from '../actions/auth'
import logo from '../../assets/img/logo.jpg'
import { TextFieldCustomCss } from '../../components/inputs/InputsMaterialCustom'
import { useForm } from '../../hooks/useForm'
export const LoginLayout = () => {
    const dispatch = useDispatch();
    const { values:[formValues],
            onChange:handleInputChange} = useForm({
        username:'',
        password:'',
    })
    const {username,password} = formValues;
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLogin(formValues))
    }
    // FIXME: Usar cuando se necesite login de google
    // const responseGoogle = async (response) => {
    //     const tokens = await googleLogin(response)
    //     dispatch(startLoguinWithGoogle(tokens))
    // }
    return (
        <form onSubmit={handleSubmit}>

            <Grid
                className="login__container"
                container
                justify="center"
                alignContent="center"
                alignItems="center"
                wrap="wrap"

            >
                <Grid
                    item
                    container
                    wrap="wrap"
                    xs={9}
                    sm={7}
                    md={4}
                >
                    <Grid
                      
                        className="login__item"
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        item
                        xs={12}
                        sm={12}
               
                    >
                        <div id="login__logo">
                            <img src={logo} alt="Logo"/>
                        </div>
                        <h3>Ingresar</h3>
                         <TextFieldCustomCss
                                name="username"
                                label="Usuario"
                                placeholder="Nombre de usuario"
                                variant="outlined"
                                value={username}
                                onChange={handleInputChange}
                        />
                        <TextFieldCustomCss
                                name="password"
                                type="password"
                                label="Contraseña"
                                value={password}
                                onChange={handleInputChange}
                                placeholder="*******"
                                variant="outlined"
                        />
                        <Button type="submit" variant="contained" color="primary" >Ingresar</Button>
                           {/* <GoogleLogin
                            className="login__google-btn"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            clientId={GOOGLE_CLIENT_ID}
                            buttonText="Ingresar con Google"
                        
                        /> */}
                        
                    </Grid>
                     
                
                    
                </Grid>


           


            <svg id="login__background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 520">
            <path fill="#3F51B5" fillOpacity="1" d="M0,160L34.3,170.7C68.6,181,137,203,206,213.3C274.3,224,343,224,411,202.7C480,181,549,139,617,154.7C685.7,171,754,245,823,234.7C891.4,224,960,128,1029,128C1097.1,128,1166,224,1234,218.7C1302.9,213,1371,107,1406,53.3L1440,0L1440,1320L1405.7,1320C1371.4,320,1303,320,1234,1320C1165.7,320,1097,320,1029,1320C960,320,891,320,823,1320C754.3,320,686,320,617,1320C548.6,320,480,320,411,1320C342.9,1320,274,1320,206,1320C137.1,320,69,1320,34,1020L0,10020Z"></path>
            </svg>
         
            </Grid>
        </form>
    )
}
