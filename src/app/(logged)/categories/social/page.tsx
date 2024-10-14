'use client'

import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import { usePageContext } from '@/app/contexts/pageContext';
import CatSocial from '@/types/models/categories/catSocial';
import { useEffect } from 'react';

const social = new CatSocial('Sozinho', false)
social.id = 1

const socials: CatSocial[] = [
    social
  ];

export default function ExpenseGrid() {
  const { setPageName } = usePageContext()

  useEffect(() => { setPageName('SOCIAL') }, [setPageName])
  
  return (
      <AppDataGrid<CatSocial> datasource={socials} model={social}/>
  );
}