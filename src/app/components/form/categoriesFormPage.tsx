'use client'

import AppButton from "@/app/components/buttons/appButton";
import { usePageContext } from "@/app/contexts/pageContext";
import CategoriesFormProps from "@/app/types/componentsType/categoriesFormProps";
import { Box, TextField, useMediaQuery } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CategoryForm({ catName }: CategoriesFormProps) {
    let isMobile = useMediaQuery('(max-width:770px)')
    let pathname = usePathname()
    const router = useRouter()

    const { setPageName } = usePageContext()
    useEffect(() => { setPageName(catName) }, [setPageName])
    
    const handleClick = () => {
        router.push(pathname.replace('/form', ''))
      }
    
    return (
        <>
            <Box className="flex flex-col" maxWidth="sm">
                <TextField variant="filled" label="Nome" type="text" margin="normal" fullWidth/>

                <div className={`flex ${isMobile ? 'flex-col gap-4' : 'gap-10'} w-full mt-6`}>
                    <div style={{width: '100%'}}>
                        <AppButton primary={true} text="Salvar" />
                    </div>
                    <div style={{width: '100%'}} onClick={() => handleClick()}>
                        <AppButton primary={false} text="Voltar" />
                    </div>
                </div>             
            </Box>
        </>
    )
}