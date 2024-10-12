'use client'

import AppButton from "@/app/components/buttons/appButton";
import useIsMobile from "@/app/utils/mediaQuery";
import { useRouter, usePathname } from "next/navigation";
import { LayoutProps } from "../../../../.next/types/app/layout";

export default function Layout({children}: LayoutProps) {
    const isMobile = useIsMobile()
    const router = useRouter()
    const pathname = usePathname()

    const hideButton = pathname.includes('/form') 

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