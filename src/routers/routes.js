
import {  faChartPie,  faEdit, faPen, faSearch, faToolbox, faUserCog, faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { DetailUser } from '../views/admin/Administration/components/DetailUser';
import { UsersView } from '../views/admin/Administration/UsersView';
import { DashBoardView } from '../views/admin/Dashboard/DashBoardView';
import { TabsMaintainersView } from '../views/admin/Maintainers/TabsMaintainersView';
import { DuplicateTaskView } from '../views/admin/Tasks/DuplicateTaskView';
import { SearchTaskView } from '../views/admin/Tasks/SearchTaskView';
import { TaskFormView } from '../views/admin/Tasks/TaskFormView';



const adminRoutes = [ 

    {
        layout:'/admin',
        path:'/dashboard',
        name:"Dashboard",
        icon:faChartPie,
        groups:['admin'],
        component:DashBoardView,
        permissions:['view_jobbenefit'],
        isMenuItem:true,
        isSubMenu:false,
        
    },
    {
        name:"Tareas",
        icon:faEdit,
        groups:['admin'],
        permissions:['view_jobbenefit'],
        isMenuItem:true,
        isSubMenu:true,
        subMenus:[
            {
                layout:'/admin',
                path:'/crear-tarea',
                name:"Crear",
                icon:faPen,
                component:TaskFormView,
                groups:['admin'],
                permissions:['view_jobbenefit']
            },
            {
                layout:'/admin',
                path:'/buscar-tarea',
                name:"Buscar",
                icon:faSearch,
                component:SearchTaskView,
                groups:['admin'],
                permissions:['view_jobbenefit']
            }
        ]
    },
    {
        layout:'/admin',
        path:'/mantenedores',
        name:"Mantenedores",
        icon:faToolbox,
        groups:['admin'],
        component:TabsMaintainersView,
        permissions:['view_jobbenefit'],
        isMenuItem:true,
        isSubMenu:false,
        
    },

    {
        name:"Administracion",
        icon:faUsersCog,
        groups:['admin'],
        permissions:['view_jobbenefit'],
        isMenuItem:true,
        isSubMenu:true,
        subMenus:[
            {
                layout:'/admin',
                path:'/usuarios',
                name:"Usuarios",
                icon:faUserCog,
                component:UsersView,
                groups:['admin'],
                permissions:['view_jobbenefit']
            }
        ]
    },
    // Seccion rutas de detalle
    {
        layout:'/admin',
        path:'/usuarios/:id',
        name:"Detalle Usuario",
        icon:null,
        groups:['admin'],
        component:DetailUser,
        permissions:['view_jobbenefit'],
        isMenuItem:false,
        isSubMenu:false,
        
    },
    {
        layout:'/admin',
        path:'/buscar-tarea/duplicar/:id',
        name:"Detalle tarea",
        icon:null,
        groups:['admin'],
        component:DuplicateTaskView,
        permissions:['view_jobbenefit'],
        isMenuItem:false,
        isSubMenu:false,
        
    },
]

export default adminRoutes;