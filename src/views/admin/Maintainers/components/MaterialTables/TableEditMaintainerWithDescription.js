import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MaterialTable from 'material-table'
import React from 'react'
import { useDispatch } from 'react-redux';
import { TextFieldCustomCss } from '../../../../../components/inputs/InputsMaterialCustom';
import { localizationMaterialTable } from '../../../../../constants/localizations'

export const TableEditMaintainerWithDescription = ({withId=false,title,data,addAction,updateAction,deleteAction,loadAction}) => {
   
    const dispatch = useDispatch();
   
    const columns  = [
        {
            title:"ID",
            field:"id",
            // Verifico si el id es editable
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
        },
        {
            title:"Descripción",
            field:"description",
            editComponent: props => (
                <TextFieldCustomCss 
                        fullWidth
                        multiline
                        value={props.value}
                        onChange={e => props.onChange(e.target.value)}
                        label="Descripción"
                        autoComplete="nope"
                        variant="outlined"
                        rows={4}
                        rowsMax={15}
                    />
              )
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
     
            if(newData.state !== oldData.state || newData.name !== oldData.name || newData.id !==  oldData.id || newData.description !== oldData.description ){
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
