'use client'

import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import { usePageContext } from '@/app/contexts/pageContext';
import CatExpenseFeel from '@/types/models/categories/catExpenseFeel';
import { useEffect } from 'react';

const feel = new CatExpenseFeel('Indiferente', false)
feel.id = 1

const feels: CatExpenseFeel[] = [
    feel
  ];

export default function ExpenseGrid() {
  const { setPageName } = usePageContext()

  useEffect(() => { setPageName('RELAÇÃO C/ DESPESA') }, [setPageName])
  
    return (
        <AppDataGrid<CatExpenseFeel> datasource={feels} model={feel}/>
    );
}