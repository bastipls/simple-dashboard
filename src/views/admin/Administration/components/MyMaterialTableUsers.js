
import MaterialTable from 'material-table'
import React from 'react'
import { Link } from 'react-router-dom';
import { localizationMaterialTable } from '../../../../constants/localizations';
import { pad } from '../../../../utils/pad';

export const MyMaterialTableUsers = ({loading,users}) => {


    

    const columns = [
      {
          title:"ID",
          field:"id",
          render:rowData => <Link  style={{textDecoration:"none"}} to={`/admin/usuarios/${rowData.id}`} >{pad(rowData.id,5)}</Link>,


      },
      {
        title:"Correo",
        field:"email",
     },

     {
         title:"Grupos",
         field:'groups.name',
         render:rowData =>  <> { rowData.groups.map(group => (<p key={group.id}>{group.name}</p>)) } </>,


     }


    ];

    return (
            <MaterialTable 
                title="Usuarios"
                columns={columns}
                data={users}
                isLoading={loading}
                style={{minWidth:"100%"}}
                localization={localizationMaterialTable}

                options={{
                    loadingType:'linear',
                    pageSize:5,
                    actionsColumnIndex:-1
                }}
           />   
 
    )
}
