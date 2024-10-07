import AppDataGridProps from "@/app/types/componentsType/dataGridProps";
import { DataGrid, GridValidRowModel } from "@mui/x-data-grid";


export default function AppDataGrid<T extends GridValidRowModel>(props: AppDataGridProps<T>) {
    let datasource: T[] = props.datasource;

    return (
        <DataGrid<T>
            rows={datasource}
            columns={props.model.GetGridColumns()}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                },
            }}
            pageSizeOptions={[5, 10]}
        />
    )
}