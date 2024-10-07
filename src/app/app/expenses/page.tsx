'use client'

import AppDataGrid from '@/app/components/dataGrid/dataGrid';
import Expense from '@/app/types/models/expenses'

let expense = new Expense(10, 1, 1, 1, 1, 1, 1, new Date(Date.now()), 1, 1)
expense.id = 1

  let expenses: Expense[] = [
    expense
  ];

export default function ExpenseGrid(props: any) {
    return (
        <AppDataGrid<Expense> datasource={expenses} model={expense}/>
    );
}