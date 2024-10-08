'use client'

import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import CatExpenseType from '@/app/types/models/categories/catExpenseType';

let type = new CatExpenseType('Mercado', false)
type.id = 1

  let types: CatExpenseType[] = [
    type
  ];

export default function ExpenseGrid(props: any) {
    return (
        <AppDataGrid<CatExpenseType> datasource={types} model={type}/>
    );
}