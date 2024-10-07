import { GridColDef } from "@mui/x-data-grid"
import DataGridModel from "../dataGridModel"

export default class CategoriesBase implements DataGridModel {
    id?: number
    userId?: boolean

    constructor(
        public name: string,
        public custom: string
    ) { }

    GetGridColumns(): GridColDef[] {
        return [
            {
                field: 'id',
                headerName: 'ID',
                width: 90
            },
            {
                field: 'name',
                headerName: 'Nome',
                width: 130,
                type: 'string'
            },
            {
                field: 'custom',
                headerName: 'Categoria pessoal',
                width: 50,
                type: 'boolean'
            }
        ]
    }
}