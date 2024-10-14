'use client'

import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import { usePageContext } from '@/app/contexts/pageContext';
import CatBudgetImpact from '@/types/models/categories/catBudgetImpact';
import { useEffect } from 'react';

const emotion = new CatBudgetImpact('Relaxado', false)
emotion.id = 1

  const emotions: CatBudgetImpact[] = [
    emotion
  ];

export default function ExpenseGrid() {
  const { setPageName } = usePageContext()

  useEffect(() => { setPageName('IMPACTO') }, [setPageName])
  
    return (
        <AppDataGrid<CatBudgetImpact> datasource={emotions} model={emotion}/>
    );
}