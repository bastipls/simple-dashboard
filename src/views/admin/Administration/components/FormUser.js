import { Button } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startUpdateUserGroup } from '../../../../actions/administration'
import { TextFieldCustomCss } from '../../../../components/inputs/InputsMaterialCustom'
import { useForm } from '../../../../hooks/useForm'


export const FormUser = ({userActive,groups}) => {
    const initialState = {
        groups:userActive   ? userActive.groups  : []
    }
    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );
    const {values:[formValues,setValueForm]} = useForm( initialState)
    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log("ID",userActive?.id,"user",userActive)
        dispatch(startUpdateUserGroup(userActive?.id,{groups:formValues.groups}))
    }
    return (
        <form className="administration__container-detail-user base__card" onSubmit={handleOnSubmit}>
            <h3 className="administration__title">{`${userActive?.first_name} ${userActive?.last_name}`}</h3>
        <div className="administration__input-item">
        <Autocomplete

                getOptionSelected={(option, value) => option.id === value.id}
                fullWidth
                multiple
                name="groups"
                value={formValues.groups}
                onChange={(_,newValue) =>{
                    setValueForm({...formValues,groups:newValue})
                }}
                options={groups}
                getOptionLabel={(option) => option.name}
                filterSelectedOptions
                renderInput={(params) => (
                <TextFieldCustomCss
                    {...params}
                    variant="outlined"
                    size="small"
                    name="groups"
                    label="Grupos"
                    placeholder="Buscar"
                />
                )}
             />
              
        </div>
        <div className="administration__input-item">
        <Button
                size="large"
                fullWidth
                disabled={loading}
                // margin="normal"
                type="submit" variant="contained" color="primary"
                
            >
                Actualizar
        </Button>  
        </div>
    </form>
    )
}
