'use client'

import AppButton from "@/app/components/buttons/appButton";
import { Container, Fab, useMediaQuery } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'

export default function Layout({children}: any) {
    let isMobile = useMediaQuery('(max-width:770px)')
    
    return (
        <>
            <main className="h-full">    
                {isMobile ? 
                    <Fab color="primary" aria-label="add" sx={{ position: 'absolute', bottom: '0.5rem', right: '1rem'}}>  
                        <AddIcon /> 
                    </Fab> 
                    :
                    <div onClick={console.log('hello')} style={{width: '25%', marginTop: '3rem'}}>
                        <AppButton primary={false} text="Adicionar categoria"/>
                    </div>          
                }                
                {children}
            </main>
        </>
    )
} 