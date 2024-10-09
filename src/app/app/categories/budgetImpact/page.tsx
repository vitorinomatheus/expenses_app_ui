'use client'

import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import { usePageContext } from '@/app/contexts/pageContext';
import CatBudgetImpact from '@/app/types/models/categories/catBudgetImpact';
import { useEffect } from 'react';

let emotion = new CatBudgetImpact('Relaxado', false)
emotion.id = 1

  let emotions: CatBudgetImpact[] = [
    emotion
  ];

export default function ExpenseGrid(props: any) {
  const { setPageName } = usePageContext()

  useEffect(() => { setPageName('IMPACTO') }, [setPageName])
  
    return (
        <AppDataGrid<CatBudgetImpact> datasource={emotions} model={emotion}/>
    );
}