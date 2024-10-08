'use client'

import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import CatBudgetImpact from '@/app/types/models/categories/catBudgetImpact';

let emotion = new CatBudgetImpact('Relaxado', false)
emotion.id = 1

  let emotions: CatBudgetImpact[] = [
    emotion
  ];

export default function ExpenseGrid(props: any) {
    return (
        <AppDataGrid<CatBudgetImpact> datasource={emotions} model={emotion}/>
    );
}