'use client'

import AppButton from '@/app/components/buttons/appButton';
import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import Expense from '@/types/models/expenses'
import { useEffect } from 'react';
import { usePageContext } from '@/app/contexts/pageContext';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import useIsMobile from '@/hooks/useIsMobile';

const expense = new Expense(10, 1, 1, 1, 1, 1, 1, new Date(Date.now()), 1, 1)
expense.id = 1

  const expenses: Expense[] = [
    expense
  ];

export default function ExpenseGrid() {
  const isMobile = useIsMobile()
  const { setPageName } = usePageContext()

  useEffect(() => { setPageName('DESPESAS') }, [setPageName])

  const pathname = usePathname()
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