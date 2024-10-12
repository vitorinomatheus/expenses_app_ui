'use client'

import AppDataGridProps from "@/app/types/componentsProps/dataGridProps";
import { DataGrid, GridValidRowModel } from "@mui/x-data-grid";
import useIsMobile from "@/app/utils/mediaQuery";



export default function AppDataGrid<T extends GridValidRowModel>(props: AppDataGridProps<T>) {
    const datasource: T[] = props.datasource;
    const isMobile = useIsMobile()
    const hiddenColumns = props.model.GetMobileHiddenColumns()

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
                sx={{ width: '100%', height: 'calc(100vh - 15rem)', marginTop: '1rem' }}
            />
    )
}