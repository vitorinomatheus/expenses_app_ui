import { GridColDef, GridColumnVisibilityModel } from "@mui/x-data-grid";

export default interface DataGridModel {

    GetGridColumns(): GridColDef[]
    GetMobileHiddenColumns(): GridColumnVisibilityModel
}