'use client'

import AppDataGridProps from "@/app/types/componentsType/dataGridProps";
import { DataGrid, GridValidRowModel } from "@mui/x-data-grid";
import { useMediaQuery } from "@mui/material";



export default function AppDataGrid<T extends GridValidRowModel>(props: AppDataGridProps<T>) {
    let datasource: T[] = props.datasource;
    let isMobile = useMediaQuery('(max-width:770px)');
    let hiddenColumns = props.model.GetMobileHiddenColumns()

    return (
            <DataGrid<T>
                disableColumnMenu
                rows={datasource}
                columns={props.model.GetGridColumns()}
                className=" bg-slate-900/50"
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                columnVisibilityModel={isMobile ? hiddenColumns : {}}
                pageSizeOptions={[5, 10]}
                sx={{ width: '100%', height: 'calc(100% - 15rem)', marginTop: '1rem' }}
            />
    )
}