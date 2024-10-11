'use client'

import AppButton from '@/app/components/buttons/appButton';
import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import Expense from '@/app/types/models/expenses'
import { Fab, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { usePageContext } from '@/app/contexts/pageContext';
import { MOBILE_MEDIA_QUERY } from '@/app/appConstants';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';


let expense = new Expense(10, 1, 1, 1, 1, 1, 1, new Date(Date.now()), 1, 1)
expense.id = 1

  let expenses: Expense[] = [
    expense
  ];

export default function ExpenseGrid(props: any) {
  let isMobile = useMediaQuery(MOBILE_MEDIA_QUERY)
  const { setPageName } = usePageContext()

  useEffect(() => { setPageName('DESPESAS') }, [setPageName])

  let pathname = usePathname()
  const router = useRouter()

  const handleClick = () => {
    router.push(`${pathname}/form`)
  }
  
  return (
    <>
      {isMobile ? 
        null
        :
        <div style={{width: '25%', marginTop: '3rem'}} onClick={() => handleClick()}>
            <AppButton primary={false} text="Nova despesa"/>
        </div>    
      }
      <AppDataGrid<Expense> datasource={expenses} model={expense}/>   
    </>
      
  );
}