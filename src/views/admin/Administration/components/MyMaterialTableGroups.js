// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import MaterialTable from 'material-table'
// import React from 'react'
// import { useDispatch } from 'react-redux';
// import { startAddGroup, startDeleteGroup, startLoadGroups, startUpdateGroup } from '../../../../actions/administration';
// import { localizationMaterialTable } from '../../../../constants/localizations'

// export const MyMaterialTableGroups = ({loading,groups}) => {
//     const dispatch = useDispatch();
//     const columns = [
//         {
//             title:"ID",
//             field:"id",
//             editable:"never"
//         },
//         {
//             title:"Nombre",
//             field:"name"
//         }

//     ]
//     const handleAdd = (newData)=>{
//         return new Promise((resolve,reject) => {
 
//             dispatch(startAddGroup(newData))
//             resolve()
//         })
//     }
//     const handleUpdate = (newData,oldData) => {
//         return new Promise((resolve,reject) => {
     
//             if(newData.name !== oldData.name  ){

//                 dispatch(startUpdateGroup(oldData.id,newData))

//             }
//             resolve()
//         })
//     }
//     const handleDelete = (e,oldData)=>{
      
//         dispatch(startDeleteGroup(oldData))
      
//     }
//     return (
//         <MaterialTable 
//         title="Grupos"
//         columns={columns}
//         data={groups}
//         isLoading={loading}
//         style={{minWidth:"100%"}}
//         localization={localizationMaterialTable}
//         editable={{
//             onRowAdd:handleAdd,
//             onRowUpdate:handleUpdate,
    

//         }}
//         actions={[
//             {
//                 icon: 'refresh',
//                 tooltip: `Refrescar`,
//                 isFreeAction: true,
//                 onClick:()=> dispatch(startLoadGroups())
//             },
//             {
//                 icon:() =>(
//                     <FontAwesomeIcon color="red" size="xs" icon={faTrash} />
//                 ),
//                 tooltip:'Eliminar',
//                 onClick:handleDelete,
                
//             }
//         ]}
//         options={{
//             loadingType:'linear',
//             pageSize:5,
//             actionsColumnIndex:-1
//         }}
//    />  
//     )
// }
