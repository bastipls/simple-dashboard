// En este archivo se almacenan los tipos para los reducers y acciones
export const types = {
    authLogin:'[Auth] Login',
    authCheckingFinish:'[Auth] Finish checking login state',
    authLogout:'[Auth] Logout',
    authLoadUser:'[Auth] Load User',
    authUserUpdate:'[Auth] User Update',
    
    administrationLoadUsers: '[Administration] Load Users',
    administrationAddUser:'[Administration] Add Group ',
    administrationUpdateUser:'[Administration] Update Group',
    administrationDeleteUser: '[Administration] Delete Group',
    administrationStartLoading: '[Administration] Start loading',
    administrationFinishLoading:'[Administration] Finish Loading',
    administrationSetUserActive: '[Administration] Set user Active',

    chartsLoad           :'[Charts] Sart load data charts',
    chartsStartLoading   :'[Charts] Start Loading',
    chartsFinishLoading  :'[Charts] Finish Loading',


    taskAdd             :'[Tasks] New Task',
    tasksLoad            :'[Tasks] Load Task',
    jobsUpdate          :'[Tasks] Update Task',
    jobsDelete          :'[Tasks] Delete Task',
    tasksSetActive        :'[Tasks] Set active Task',
    taskSetDuplicate     :'[Tasks] Set duplicate Task',
    taskSetReview        :'[Tasks] Set Review Task',
    taskCleaning         :'[Tasks] Set cleaning Task',
    
    
    tasksStartLoading        :'[Tasks] Start loading',
    tasksFinishLoading       :'[Tasks] Finish loading',
    
    maintainersStartLoading:'[Maintainers] Start loading maintainers',
    maintainersFinishLoading:'[Maintainers] Finish loading maintainers',


    
    categoryAdd              :'[Maintainers] Add Category',
    categoryLoad             :'[Maintainers] Load Category',
    categoryUpdate           :'[Maintainers] Update Category',
    categoryDelete           :'[Maintainers] Delete Category',

    sectorAdd             :'[Maintainers] Add Sector',
    sectorLoad            :'[Maintainers] Load Sector',
    sectorUpdate          :'[Maintainers] Update Sector',
    sectorDelete          :'[Maintainers] Delete Sector',
    
    notificationAdd                :'[Notifications] Add notification',
    notificationDelete             :'[Notifications] Delete notification',




    uiShowSideBar   :'[UI] Show Sidebar',
    uiStartLoading  :'[UI] Start loading',
    uiFinishLoading :'[UI] Finish loading',
    uiOpenModal     :'[UI] Open modal',
    uiCloseModal    :'[UI]  Close modal',

    uiChangeStepJob :'[UI] Change step',
    
}