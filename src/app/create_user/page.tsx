'use client'

import { useMediaQuery } from "@mui/material"
import { TextField, Typography, Container } from "@mui/material"
import AppButton from "../components/buttons/appButton"
import { MOBILE_MEDIA_QUERY } from "../appConstants"

export default function CreateUser(props: any) {
    let isMobile = useMediaQuery(MOBILE_MEDIA_QUERY)

    return(
        <Container className="min-h-screen min-w-full  flex items-center">
            <Container className="flex items-center justify-center flex-col" maxWidth="sm">
                <Typography variant={isMobile ? 'h3' : 'h2'} >Novo usuário</Typography>
                <TextField variant="filled" label="Nome" type="text" margin="normal" fullWidth/>
                <TextField variant="filled" label="Sobrenome" type="text" margin="normal" fullWidth/>
                <TextField variant="filled" label="Email" type="email" margin="normal" fullWidth/>
                <TextField variant="filled" label="Senha" type="password" margin="normal" fullWidth/>
                <TextField variant="filled" label="Confirmar senha" type="password" margin="normal" fullWidth/>

                <div className={`flex ${isMobile ? 'flex-col gap-4' : 'gap-10'} w-full mt-6`}>
                    <AppButton primary={true} text="Criar" />
                    <AppButton primary={false} text="Voltar" />
                </div>
                
            </Container>
        </Container>
    )
}