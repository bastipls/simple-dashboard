import {  Tab, Tabs } from '@material-ui/core';
import React, {  useState } from 'react'
import { useSelector } from 'react-redux';
import { 
        startAddSector, 
        startAddCategory, 
        startDeleteCategory, 
        startLoadSectors,  
        startLoadCategory, 
        startUpdateSector, 
        startUpdateCategory, 
     } from '../../../actions/maintainers';
import { TableEditMaintainer } from './components/MaterialTables/TableEditMaintainer';
// import { TableEditMaintainerWithDescription } from './components/MaterialTables/TableEditMaintainerWithDescription';
// import { TableEditMaintainerWithId } from './components/MaterialTables/TableEditMaintainerWithId';

export const TabsMaintainersView = () => {

    const {loading } = useSelector(state => state.ui)
    const { 
            categories,
            sectors,
           } = useSelector( state => state.maintainers );


    const [tabValue, setTabValue] = useState(0)
    
    const a11yProps = (index) => {
        return {
          id: `scrollable-auto-tab-${index}`,
          'aria-controls': `scrollable-auto-tabpanel-${index}`,

        };
      }
    
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
      };
    

    return (
        <>
        
          
     
        <div className="maintainers__tab-container base__card">
            <Tabs  variant="scrollable" onChange={handleChange} scrollButtons="auto" value={tabValue} aria-label="simple tabs example">
              <Tab label="Categorias" {...a11yProps(0)} />
              <Tab label="Sectores" {...a11yProps(1)} />
              

          </Tabs>
        </div>

        
        {(tabValue === 0 && loading === false  ) && <TableEditMaintainer
                                                      
                                                      title="Habilidades"  
                                                      data={categories} 
                                                      addAction={startAddCategory} 
                                                      updateAction={startUpdateCategory}
                                                      deleteAction={startDeleteCategory}
                                                      loadAction={startLoadCategory}
                                                      /> }
   
        {(tabValue === 1 && loading === false  ) && <TableEditMaintainer
                                                      withId={false}
                                                      title="Sectores"  
                                                      data={sectors} 
                                                      addAction={startAddSector} 
                                                      updateAction={startUpdateSector}
                                                      loadAction={startLoadSectors}
                                                      
                                                       /> }


 
                                                      
                                                       
    
        </>
    )
}
