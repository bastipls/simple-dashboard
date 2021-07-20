import MaterialTable from 'material-table'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { localizationMaterialTable } from '../../../../constants/localizations'
import { objectToFormTask } from '../../../../utils/objectToFormTask';
import { setDuplicatingTask } from '../../../../actions/tasks'
import { pad } from '../../../../utils/pad';
import moment from 'moment';

export const MyMaterialTableSearch = ({title, data}) => {
    const dispatch = useDispatch();
    const columns = [
        {
            title:"ID",
            field:"id_pad",
            filtering:false,
            render:rowData => <Link onClick={() =>{
                const task = objectToFormTask(rowData)
                
                dispatch(setDuplicatingTask(task))
            }} style={{textDecoration:"none"}} to={`/admin/buscar-tarea/duplicar/${rowData.id}`} >{pad(rowData.id,6)}</Link>,
         
        },
        {
            title:'Titulo',
            field:'title'
        },
        {
            title:'Sector',
            field:'sector.name',
            filtering:false
        },
        {
            title:"Creación",
            field:"created_at",
            render:rowData => <p>{moment(rowData.created_at).format('YYYY-MM-DD HH:mm')}</p>,
            filtering:false
        },


    ];
    return (
        <MaterialTable 
                title={title}
                columns={columns}
                data={data}
                style={{minWidth:"100%"}}
                localization={localizationMaterialTable}
                options={{
                    filtering:true
                }}
           />  
    )
}

