'use client'

import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import CatEmotional from '@/app/types/models/categories/catEmotional';

let emotion = new CatEmotional('Relaxado', true)
emotion.id = 1

  let emotions: CatEmotional[] = [
    emotion
  ];

export default function ExpenseGrid(props: any) {
    return (
        <AppDataGrid<CatEmotional> datasource={emotions} model={emotion}/>
    );
}