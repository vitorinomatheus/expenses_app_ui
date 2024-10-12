'use client'

import { useEffect, useState } from "react"
import AppButton from "@/app/components/buttons/appButton"
import { TextField, Box } from "@mui/material"
import { useRouter } from 'next/navigation'
import { usePageContext } from '@/app/contexts/pageContext'
import useIsMobile from "@/app/utils/mediaQuery"

export default function User() {
    const isMobile = useIsMobile()
    const router = useRouter()

    const [editing, SetEditing] = useState(false);
    const handleEditingState = (toggle: boolean) => { SetEditing(toggle) }

    const { setPageName } = usePageContext()

    useEffect(() => { setPageName('MEUS DADOS') }, [setPageName])

    return(

            <Box className="flex flex-col" maxWidth="sm">
                <TextField variant="filled" label="Nome" type="text" margin="normal" disabled={!editing} fullWidth/>
                <TextField variant="filled" label="Sobrenome" type="text" margin="normal" disabled={!editing} fullWidth/>
                <TextField variant="filled" label="Email" type="email" margin="normal" disabled={!editing} fullWidth/>
                {editing ? 
                    <>
                        <TextField variant="filled" label="Senha" type="password" margin="normal" disabled={!editing} fullWidth/>
                        <TextField variant="filled" label="Confirmar senha" type="password" margin="normal" disabled={!editing} fullWidth/>
                    </>
                    : null
                }

                {editing ?
                    <>
                        <div className={`flex ${isMobile ? 'flex-col gap-4' : 'gap-10'} w-full mt-6`}>
                            <div style={{width: '100%'}}><AppButton primary={true} text="Salvar" /></div>
                            <div onClick={() => router.back()} style={{width: '100%'}}><AppButton primary={false} text="Cancelar" /></div>
                        </div>
                    </>
                    : 
                    <>
                        <div className={`flex ${isMobile ? 'flex-col gap-4' : 'gap-10'} w-full mt-6`}>
                            <div onClick={() => handleEditingState(true)} style={{width: '100%'}}><AppButton primary={true} text="Editar" /></div>
                            <div onClick={() => handleEditingState(false)} style={{width: '100%'}}><AppButton primary={false} text="Voltar" /></div>
                        </div>
                    </>}                
            </Box>
    )
}