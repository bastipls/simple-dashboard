import { types } from "../constants/types"

const errorsAdd  = (error) => ({
    type:types.errorAdd,
    payload:error
})
const errorsDelete  = (idError) => ({
    type:types.errorDelete,
    payload:idError
})