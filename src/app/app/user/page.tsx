'use client'

import * as React from 'react'
import AppButton from "@/app/components/buttons/appButton"
import { useMediaQuery, Typography, TextField, Container } from "@mui/material"
import { useRouter } from 'next/navigation'

export default function User(prop: any) {
    let isMobile = useMediaQuery('(max-width:770px)')
    const router = useRouter()

    const [editing, SetEditing] = React.useState(false);
    const handleEditingState = (toggle: boolean) => { SetEditing(toggle) }

    return(
        <Container className="min-h-screen min-w-full  flex items-center">
            <Container className="flex items-center justify-center flex-col" maxWidth="sm">
                <Typography variant={isMobile ? 'h3' : 'h2'} >Meus dados</Typography>
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
            </Container>
        </Container>
    )
}