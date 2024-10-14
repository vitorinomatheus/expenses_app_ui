'use client'

import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import { usePageContext } from '@/app/contexts/pageContext';
import CatEmotional from '@/types/models/categories/catEmotional';
import { useEffect } from 'react';

const emotion = new CatEmotional('Relaxado', true)
emotion.id = 1

const emotions: CatEmotional[] = [
    emotion
  ];

export default function ExpenseGrid() {
  const { setPageName } = usePageContext()

  useEffect(() => { setPageName('EMOÇÃO') }, [setPageName])
  
  return (
      <AppDataGrid<CatEmotional> datasource={emotions} model={emotion}/>
  );
}