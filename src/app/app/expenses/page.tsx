'use client'

import AppButton from '@/app/components/buttons/appButton';
import AppDataGrid from '@/app/components/dataGrid/appDataGrid';
import Expense from '@/app/types/models/expenses'
import { Fab, useMediaQuery } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'

let expense = new Expense(10, 1, 1, 1, 1, 1, 1, new Date(Date.now()), 1, 1)
expense.id = 1

  let expenses: Expense[] = [
    expense
  ];

export default function ExpenseGrid(props: any) {
  let isMobile = useMediaQuery('(max-width:770px)')
  
    return (
      <>
        {isMobile ? 
          <Fab color="primary" aria-label="add" sx={{ position: 'absolute', bottom: '0.5rem', right: '1rem'}}>  <AddIcon /> </Fab> 
          :
          <div style={{width: '25%', marginTop: '3rem'}}>
              <AppButton primary={false} text="Adicionar categoria"/>
          </div>    
        }

        <AppDataGrid<Expense> datasource={expenses} model={expense}/>   
      </>
        
    );
}