import { types } from "../constants/types"

const initialState = {
    loading:false,
    tasks:[],
    active:null,
    observationsActive:[],
    duplicatingTask:null,
}
export const tasksReducer = (state = initialState,action) => {
    switch (action.type) {
         case types.taskAdd:
            return {
                ...state,
                tasks:[
                    ...state.tasks,
                    action.payload
                ]
            }
        case types.jobAddObservationJob:
            return {
                ...state,
                observationsActive:[
                    ...state.observationsActive,
                    action.payload
                ]
            }
        case types.jobLoadObservationsJob:
            return {
                ...state,
                observationsActive:[...action.payload]
            }
        case types.jobSetCleaningObservations:
            return {
                ...state,
                observationsActive:[]
            }
        case types.jobsAddCandidates:
            return {
                ...state,
                tasks:state.tasks.map((job) =>{
                    if(job.job_cats_id === action.payload.id){
                        job.recruiter_id = action.payload.candidatesAndState.recruiter_id
                        job.status_cats =  action.payload.candidatesAndState.status_cats
                        job.candidates = action.payload.candidatesAndState.candidates

                        return job
                    }else{
                        
                        return job
                    }
                })

            }
        case types.tasksLoad:
 
             return {
                 ...state,
                 tasks:[...action.payload],
               
             }
        case types.tasksSetActive:
             return {
                 ...state,
                 active:{
                     
                     ...action.payload
                 }
             }
        case types.jobSetStatusFinish:
            return {
                ...state,
                tasks:state.tasks.map(job => 
                    job.id === action.payload.id ?
                    action.payload
                    : job
                ),
                jobsInProcess:state.jobsInProcess.filter(job => 
                    job.id !== action.payload.id         
                ),
                jobsFinished:[
                    ...state.jobsFinished,
                    action.payload
                ]
            }
        case types.taskSetDuplicate:
            return {
                ...state,
                duplicatingTask:{
                    ...action.payload
                }
            }
         case types.taskCleaning:
             return {
                 ...state,
                 active:null,
             }
        case types.jobsStartLoadingJob:
            return {
                ...state,
                loading:true
            }
        case types.jobsFinishLoadingJob:
            return {
                ...state,
                loading:false

            }

         default:
            return state;
    }
 }
 