import MaterialTable from 'material-table'
import React from 'react'
import { useDispatch } from 'react-redux';
import { localizationMaterialTable } from '../../../../../constants/localizations'

export const TableEditMaintainerWithId = ({withId,title,data,addAction,updateAction,loadAction}) => {
   
    const dispatch = useDispatch();
   
    const columns  = [
        {
            title:"ID",
            field:"id",
            editable:'never'
        },
        {
            title:"ID CATS",
            field:"id_cats",
            editable:withId ? "always": "never"
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
     
            if(newData.state !== oldData.state || newData.name !== oldData.name || newData.id_cats !==  oldData.id_cats){
                newData.state = (newData.state === 'true' || newData.state === true ) ? (true):(false)
                dispatch(updateAction(oldData.id,newData))

            }
            resolve()
        })
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

            ]}
            options={{
                loadingType:'linear',
                pageSize:5,
                actionsColumnIndex:-1
            }}
         />  
    )
}
