'use client'

import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import CatSocial from '@/app/types/models/categories/catSocial';

let social = new CatSocial('Sozinho', false)
social.id = 1

  let socials: CatSocial[] = [
    social
  ];

export default function ExpenseGrid(props: any) {
    return (
        <AppDataGrid<CatSocial> datasource={socials} model={social}/>
    );
}