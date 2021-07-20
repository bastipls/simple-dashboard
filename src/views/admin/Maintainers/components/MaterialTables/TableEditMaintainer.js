import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MaterialTable from 'material-table'
import React from 'react'
import { useDispatch } from 'react-redux';
import { localizationMaterialTable } from '../../../../../constants/localizations'

export const TableEditMaintainer = ({title,data,addAction,updateAction,deleteAction,loadAction}) => {
   
    const dispatch = useDispatch();
   
    const columns  = [
        {
            title:"ID",
            field:"id",
            editable:"never"
        },
        {
            title:"Nombre",
            field:"name"
        },
        {
            title:"Estado",
            field:"state",
            render:rowData => <p> {rowData.state ? 'Activo':'Inactivo' }</p>,
            type:"boolean",
            lookup:{true:'Activo',false:'Inactivo'},
        }
    ]
 
    const handleAdd = (newData)=>{
        return new Promise((resolve,reject) => {
            newData.state = (newData.state === 'true' || newData.state === true ) ? (true):(false)
            dispatch(addAction(newData))
            resolve()
        })
    }
    const handleUpdate = (newData,oldData) => {
        return new Promise((resolve,reject) => {
     
            if(newData.state !== oldData.state || newData.name !== oldData.name){
                newData.state = (newData.state === 'true' || newData.state === true ) ? (true):(false)
                dispatch(updateAction(oldData.id,newData))

            }
            resolve()
        })
    }
    const handleDelete = (e,oldData)=>{
      
        dispatch(deleteAction(oldData))
      
    }

    return (
        <MaterialTable 
            title={title}
            columns={columns}
            data={data}
            style={{minWidth:"100%"}}
            localization={localizationMaterialTable}
            editable={{
                onRowAdd:handleAdd,
                onRowUpdate:handleUpdate,

            }}
            actions={[
                {
                    icon: 'refresh',
                    tooltip: `Refrescar`,
                    isFreeAction: true,
                    onClick:()=> dispatch(loadAction())
                },
                {
                    icon:() =>(
                        <FontAwesomeIcon color="red" size="xs" icon={faTrash} />
                    ),
                    tooltip:'Eliminar',
                    onClick:handleDelete,
                    
                }
            ]}
            options={{
                loadingType:'linear',
                pageSize:5,
                actionsColumnIndex:-1
            }}
         />  
    )
}
