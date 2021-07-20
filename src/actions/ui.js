import { types } from "../constants/types";

export const showSidebar = (visibility)=>({  
    type:types.uiShowSideBar,
    payload:!visibility
})


export const startLoading = () => (
    {type:types.uiStartLoading}
);

export const finishLoading = () => (

    {type:types.uiFinishLoading}
);
export const openModal = () => (
    {type:types.uiOpenModal}
);

export const closeModal = () => (
    {type:types.uiCloseModal}
);

