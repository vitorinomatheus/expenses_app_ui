'use client'

import { TextField, Typography, Container } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery";
import AppButton from "../components/buttons/appButton";
import { MOBILE_MEDIA_QUERY } from "../appConstants";


export default function Login(props: any) {
    let isMobile = useMediaQuery(MOBILE_MEDIA_QUERY);

    return (
        <Container className="min-h-screen min-w-full flex items-center">
            <Container className="flex items-center justify-center flex-col" maxWidth="sm">
                <Typography variant={isMobile ? 'h3' : 'h2'} >MinhasDespesas</Typography>
                <TextField variant="filled" label="Email" type="email" margin="normal" fullWidth/>
                <TextField variant="filled" label="Senha" type="password" margin="normal" fullWidth/>

                <div className={`flex ${isMobile ? 'flex-col gap-4' : 'gap-10'} w-full mt-6`}>
                    <AppButton primary={true} text="Entrar" />                    
                    <AppButton primary={false} text="Criar usuário" />
                </div>

            </Container>
        </Container>
    )
}