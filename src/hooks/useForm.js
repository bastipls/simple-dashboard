import { useState } from "react"



// Este custom hook se encarga de manejar inputs 
export const useForm = ( initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const reset = ()=>{
        setValues(initialState);
    }


    const handleInputChange = ({target}) => {
        
        setValues({
            ...values,
            [ target.name ]:
            target.type === "checkbox"
            ? target.checked
            : target.value
        })
    
    }
    

 
 

    return {values:[values,setValues],
            onChange: handleInputChange,
            reset:reset        
    };
}
// Este custom hook se encarga de manejar inputs y validaciones de estos
export const useFormValidation = ( initialState = {},validateForm) => {
    const [formValues, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})

    const reset = ()=>{
        setValues(initialState);
    }


    const handleInputChange = ({target}) => {

        setValues({
            ...formValues,
            [ target.name ]:
            target.type === "checkbox"
            ? target.checked
            : target.value
        })
    
    }
    const changeValueInput = (inputName,value)=>{
        formValues[inputName] = value
    }
    const checkEerrors =  () =>{
        setErrors(validateForm(formValues));
        console.log(validateForm(formValues));
        return validateForm(formValues);
    }
 
 

    return {formValues,errors,handleInputChange,checkEerrors,reset,setValues,changeValueInput};
}