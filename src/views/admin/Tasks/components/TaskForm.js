
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveTask, setDuplicatingTask, startCreateTask } from '../../../../actions/tasks'
import { FormControlCustomCss, TextFieldCustomCss } from '../../../../components/inputs/InputsMaterialCustom'
import { useFormValidation } from '../../../../hooks/useForm'
import { Button, FormHelperText, InputLabel, MenuItem, Select, Snackbar} from '@material-ui/core'
import { Autocomplete,Alert } from '@material-ui/lab'
import PropTypes from 'prop-types';

export const TaskForm = ({sectors,categories,activeTask,duplicating=false}) => {

    const dispatch = useDispatch();
    const [duplicate, setDuplicate] = useState(duplicating ? true : false)
    const initialState = {
        title:"",
        sector:"",
        categories:[],
        description:"",
    }
    const validateForm =  (form) => {
        let errors = {}
        if(!form.title  ) errors.title = "Este campo es requerido"
        if(!form.sector) errors.sector = "Eliga una opción"
        if(form.categories.length <= 0) errors.categories = "Eliga al menos una opción"
        if(!form.description) errors.description = "Este campo es requerido"

        return errors;
    }
    const {formValues,errors,handleInputChange,checkEerrors,reset,setValues} = useFormValidation(activeTask ? activeTask : initialState,validateForm)
    console.log(formValues)
    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(duplicate){
            setDuplicate(false)
        }else{

            if (Object.keys(checkEerrors()).length === 0) {
                console.log("POST",formValues)
                dispatch(startCreateTask(formValues))
                
            }else{
                console.log("ERROR")
                console.log(errors)
            }
        }
    }
    const handleOnBlur = () =>{
        // Verifico si esta en la interfaz de duplicado 
        // y lo mando al correspondiente store
        if(duplicating){
            dispatch(setDuplicatingTask({...formValues}))
        }else{

            dispatch(setActiveTask({...formValues}))
        }

  
    }
    
    const currentTask = useRef(activeTask);
    useEffect(() => {
        if(activeTask !== currentTask.current){  
            reset()
            currentTask.current = activeTask;
        }
        
    }, [activeTask,reset])
    return (
        <form className="tasks__container-form" onSubmit={handleOnSubmit}>
             <Snackbar anchorOrigin={{vertical:"bottom",horizontal:"right"}} open={duplicating && duplicate === false} autoHideDuration={6000} >
                <Alert severity="info">
                    Duplicando
                </Alert>
            </Snackbar>
        <div className="tasks__container-inputs tasks__container base__card">
            <div className="tasks__item-input">

                <TextFieldCustomCss
                    disabled={duplicate}
                    fullWidth
                    error={Boolean(errors.title)}
                    onBlur={handleOnBlur}
                    helperText={errors.title && errors.title}
                    size="medium"
                    onChange={handleInputChange}
                    value={formValues.title}
                    name="title"
                    label="Titulo"
                    autoComplete="nope"
                    variant="outlined"
                /> 
            </div>
            <div className="tasks__item-input">
            <FormControlCustomCss error={Boolean(errors.sector)} size="medium" fullWidth variant="outlined" >             
                <InputLabel htmlFor="sector">Sector</InputLabel>
                <Select
                    disabled={duplicate}
                    label="Sector"
                    value={formValues.sector}
                    onChange={handleInputChange}    
                    onBlur={handleOnBlur}        
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
                <FormHelperText>{errors.sector && errors.sector}</FormHelperText>
                </FormControlCustomCss>
            </div>
            <div className="tasks__item-input">
                <Autocomplete
                        disabled={duplicate}
                        getOptionSelected={(option, value) => option.id === value.id}
                        fullWidth
                        multiple
                        onBlur={handleOnBlur}
                        name="categories"
                        value={formValues.categories}
                        onChange={(event,newValue) =>{
                            setValues({...formValues,categories:newValue})
                        }}
                        options={categories.filter(category => category.state)}
                        getOptionLabel={(option) => option.name}
                        filterSelectedOptions
                        renderInput={(params) => (
                        <TextFieldCustomCss
                            error={Boolean(errors.categories)}
                            helperText={errors.categories && errors.categories}
                            {...params}
                            variant="outlined"
                            size="medium"
                            name="categories"
                            label="Categoria"
                            placeholder="Buscar"
                        />
                        )}
                 />
     
            </div>
            <div className="tasks__item-input-description">

                <TextFieldCustomCss
                    disabled={duplicate}
                    fullWidth
                    multiline
                    rows={10}
                    rowsMax={15}
                    error={Boolean(errors.description)}
                    helperText={errors.description && errors.description}
                    size="medium"
                    onChange={handleInputChange}
                    onBlur={handleOnBlur}
                    value={formValues.description}
                    name="description"
                    label="Descripción"
                    autoComplete="nope"
                    variant="outlined"
                /> 
            </div>
        </div>
        <div className="tasks__container-btns tasks__container base__card">
            <div className="tasks__item-btn">
                <Button
                    size="large"
                    fullWidth
                    type="submit" variant="contained" color="primary"
                >
                     { duplicate ?   '¿Duplicar?' : 'Enviar' }
                </Button>
            </div>
        </div>
        </form>
    )
}
TaskForm.propTypes ={
    sectors:PropTypes.array.isRequired,
    categories:PropTypes.array.isRequired,
    activeTask:PropTypes.object,
    duplicating:PropTypes.bool.isRequired
}