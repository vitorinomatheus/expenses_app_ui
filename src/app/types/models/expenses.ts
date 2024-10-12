import { GridColDef, GridColumnVisibilityModel } from "@mui/x-data-grid";
import DataGridModel from "./dataGridModel";

export default class Expense implements DataGridModel{
    id?: number;

    constructor(
        public value: number,
        public userId: number,
        public catExpense: number,
        public catEmotional: number,
        public catSocial: number,
        public catExpenseFeel: number,
        public catBudgetImpact: number,
        public date: Date,
        public dayOfWeek: number,
        public monthWeek: number
    ) { }

    GetMobileHiddenColumns(): GridColumnVisibilityModel {
        const model = {
            catBudgetImpact: false,
            catExpense: false,
            catSocial: false,
            catExpenseFeel: false,
            dayOfWeek: false,
            monthWeek: false,
            catEmotional: false,
            id: false
        } as GridColumnVisibilityModel

        return model
    }
    
    GetGridColumns(): GridColDef[] {
        return [
            {
                field: 'id',
                headerName: 'ID',
                width: 50
            },
            {
                field: 'value',
                headerName: 'Valor',
                width: 90,
                type: 'number'
            },
            {
                field: 'catExpense',
                headerName: 'Tipo de despesa',
                width: 150,
                type: 'number'
            },
            {
                field: 'catEmotional',
                headerName: 'Emoção',
                width: 150,
                type: 'number'
            },
            {
                field: 'catSocial',
                headerName: 'Social',
                width: 150,
                type: 'number'
            },
            {
                field: 'catExpenseFeel',
                headerName: 'Rel. c/ despesa',
                width: 150,
                type: 'number'
            },
            {
                field: 'catBudgetImpact',
                headerName: 'Impacto',
                width: 150,
                type: 'number'
            },
            {
              field: 'date',
              headerName: 'Date',
              width: 150,
              type: 'date',
              valueFormatter: (params) => {
                return new Date(params).toLocaleDateString()
              }
            },
            {
                field: 'dayOfWeek',
                headerName: 'Dia da semana',
                width: 150,
                type: 'number'
            },
            {
                field: 'monthWeek',
                headerName: 'Semana do mês',
                width: 150,
                type: 'number'
            }
        ]
    }
}