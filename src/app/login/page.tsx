'use client'

import { TextField, Button, Link, Typography, Container } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery";


export default function Login(props: any) {
    let isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Container className="min-h-screen min-w-full bg-gray-800 flex items-center">
            <Container className="flex items-center justify-center flex-col" maxWidth="sm">
                <Typography variant={isMobile ? 'h3' : 'h2'} >MeusGastos</Typography>
                <TextField variant="filled" label="Email" type="email" margin="normal" fullWidth/>
                <TextField variant="filled" label="Senha" type="password" margin="normal" fullWidth/>

                <div className={`flex ${isMobile ? 'flex-col gap-4' : 'justify-start gap-10'} w-full mt-6`}>
                    <Button
                        variant="contained"
                        color="violet"
                        fullWidth={isMobile}
                    >
                        Entrar
                    </Button>
                    <Link
                        component="button"
                        variant="body2"
                        color="inherit"
                        className={isMobile ? 'mt-2' : ''}
                        style={{ textAlign: isMobile ? 'center' : 'inherit' }}
                    >
                        Criar novo usuário
                    </Link>
                </div>

            </Container>

        </Container>
    )
}