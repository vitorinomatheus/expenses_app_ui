import { GridColDef } from "@mui/x-data-grid";
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
                headerName: 'Tipo de gasto',
                width: 200,
                type: 'number'
            },
            {
                field: 'catEmotional',
                headerName: 'Emoção',
                width: 200,
                type: 'number'
            },
            {
                field: 'catSocial',
                headerName: 'Social',
                width: 200,
                type: 'number'
            },
            {
                field: 'catExpenseFeel',
                headerName: 'Rel. c/ gasto',
                width: 200,
                type: 'number'
            },
            {
                field: 'catBudgetImpact',
                headerName: 'Impacto no orçamento',
                width: 200,
                type: 'number'
            },
            // {
            //   field: 'date',
            //   headerName: 'Date',
            //   width: 130,
            //   type: 'date',
            //   valueFormatter: (params) => {
            //     return new Date(params.value).toLocaleDateString()
            //   }
            // },
            {
                field: 'dayOfWeek',
                headerName: 'Dia da semana',
                width: 200,
                type: 'number'
            },
            {
                field: 'monthWeek',
                headerName: 'Semana do mês',
                width: 200,
                type: 'number'
            }
        ]
    }
}