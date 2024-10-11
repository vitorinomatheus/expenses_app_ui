'use client'

import { MOBILE_MEDIA_QUERY } from "@/app/appConstants";
import AppButton from "@/app/components/buttons/appButton";
import { useMediaQuery } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

export default function Layout({children}: any) {
    let isMobile = useMediaQuery(MOBILE_MEDIA_QUERY)
    const router = useRouter()
    const pathname = usePathname()

    let hideButton = pathname.includes('/form') 

    const handleClick = () => {
        router.push(`${pathname}/form`)
      }
    
    return (
        <>
            <main className="h-full">    
                {isMobile || hideButton ? 
                    null
                    :
                    <div style={{width: '25%', marginTop: '3rem'}} onClick={() => handleClick()}>
                        <AppButton primary={false} text="Adicionar categoria"/>
                    </div>          
                }                
                {children}
            </main>
        </>
    )
} 