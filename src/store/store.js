import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { tasksReducer } from "../reducers/tasksReducer";
import { maintainersReducer } from "../reducers/maintainersReducer";
import { uiReducer } from "../reducers/uiReducer";
import { chartsReducer } from "../reducers/chartsReducer";

import { administrationRedcuer } from "../reducers/administrationReducer";

import { notificationReducer } from "../reducers/notificationReducer";



const reducers = combineReducers({
    auth:authReducer,
    ui:uiReducer,
    tasks:tasksReducer,
    maintainers:maintainersReducer,
    charts:chartsReducer,
    administration:administrationRedcuer,
    notification:notificationReducer
})
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)