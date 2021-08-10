
import { TablePagination } from '@material-ui/core';
import MaterialTable from 'material-table'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startAddUser, startLoadUsers } from '../../../../actions/administration';
import { localizationMaterialTable } from '../../../../constants/localizations';

export const MyMaterialTableUsers = () => {

    const dispatch = useDispatch();
    const {loading,users:{usersList,totalUsers}} = useSelector( state => state.administration );
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(6);
    useEffect(() => {
       dispatch(startLoadUsers(page+1))
    }, [dispatch,page])

    const columns = [
      {
          title:"ID",
          field:"id",
          editable:false
        //   render:rowData => <Link  style={{textDecoration:"none"}} to={`/admin/usuarios/${rowData.id}`} >{pad(rowData.id,5)}</Link>,


      },
      {
        title:"Correo",
        field:"email",
     },

     {
         title:"Nombre",
         field:'first_name',
      


     }


    ];
    const handleChangePage = (event,newPage) => {
        setPage(newPage)
    }
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value));

      };

    const handleAdd = (newData)=>{
    return new Promise((resolve,reject) => {

        dispatch(startAddUser(newData))
        resolve()
    })
    }
    return (
            <MaterialTable 
                title="Usuarios"
                columns={columns}
                data={usersList}
                isLoading={loading}
                style={{minWidth:"100%"}}
                localization={localizationMaterialTable}
                editable={{
                            onRowAdd:handleAdd,
                            // onRowUpdate:handleUpdate,               
                        }}
                options={{
                    loadingType:'linear',
                    pageSize:5,
                    actionsColumnIndex:-1
                }}
                components={{
                    Pagination: props => (
                                 <TablePagination
                                   {...props}
                                    rowsPerPageOptions={[6]}
                                    count={totalUsers}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                />
                    ),
                }}
           />   
 
    )
}
