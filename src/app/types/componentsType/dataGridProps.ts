import { GridValidRowModel } from "@mui/x-data-grid";
import DataGridModel from "../models/dataGridModel";

export default interface DataGridProps<T extends GridValidRowModel>{
    model: DataGridModel;
    datasource: T[]
}