import { GridColDef } from "@mui/x-data-grid";

export default interface DataGridModel {

    GetGridColumns(): GridColDef[]
}