'use client'

import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import { usePageContext } from '@/app/contexts/pageContext';
import CatExpenseFeel from '@/app/types/models/categories/catExpenseFeel';
import { useEffect } from 'react';

let feel = new CatExpenseFeel('Indiferente', false)
feel.id = 1

  let feels: CatExpenseFeel[] = [
    feel
  ];

export default function ExpenseGrid(props: any) {
  const { setPageName } = usePageContext()

  useEffect(() => { setPageName('RELAÇÃO C/ DESPESA') }, [setPageName])
  
    return (
        <AppDataGrid<CatExpenseFeel> datasource={feels} model={feel}/>
    );
}