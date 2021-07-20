import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button, Checkbox, CircularProgress, FormControlLabel, FormHelperText, InputLabel, MenuItem, Select, Snackbar, Tooltip } from '@material-ui/core'
import { Alert, Autocomplete } from '@material-ui/lab'
import React, {  useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { setActiveTask, setDuplicatingTask, startCreateTask } from '../../../../actions/tasks'
import { AutoComlpleteCustomCss, FormControlCustomCss, TextFieldCustomCss } from '../../../../components/inputs/InputsMaterialCustom'
import { getClienDeal } from '../../../../helpers/getClienDeal'
import {  useFormValidation } from '../../../../hooks/useForm'


export const FormJob = ({catsUsers,user,jobActive,inProccess ,duplicating,deals}) => {
    const { typesContract,
        typesService,
        currencies,
        countries,
        contractsDuration,
        sectors,
        careers,
        industriesExperiences,
        skills:maintainersSkills,
        tecnologies:maintainersTecnologies,
        seniorities,
        behaivors:maintainerBehaivors
                 } = useSelector( state => state.maintainers );
    const { loading } = useSelector(state => state.ui)
    const { loading:loadingHubspot } = useSelector(state => state.hubspot)
    const history = useHistory();
    const dispatch = useDispatch();
    const [alert, setAlert] = useState(false)
    const [duplicate, setDuplicate] = useState(duplicating ? true : false)
   
    // Mi kam actual para setearlo 
    const actualKam =  catsUsers.find(kam => {
            return kam.id === user.id_cats}
            )
    
  

    const initialState ={
        client:'',
        position_name:'',
        rent_limit:'',
        type_service:'',
        outdoor_search:false,
        tenders:false,
        type_contract:'',
        currency:'',
        country:'',
        vacancy_numbers:'',
        contract_duration:'',
        applicant_kam: `[${actualKam.id},"${actualKam.first_name} ${actualKam.last_name}"]`,
        id_hubspot:'',
        sector:'',
        experience:'',
        more_details:'',
        industry_expirence:'',
        certifcations:'',
        careers:[],
        tecnologies:[],
        seniority:'',
        skills:[],
        behaivors:[],
    }
    const validateForm = (form) =>{
        let errors ={}
        if(!form.client  ) errors.client = "Este campo es requerido"
        if(!form.position_name) errors.position_name = "Este campo es requerido"
        if(!form.currency) errors.currency = "Este campo es requerido"
        if(!form.vacancy_numbers) errors.vacancy_numbers = "Este campo es requerido"
        if(!form.contract_duration) errors.contract_duration = "Este campo es requerido"
        if(!form.sector) errors.sector = "Este campo es requerido"
        if(!form.careers) errors.careers = "Este campo es requerido"
        if(!form.industry_expirence) errors.industry_expirence = "Este campo es requerido"
        if(!form.experience) errors.experience = "Este campo es requerido"
        if(!form.more_details) errors.more_details = "Este campo es requerido"
        if(!form.seniority) errors.seniority = "Este campo es requerido"
        if(!form.id_hubspot) errors.id_hubspot = "Este campo es requerido"
        // Si el el checkbox licitaciones no esta activo
        if(form.tenders === false){
        if(!form.rent_limit) errors.rent_limit = "Este campo es requerido"
        if(!form.type_service) errors.type_service = "Este campo es requerido"
        if(!form.type_contract) errors.type_contract = "Este campo es requerido"
        if(!form.country) errors.country = "Este campo es requerido"
        if(!form.id_hubspot) errors.id_hubspot = "Este campo es requerido"
        }
     
       return errors
    }

    const [formValues,errors, handleInputChange,checkEerrors,reset,setValueForm,changeValueInput] = useFormValidation( jobActive ? jobActive : initialState,validateForm)
    // Se utiliza para resetear el formulario en la vista de crear empleo
    const activeJob = useRef(jobActive)
    useEffect(() => {
        if(jobActive !== activeJob.current){  
            reset()
            activeJob.current = jobActive
        }
        
    }, [jobActive,reset])

    
    const handleOnSubmit =(e) =>{
        e.preventDefault();
      
        if(duplicate){
            setDuplicate(false)
        }else{
              // Verifico si existen errores
            if (Object.keys(checkEerrors()).length === 0) {
                dispatch(startCreateTask(formValues,history))
                
            }else{
                setAlert(true)
                setTimeout(() => {
                    setAlert(false)
                },6000);
            }
        }
    
 
        
    }

    const handleOnBlur = () =>{
        // Si estoy duplicando lo envio al parametro correspondiente
        if(duplicating){
            dispatch(setDuplicatingTask({...formValues}))
        }else{

            dispatch(setActiveTask({...formValues}))
        }

    }
    

 
    return (
        <form onSubmit={handleOnSubmit}>
           
            <Snackbar 
                open={alert}
            >
            <Alert severity="error">Verifique los campos</Alert>
            </Snackbar>
            <div className="job__container base__card">

                
                <div className="job__container-title">
                    Esfera Esencial
                </div>
                <div className="job__input-item">
       
                 <AutoComlpleteCustomCss
                        disabled={inProccess  || duplicate || loadingHubspot}
                        getOptionSelected={(option) => option.id ===0 }
                        getOptionDisabled={(option) => option.id ===0 }
                        value={formValues.id_hubspot}
                        onChange={  async (event,newValue) =>{
                            // Metodo para rellenar el cliente de el id hubspot acutal
                            try {
                                // dispatch(hubspotStartLoading())
                                const resp = await  getClienDeal(newValue?.id) 
                                if(resp.ok){
                                    const body = await resp.json()
                                    changeValueInput('client',body)
                                    // dispatch(hubspotFinishLoading())
                                }else{
                                    // dispatch(hubspotFinishLoading())
                                }
                            } catch (error) {
                                // dispatch(hubspotFinishLoading())
                                console.log(error)
                            }
                            setValueForm({...formValues,id_hubspot:newValue})
                        }}  
                        fullWidth      
                        options={deals.filter(deal => deal.state || !deal.hasOwnProperty('state'))}
                        getOptionLabel={option => typeof option === 'string' ? option : option.name }
                        renderInput={(params) => <TextFieldCustomCss 
                                                    error={Boolean(errors.id_hubspot)}
                                                    helperText={errors.id_hubspot && errors.id_hubspot}
                                                    {...params}   type="text" size="small" label="Id hubspot" name="id_hubspot"  variant="outlined" />}
                    /> 
                   
                    { (inProccess === false && duplicate===false) &&
                    <Tooltip title="Verificar nuevos hubspot IDs"  placement="right-start" arrow >
                        {   !loadingHubspot  ?

                            <span id="job__refresh-hubspot">
                                <FontAwesomeIcon  onClick={() => { 
                                    // dispatch(startLoadHubspotDeals())
                                }} icon={faSyncAlt} />
                            </span>
                            :
                            <span id="job__refresh-loading">
                                <CircularProgress  size={20} />
                            </span>
                        }
                    </Tooltip>
                    }
                </div>
                <div className="job__input-item">
                 
                    <TextFieldCustomCss 
                        disabled={inProccess  || duplicate || loadingHubspot}
                        fullWidth
                        error={Boolean(errors.client)}
                        helperText={errors.client && "Este campo es requerido"}
                        size="small"
                        name="client"
                        label="Cliente"
                        value={formValues.client || ''}
                        onChange={handleInputChange}
                        autoComplete="nope"
                        variant="outlined"
                    /> 
             
                </div>
                <div className="job__input-item">
                    <TextFieldCustomCss
                        disabled={inProccess  || duplicate} 
                        fullWidth
                        error={Boolean(errors.position_name)}
                        helperText={errors.position_name && "Este campo es requerido"}
                        size="small"
                        onChange={handleInputChange}
                        value={formValues.position_name}
                        name="position_name"
                        label="Nombre cargo"
                        autoComplete="nope"
                        variant="outlined"
                    /> 
                </div>
                <div className="job__input-item">
                    <TextFieldCustomCss 
                        disabled={inProccess  || duplicate}
                        fullWidth
                        size="small"
                        error={Boolean(errors.rent_limit)}
                        helperText={errors.rent_limit && errors.rent_limit}
                        name="rent_limit"
                        value={formValues.rent_limit}
                        onChange={handleInputChange}
                        label="Renta tope"
                        type="number"
                        autoComplete="nope"
                        variant="outlined"
                    /> 
                </div>
               
                <div className="job__input-item">

                <FormControlLabel
                    control={
                    <Checkbox
                        disabled={inProccess  || duplicate}
                        checked={formValues.outdoor_search}
                        onChange={handleInputChange}
                        size="small"
                        name="outdoor_search"
                        color="primary"
                    />
                    }
                    label="Búsqueda en el extranjero"
                 />
                  <FormControlLabel
                    control={
                    <Checkbox
                        disabled={inProccess  || duplicate}
                        checked={formValues.tenders}
                        onChange={handleInputChange}
                        size="small"
                        name="tenders"
                        color="primary"
                    />
                    }
                    label="Licitaciones"
                 />
                </div>
                <div className="job__input-item">
                <FormControlCustomCss error={Boolean(errors.type_service)} size="small" fullWidth variant="outlined" >             
                <InputLabel htmlFor="type_service">Tipo servicio</InputLabel>
                <Select
                    disabled={inProccess  || duplicate}
                    label="Tipo de servicio"
                    value={formValues.type_service}
                    onChange={handleInputChange}            
                    inputProps={{
                        name: 'type_service',
                        id: 'type_service',
                    }}
                    >
                
                        <MenuItem selected disabled value="">
                            <em>Seleccionar</em>
                        </MenuItem>

                        
                    {
                        typesService.map( service => (
                        service.state &&
                        <MenuItem key={service.id} value={service.id}>{service.name}</MenuItem>
                        ))
                    }
                   
                </Select>
                <FormHelperText>{errors.type_service && errors.type_service}</FormHelperText>
                </FormControlCustomCss>
                </div>
                <div className="job__input-item">
                    
                <FormControlCustomCss error={Boolean(errors.type_contract)}  size="small" fullWidth variant="outlined" >             
                <InputLabel htmlFor="type_contract">Tipo de contrato</InputLabel>
                <Select
                    disabled={inProccess  || duplicate}
                    label="Tipo de contrato"
                    value={formValues.type_contract}
                    onChange={handleInputChange}
                    id="type_contract"               
                    inputProps={{
                        name: 'type_contract',
                        id: 'type_contract',
                    }}
                    >
                    <MenuItem selected disabled value="">
                        <em>Seleccionar</em>
                    </MenuItem>
                    {
                        typesContract.map( contract => (
                        contract.state &&
                        <MenuItem key={contract.id} value={contract.id}>{contract.name}</MenuItem>
                        ))
                    }
                   
                </Select>
                <FormHelperText>{errors.type_contract && errors.type_contract}</FormHelperText>
                </FormControlCustomCss>
                </div>
                <div className="job__input-item">
                <FormControlCustomCss error={Boolean(errors.currency)} size="small" fullWidth variant="outlined" >             
                <InputLabel htmlFor="currency">Tipo de moneda</InputLabel>
                    <Select
                        disabled={inProccess  || duplicate}
                        label="Tipo de moneda"
                        value={formValues.currency}
                        onChange={handleInputChange}
                        id="type_contract"           
                        inputProps={{
                            name: 'currency',
                            id: 'currency',
                        }}
                        >
                        <MenuItem selected disabled value="">
                            <em>Seleccionar</em>
                        </MenuItem>
                        {
                            currencies.map( currency => (
                            currency.state &&
                            <MenuItem key={currency.id} value={currency.id}>{currency.name}</MenuItem>
                            ))
                        }
                    
                    </Select>
                    <FormHelperText>{errors.currency && "Este campo es requerido"}</FormHelperText>
                </FormControlCustomCss>
                </div>
                <div className="job__input-item">
                <FormControlCustomCss error={Boolean(errors.country)} size="small" fullWidth variant="outlined" >             
                <InputLabel htmlFor="country">¿Para que país es la busqueda?</InputLabel>
                    <Select
                        disabled={inProccess  || duplicate}
                        label="¿Para que país es la busqueda?"
                        value={formValues.country}
                        onChange={handleInputChange}
                        id="country"               
                        inputProps={{
                            name: 'country',
                            id: 'country',
                        }}
                        >
                        <MenuItem selected disabled value="">
                            <em>Seleccionar</em>
                        </MenuItem>
                        {
                            countries.map( country => (
                            country.state &&
                            <MenuItem key={country.id} value={country.id}>{country.name}</MenuItem>
                            ))
                        }
                    
                    </Select>
                    <FormHelperText>{errors.country && errors.country}</FormHelperText>
                </FormControlCustomCss>
                </div>
                <div className="job__input-item">
                    <TextFieldCustomCss 
                        disabled={inProccess  || duplicate}
                        fullWidth
                        error={Boolean(errors.vacancy_numbers)}
                        helperText={errors.vacancy_numbers && "Este campo es requerido"}
                        size="small"
                        value={formValues.vacancy_numbers}
                        onChange={handleInputChange}
                        name="vacancy_numbers"
                        type="number"
                        label="Numero de vacantes"
                        autoComplete="nope"
                        variant="outlined"
                    /> 
                </div>
                <div className="job__input-item">
                <FormControlCustomCss error={Boolean(errors.contract_duration)} size="small" fullWidth variant="outlined" >             
                <InputLabel htmlFor="country">Duración de contrato</InputLabel>
                    <Select
                        disabled={inProccess  || duplicate}
                        label="Duración de contrato"
                        value={formValues.contract_duration}
                        onChange={handleInputChange}
                        id="contract_duration"               
                        inputProps={{
                            name: 'contract_duration',
                            id: 'contract_duration',
                        }}
                        >
                        <MenuItem selected disabled value="">
                            <em>Seleccionar</em>
                        </MenuItem>
                        {
                            contractsDuration.map( duration => (
                            duration.state && 
                            <MenuItem key={duration.id} value={duration.id}>{duration.name}</MenuItem>
                            ))
                        }
                    
                    </Select>
                    <FormHelperText>{errors.contract_duration && "Este campo es requerido"}</FormHelperText>
                </FormControlCustomCss>
                </div>
                <div className="job__input-item">
  
                <FormControlCustomCss  size="small" fullWidth variant="outlined" >             
                <InputLabel htmlFor="applicant_kam">Kam</InputLabel>
                    <Select
                        disabled={inProccess  || duplicate}
                        label="Kam"
                        value={formValues.applicant_kam}
                        onChange={handleInputChange}    
                        inputProps={{
                            name: 'applicant_kam',
                            id: 'applicant_kam',
                        }}
                        >

                        {
                            catsUsers.map( userCats => (
                            <MenuItem key={userCats.id} value={`[${userCats.id},"${userCats.first_name} ${userCats.last_name}"]`}>{`${userCats.first_name} ${userCats.last_name}`}</MenuItem>
                          
                            ))
                        }
                    
                    </Select>
                </FormControlCustomCss>
                </div>
                
                <div className="job__input-item">
                <FormControlCustomCss  error={Boolean(errors.sector)} size="small" fullWidth variant="outlined" >             
                <InputLabel htmlFor="sector">Sector</InputLabel>
                    <Select
                        disabled={inProccess  || duplicate}
                        label="Sector"
                        value={formValues.sector}
                        onBlur={handleOnBlur}
                        onChange={handleInputChange}
                        id="sector"             
                        inputProps={{
                            name: 'sector',
                            id: 'sector',
                        }}
                        >
                         <MenuItem selected disabled value="">
                            <em>Seleccionar</em>
                        </MenuItem>
                        {
                            sectors.map( sector => (
                            sector.state &&
                            <MenuItem key={sector.id} value={sector.id}>{sector.name}</MenuItem>
                            ))
                        }
                    
                    </Select>
                    <FormHelperText>{errors.sector && "Este campo es requerido"}</FormHelperText>
                </FormControlCustomCss>
                </div>
                
            </div>
            <div className="job__container base__card">
                
                <div className="job__container-title">
                    Esfera Tecnica
                </div>
                <div className="job__input-item">
                <Autocomplete
                    disabled={inProccess  || duplicate}
                    getOptionSelected={(option, value) => option.id === value.id}
                    fullWidth
                    multiple
                    name="tecnologies"
                    value={formValues.tecnologies}
                    onChange={(event,newValue) =>{
                        setValueForm({...formValues,tecnologies:newValue})
                    }}
                    options={maintainersTecnologies.filter(tecnology => tecnology.state)}
                    getOptionLabel={(option) => option.name}
                    filterSelectedOptions
                    renderInput={(params) => (
                    <TextFieldCustomCss
                        {...params}
                        variant="outlined"
                        size="small"
                        name="tecnologies"
                        label="Tecnologias"
                        placeholder="Buscar"
                    />
                    )}
                 />
                </div>
                <div className="job__input-item">
                <FormControlCustomCss error={Boolean(errors.industry_expirence)} size="small" fullWidth variant="outlined" >             
                <InputLabel htmlFor="industry_expirence">Experiencia en la industria</InputLabel>
                    <Select
                        disabled={inProccess  || duplicate}
                        label="Experiencia en la industria"            
                        value={formValues.industry_expirence} 
                        onChange={handleInputChange}
                        id="industry_expirence"               
                        inputProps={{
                            name: 'industry_expirence',
                            id: 'industry_expirence',
                        }}
                        >
                        <MenuItem selected  value="">
                            <em>Seleccionar</em>
                        </MenuItem>
                        {
                            industriesExperiences.map( experience => (
                            experience.state &&
                            <MenuItem key={experience.id} value={experience.id}>{experience.name}</MenuItem>
                            ))
                        }
                    
                    </Select>
                    <FormHelperText>{errors.industry_expirence && "Este campo es requerido"}</FormHelperText>
                </FormControlCustomCss>
                </div>
                <div className="job__input-item">
                <TextFieldCustomCss 
                        disabled={inProccess  || duplicate}
                        fullWidth
                        error={Boolean(errors.more_details)}
                        helperText={errors.more_details && "Este campo es requerido"}
                        size="small"
                        multiline
                        value={formValues.more_details}
                        onBlur={handleOnBlur}
                        onChange={handleInputChange}
                        name="more_details"
                        label="Funciones"
                        autoComplete="nope"
                        variant="outlined"
                        rows={4}
                        rowsMax={15}
                    />  
                </div>
                <div className="job__input-item">
                    <TextFieldCustomCss
                        disabled={inProccess  || duplicate} 
                        fullWidth
                        error={Boolean(errors.experience)}
                        helperText={errors.experience && "Este campo es requerido"}
                        size="small"
                        multiline
                        value={formValues.experience}
                        onChange={handleInputChange}
                        name="experience"
                        label="Especifique experiencia"
                        autoComplete="nope"
                        variant="outlined"
                        rows={4}
                        rowsMax={15}
                    /> 
                </div>
                <div className="job__input-item">
                <Autocomplete
                    disabled={inProccess  || duplicate}
                    getOptionSelected={(option, value) => option.id === value.id}
                    fullWidth
                    multiple
                    name="careers"
                    value={formValues.careers}
                    onChange={(event,newValue) =>{
                        setValueForm({...formValues,careers:newValue})
                    }}
                    options={careers.filter(career => career.state)}
                    getOptionLabel={(option) => option.name}
                    filterSelectedOptions
                    renderInput={(params) => (
                    <TextFieldCustomCss
                        {...params}
                        variant="outlined"
                        size="small"
                        name="careers"
                        label="Carrera Profesional"
                        placeholder="Buscar"
                    />
                    )}
                 />
                </div>
                <div className="job__input-item">
                <TextFieldCustomCss 
                        disabled={inProccess  || duplicate}
                        fullWidth
                        size="small"
                        value={formValues.certifcations}
                        onChange={handleInputChange}
                        name="certifcations"
                        label="Certificaciones"
                        autoComplete="nope"
                        variant="outlined"
                    />  
                </div>
               
                <div className="job__input-item">
                <FormControlCustomCss error={Boolean(errors.seniority)} size="small" fullWidth variant="outlined" >             
                <InputLabel htmlFor="seniority">Seniority</InputLabel>
                    <Select
                        disabled={inProccess  || duplicate}
                        label="Seniority"
                        value={formValues.seniority} 
                        onBlur={handleOnBlur}
                        onChange={handleInputChange}
                        id="seniority"               
                        inputProps={{
                            name: 'seniority',
                            id: 'seniority',
                        }}
                        >
                        <MenuItem selected  value="">
                            <em>Seleccionar</em>
                        </MenuItem>
                        {
                            seniorities.map( seniority => (
                            seniority.state &&
                            <MenuItem key={seniority.id} value={seniority.id}>
                                 <Tooltip    title={Boolean(seniority.description) ? seniority.description : ''} placement="right" interactive arrow>
                                    <div>
                                    {seniority.name}
                                    </div>   
                                </Tooltip>
                            </MenuItem>
                           
                            ))
                        }
                    
                    </Select>
                    <FormHelperText>{errors.seniority && "Este campo es requerido"}</FormHelperText>
                </FormControlCustomCss>
                </div>
               
            </div>
            <div className="job__container base__card">
            <div className="job__container-title">
                    Esfera cultural
            </div>
            <div className="job__input-item">
                <Autocomplete
                    disabled={inProccess  || duplicate}
                    getOptionSelected={(option, value) => option.id === value.id}
                    fullWidth
                    multiple
                    name="skills"
                    value={formValues.skills}
                    onChange={(event,newValue) =>{
                        setValueForm({...formValues,skills:newValue})
                    }}
                    options={maintainersSkills.filter(skill => skill.state)}
                    getOptionLabel={(option) => option.name}
                    filterSelectedOptions
                    renderInput={(params) => (
                    <TextFieldCustomCss
                        {...params}
                        variant="outlined"
                        size="small"
                        name="skills"
                        label="Competencias"
                        placeholder="Buscar"
                    />
                    )}
                 />
            </div>
            <div className="job__input-item">
                <Autocomplete
                    disabled={inProccess  || duplicate}
                    getOptionSelected={(option, value) => option.id === value.id}
                    fullWidth
                    multiple
                    name="behaivors"
                    value={formValues.behaivors}
                    onChange={(event,newValue) =>{
                        setValueForm({...formValues,behaivors:newValue})
                    }}
                    options={maintainerBehaivors.filter(behaivor => behaivor.state)}
                    getOptionLabel={(option) => option.name}
                    filterSelectedOptions
                    renderInput={(params) => (
                    <TextFieldCustomCss
                        {...params}
                        variant="outlined"
                        size="small"
                        onBlur={handleOnBlur}
                        name="behaivors"
                        label="Comportamiento"
                        placeholder="Buscar"
                    />
                    )}
                 />
            </div>            
            </div>
            {
               ( !inProccess  ) &&
                <div className="job__container base__card">
                         <div className="job__input-item">
                            <Button
                                 className="job__btn-form"
                                 size="large"
                                 fullWidth
                                 disabled={loading }
                                 onClick={()=> history.goBack()}
                                 type="button" variant="contained" color="primary"
                            >
                                Atras
                            </Button>
                         </div>
                  
                             <div className="job__input-item">
                             <Button
                                 className="job__btn-form"
                                 size="large"
                                 fullWidth
                                 disabled={loading }
                                 type="submit" variant="contained" color="primary"
                                 
                             >
                                 { duplicate ?   '¿Duplicar?' : 'Enviar' }
                             </Button>    
                              </div>
                         
                     
                </div>
            }
        </form>
    )
}
