'use client'

import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import CatExpenseFeel from '@/app/types/models/categories/catExpenseFeel';

let feel = new CatExpenseFeel('Indiferente', false)
feel.id = 1

  let feels: CatExpenseFeel[] = [
    feel
  ];

export default function ExpenseGrid(props: any) {
    return (
        <AppDataGrid<CatExpenseFeel> datasource={feels} model={feel}/>
    );
}