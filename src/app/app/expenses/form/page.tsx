'use client'

import AppButton from "@/app/components/buttons/appButton";
import { usePageContext } from "@/app/contexts/pageContext";
import { Box, TextField, useMediaQuery } from "@mui/material";
import { useEffect } from "react";

export default function Form(props: any) {
    let isMobile = useMediaQuery('(max-width:770px)')

    const { setPageName } = usePageContext()

    useEffect(() => { setPageName('DESPESA') }, [setPageName])
    
    return (
        <>
            <Box className="flex flex-col" maxWidth="sm">
                <TextField variant="filled" label="Nome" type="text" margin="normal" fullWidth/>
                <TextField variant="filled" label="Sobrenome" type="text" margin="normal" fullWidth/>
                <TextField variant="filled" label="Email" type="email" margin="normal" fullWidth/>
                <TextField variant="filled" label="Nome" type="text" margin="normal" fullWidth/>
                <TextField variant="filled" label="Sobrenome" type="text" margin="normal" fullWidth/>
                <TextField variant="filled" label="Email" type="email" margin="normal" fullWidth/>


                <div className={`flex ${isMobile ? 'flex-col gap-4' : 'gap-10'} w-full mt-6`}>
                    <div style={{width: '100%'}}><AppButton primary={true} text="Editar" /></div>
                    <div style={{width: '100%'}}><AppButton primary={false} text="Voltar" /></div>
                </div>             
            </Box>
        </>
    )
}