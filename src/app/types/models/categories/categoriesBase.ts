import { GridColDef, GridColumnVisibilityModel } from "@mui/x-data-grid"
import DataGridModel from "../dataGridModel"

export default class CategoriesBase implements DataGridModel {
    id?: number
    userId?: number

    constructor(
        public name: string,
        public custom: boolean
    ) { }

    GetMobileHiddenColumns(): GridColumnVisibilityModel {
        const model = {
            custom: false,
            id: false
        } as GridColumnVisibilityModel

        return model
    }

    GetGridColumns(): GridColDef[] {
        return [
            {
                field: 'id',
                headerName: 'ID',
                width: 120
            },
            {
                field: 'name',
                headerName: 'Nome',
                width: 300,
                type: 'string'
            },
            {
                field: 'custom',
                headerName: 'Personalizado',
                width: 150,
                type: 'boolean'
            }
        ]
    }
}