import esLocale from 'date-fns/locale/es';
export const localizationMaterialTable = {
    toolbar:{
        searchTooltip:'Buscar',
        searchPlaceholder:'Buscar'
    

    },
    header:{
        actions:'Acciones'
    },
    body:{
        addTooltip:"Añadir",
        emptyDataSourceMessage:"Nada hay datos a mostrar",
        dateTimePickerLocalization:esLocale,
        filterRow:{
            filterTooltip:"Filtrar"
        },
        editTooltip:"Editar",
        editRow:{
            cancelTooltip:"Cancelar",
            saveTooltip:"Guardar"
        }
    }
    ,
    pagination:{
        labelRowsSelect:'Filas',
        labelDisplayedRows: '{from}-{to} de {count} ',
        firstTooltip: 'Primera página',
        previousTooltip: 'Página anterior',
        nextTooltip: 'Próxima página',
        lastTooltip: 'Última página'
    }
}