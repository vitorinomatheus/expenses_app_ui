'use client'

import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import { usePageContext } from '@/app/contexts/pageContext';
import CatExpenseType from '@/app/types/models/categories/catExpenseType';
import { useEffect } from 'react';

let type = new CatExpenseType('Mercado', false)
type.id = 1

  let types: CatExpenseType[] = [
    type
  ];

export default function ExpenseGrid(props: any) {
  const { setPageName } = usePageContext()

  useEffect(() => { setPageName('TIPO DE DESPESA') }, [setPageName])

  return (
      <AppDataGrid<CatExpenseType> datasource={types} model={type}/>
  );
}