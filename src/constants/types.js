// En este archivo se almacenan los tipos para los reducers y acciones
export const types = {
    authLogin:'[Auth] Login',
    authCheckingFinish:'[Auth] Finish checking login state',
    authLogout:'[Auth] Logout',
    authLoadUser:'[Auth] Load User',
    authUserUpdate:'[Auth] User Update',
    
    administrationLoadUsers: '[Administration] Load Users',
    administrationUpdateUserGroup: '[Administration] Update Group User',
    administrationAddGroup:'[Administration] Add Group ',
    administrationLoadGroups:'[Administration] Load Groups',
    administrationUpdateGroup:'[Administration] Update Group',
    administrationDeleteGroup: '[Administration] Delete Group',
    administrationStartLoading: '[Administration] Start loading',
    administrationFinishLoading:'[Administration] Finish Loading',
    administrationSetUserActive: '[Administration] Set user Active',

    hubspotLoadDeals    :'[Hubspot] Deals Load',
    hubspotDealAdd      :'[Hubspot] Deal Addd',
    hubspotUpdateDeal   :'[Hubspot] Update deal',
    hubspotDealDelete   :'[Hubspot] Delete deal',
    hubspotStartLoading :'[Hubspot] Start loading',
    hubspotFinishLoading:'[Hubspot] Finish loading',

    chartsLoad           :'[Charts] Sart load data charts',
    chartsStartLoading   :'[Charts] Start Loading',
    chartsFinishLoading  :'[Charts] Finish Loading',

    catsStartLoading     :'[Cats] Start loading cats',
    catsFinishLoading   :'[Cats] Finish loading',
     
    catsLoadUsers       :'[Cats] Load Users Cats',

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
    careerAdd           :'[Maintianers] Add Career',
    careerLoad          :'[Maintainers] Load Careers',
    careerUpdate        :'[Maintainers] Update Career',
    careerDelete        :'[Maintainers] Delete Career',

    industryExperienceAdd      :'[Maintainers] Add industry experience',
    industryExperienceLoad     :'[Maintainers] Load Indsutry experience',
    industryExperienceUpdate   :'[Maintainers] Update Indsutry experience',
    industryExperienceDelete   :'[Maintainers] Delete Industry experience ',  
    
    categoryAdd              :'[Maintainers] Add Category',
    categoryLoad             :'[Maintainers] Load Category',
    categoryUpdate           :'[Maintainers] Update Category',
    categoryDelete           :'[Maintainers] Delete Category',

    sectorAdd             :'[Maintainers] Add Sector',
    sectorLoad            :'[Maintainers] Load Sector',
    sectorUpdate          :'[Maintainers] Update Sector',
    sectorDelete          :'[Maintainers] Delete Sector',
    
    errorAdd                :'[Error] Add error',
    errorDelete             :'[Error] Delete error',




    uiShowSideBar   :'[UI] Show Sidebar',
    uiStartLoading  :'[UI] Start loading',
    uiFinishLoading :'[UI] Finish loading',
    uiOpenModal     :'[UI] Open modal',
    uiCloseModal    :'[UI]  Close modal',

    uiChangeStepJob :'[UI] Change step',
    
}