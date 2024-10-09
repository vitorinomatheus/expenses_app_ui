'use client'

import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import { usePageContext } from '@/app/contexts/pageContext';
import CatEmotional from '@/app/types/models/categories/catEmotional';
import { useEffect } from 'react';

let emotion = new CatEmotional('Relaxado', true)
emotion.id = 1

  let emotions: CatEmotional[] = [
    emotion
  ];

export default function ExpenseGrid(props: any) {
  const { setPageName } = usePageContext()

  useEffect(() => { setPageName('EMOÇÃO') }, [setPageName])
  
  return (
      <AppDataGrid<CatEmotional> datasource={emotions} model={emotion}/>
  );
}