'use client'

import AppButton from "@/app/components/buttons/appButton";
import { Fab, useMediaQuery } from "@mui/material";

export default function Layout({children}: any) {
    let isMobile = useMediaQuery('(max-width:770px)')
    
    return (
        <>
            <main className="h-full">    
                {isMobile ? 
                    null
                    :
                    <div style={{width: '25%', marginTop: '3rem'}}>
                        <AppButton primary={false} text="Adicionar categoria"/>
                    </div>          
                }                
                {children}
            </main>
        </>
    )
} 