'use client'

import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import { usePageContext } from '@/app/contexts/pageContext';
import CatSocial from '@/app/types/models/categories/catSocial';
import { useEffect } from 'react';

let social = new CatSocial('Sozinho', false)
social.id = 1

  let socials: CatSocial[] = [
    social
  ];

export default function ExpenseGrid(props: any) {
  const { setPageName } = usePageContext()

  useEffect(() => { setPageName('SOCIAL') }, [setPageName])
  
  return (
      <AppDataGrid<CatSocial> datasource={socials} model={social}/>
  );
}