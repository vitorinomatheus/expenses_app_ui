'use client'

import { TextField, Typography, Container, Snackbar, Alert, AlertTitle } from "@mui/material"
import AppButton from "../../components/buttons/appButton";
import { useEffect, useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import { setCookie } from "cookies-next";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showLoginError, setShowLoginError] = useState(false);
    const router = useRouter(); 
    const searchParams = useSearchParams();
    const isMobile = useIsMobile()

    useEffect(() => {
      const showAlertParam = searchParams.get('authenticationFailed');
      if (showAlertParam != null)
      {
        if (showAlertParam == 'true') {
          setShowLoginError(true);
        }
      }
    }, [searchParams]);
  
    const handleCloseAlert = () => {
      setShowLoginError(false);
    };
  
    const handleSubmit = async () => {
        setCookie('jwt', 'teste')
        router.push(`/home`)
      }
  
    return (
      <Container className="min-h-screen min-w-full flex items-center">
        <Snackbar open={showLoginError} autoHideDuration={6000} onClose={handleCloseAlert}>
          <Alert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }} variant="outlined">
            <AlertTitle>ERRO DE AUTENTICAÇÃO</AlertTitle>
            Você precisa fazer login para acessar essa página.
          </Alert>
        </Snackbar>
        <Container className="flex items-center justify-center flex-col" maxWidth="sm">
          <Typography variant={isMobile ? 'h3' : 'h2'}>MinhasDespesas</Typography>
            <TextField 
              variant="filled" 
              label="Email" 
              type="email" 
              margin="normal" 
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField 
              variant="filled" 
              label="Senha" 
              type="password" 
              margin="normal" 
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={`flex ${isMobile ? 'flex-col gap-4' : 'gap-10'} w-full mt-6`}>
              <AppButton primary={true} text="Entrar" onClick={() => handleSubmit()} />
              <AppButton 
                primary={false} 
                text="Criar usuário" 
                onClick={() => console.log('clicked')} 
              />
            </div>
        </Container>
      </Container>
    )
  }