import { types } from "../constants/types";

const initialState = {
    loading:false,
    categories:[],
    sectors:[],

}
export const maintainersReducer = (state=initialState,action) =>{
    switch (action.type) {
        case types.maintainersStartLoading:
            return {
                ...state,
                loading:true

            }
        case types.maintainersFinishLoading:
            return {
                ...state,
                loading:false
            }
        // Seccion tipo de servicio
        case types.typeServiceAdd:
            return {
                ...state,
                typesService:[...state.typesService,action.payload]
            }
        case types.typeServiceLoad:
            return {
                ...state,
                typesService:[...action.payload]
            }
        case types.typeServiceUpdate:
            return {
                ...state,
                typesService:state.typesService.map(service => 
                    service.id === action.payload.id ?
                    action.payload
                    : service
                )
            }
        case types.typeServiceDelete:
            return {
                ...state,
                typesService:state.typesService.filter(
                    service => (service.id !== action.payload)
                )
            }
        // Fin tipo de servicio
        // Seccion tipo de contrato
        case types.typeContractAdd:
            return {
                ...state,
                typesContract:[...state.typesContract,action.payload]
            }
        case types.typeContractLoad:
            return {
                ...state,
                typesContract:[...action.payload]
            }
        case types.typeContractUpdate:
            return {
                ...state,
                typesContract:state.typesContract.map(contract => 
                    contract.id === action.payload.id ?
                    action.payload.contract
                    : contract
                )
            }
        case types.typeContractDelete:
            return {
                ...state,
                typesContract:state.typesContract.filter(
                    contract => (contract.id !== action.payload)
                )
            }
        // Fin tipo de contrato
        // Seccion tipo de carrera profesional
        case types.careerAdd:
            return {
                ...state,
                careers:[...state.careers,action.payload]
            }
        case types.careerLoad:
            return {
                ...state,
                careers:[...action.payload]
            }
        case types.careerUpdate:
            return {
                ...state,
                careers:state.careers.map(career => 
                    career.id === action.payload.id ?
                    action.payload
                    : career
                )
            }
        case types.careerDelete:
            return {
                ...state,
                careers:state.careers.filter(
                    career => (career.id !== action.payload)
                )
            }
        // Fin tipo carrera profesional
        // Seccion  expperiencia en la industria
        case types.industryExperienceAdd:
            return {
                ...state,
                industriesExperiences:[...state.industriesExperiences,action.payload]
            }
        case types.industryExperienceLoad:
            return {
                ...state,
                industriesExperiences:[...action.payload]
            }
        case types.industryExperienceUpdate:
            return {
                ...state,
                industriesExperiences:state.industriesExperiences.map(industryExperience => 
                    industryExperience.id === action.payload.id ?
                    action.payload
                    : industryExperience
                )
            }
        case types.industryExperienceDelete:
            return {
                ...state,
                industriesExperiences:state.industriesExperiences.filter(
                    industryExperience => ( industryExperience.id !== action.payload )
                )
            }
        // Fin experiencia en la industria
        // Seccion tecnologias
        case types.tecnologyAdd:
            return {
                ...state,
                tecnologies:[...state.tecnologies,action.payload]
            }
        case types.tecnologyLoad:
            return {
                ...state,
                tecnologies:[...action.payload]
            }
        case types.tecnologyUpdate:
            return {
                ...state,
                tecnologies:state.tecnologies.map(tecnology => 
                    tecnology.id === action.payload.id ?
                    action.payload
                    : tecnology
                )
            }
        case types.tecnologyDelete:
            return {
                ...state,
                tecnologies:state.tecnologies.filter(
                    tecnology => (tecnology.id !== action.payload)
                )
            }
        // Fin tecnologias
        // Seccion habilidades
        case types.categoryAdd:
            return {
                ...state,
                categories:[...state.categories,action.payload]
            }
        case types.categoryLoad:
            return {
                ...state,
                categories:[...action.payload]
            }
        case types.categoryUpdate:
            return {
                ...state,
                categories:state.categories.map(skill => 
                    skill.id === action.payload.id ?
                    action.payload
                    : skill
                )
            }
        case types.categoryDelete:
            return {
                ...state,
                categories:state.categories.filter(
                    skill => (skill.id !== action.payload)
                )
            }
        // Fin habilidades
        // Seccion tipo de contrato

        case types.behaivorAdd:
            return {
                ...state,
                behaivors:[...state.behaivors,action.payload]
            }
        case types.behaivorLoad:
            return {
                ...state,
                behaivors:[...action.payload]
            }
        case types.behaivorUpdate:
            return {
                ...state,
                behaivors:state.behaivors.map(behaivor => 
                    behaivor.id === action.payload.id ?
                    action.payload
                    : behaivor
                )
            }
        case types.behaivorDelete:
            return {
                ...state,
                behaivors:state.behaivors.filter(
                    behaivor => (behaivor.id !== action.payload)
                )
            }
        // Fin tipo de contrato
        // Seccion tipo de contrato
        case types.sectorAdd:
            return {
                ...state,
                sectors:[...state.sectors,action.payload]
            }
        case types.sectorLoad:
            return {
                ...state,
                sectors:[...action.payload]
            }
        case types.sectorUpdate:
            return {
                ...state,
                sectors:state.sectors.map(sector => 
                    sector.id === action.payload.id ?
                    action.payload.sector
                    : sector
                )
            }
        
        case types.sectorDelete:
            return {
                ...state,
                sectors:state.sectors.filter(
                    sector => (sector.id !== action.payload)
                )
            }
        // Fin tipo de contrato
        // Seccion moneda
        case types.currencyAdd:
            return {
                ...state,
                currencies:[...state.currencies,action.payload]
            }
        case types.currencyLoad:
            return {
                ...state,
                currencies:[...action.payload]
            }
        case types.currencyUpdate:
            return {
                ...state,
                currencies:state.currencies.map(currency => 
                    currency.id === action.payload.id ?
                    action.payload
                    : currency
                )
            }
        case types.currencyDelete:
            return {
                ...state,
                currencies:state.currencies.filter(
                    currency => (currency.id !== action.payload)
                )
            }
        // Fin  moneda
        // Seccion país
        case types.countryAdd:
            return {
                ...state,
                countries:[...state.countries,action.payload]
            }
        case types.countryLoad:
            return {
                ...state,
                countries:[...action.payload]
            }
        case types.countryUpdate:
            return {
                ...state,
                countries:state.countries.map(country => 
                    country.id === action.payload.id ?
                    action.payload
                    : country
                )
            }
        case types.countryDelete:
            return {
                ...state,
                countries:state.countries.filter(
                    country => (country.id !== action.payload)
                )
            }
        // Fin  país
        // Seccion duracion de contrato
        case types.contractDurationAdd:
            return {
                ...state,
                contractsDuration:[...state.contractsDuration,action.payload]
            }
        case types.contractDurationLoad:
            return {
                ...state,
                contractsDuration:[...action.payload]
            }
        case types.contractDurationUpdate:
            return {
                ...state,
                contractsDuration:state.contractsDuration.map(contractDuration => 
                    contractDuration.id === action.payload.id ?
                    action.payload
                    : contractDuration
                )
            }
        case types.contractDurationDelete:
            return {
                ...state,
                contractsDuration:state.contractsDuration.filter( 
                    contractDuration => ( contractDuration.id !== action.payload)
                 )
            }
        // Fin duracion de contrato
        // Seccion seniority
        case types.seniorityAdd:
            return {
                ...state,
                seniorities:[...state.seniorities,action.payload]
            }
        case types.seniorityLoad:
            return {
                ...state,
                seniorities:[...action.payload]
            }
        case types.seniorityUpdate:
            return {
                ...state,
                seniorities:state.seniorities.map(seniority => 
                    seniority.id === action.payload.id ?
                    action.payload
                    : seniority
                )
            }
        case types.seniorityDelete:
            return {
                ...state,
                seniorities:state.seniorities.filter(
                    seniority => (seniority.id !== action.payload)
                )
            }
        // Fin  seniority
           
           
    
        default:
            return state;
    }
}