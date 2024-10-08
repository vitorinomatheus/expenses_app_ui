'use client'

import { Box, Container, Paper, Typography, useMediaQuery } from "@mui/material";
import AppNavBar from "../components/navBar/appNavBar";
import AppButton from "../components/buttons/appButton";

export default function Layout({children}: any) {
    let isMobile = useMediaQuery('(max-width:770px)');
    
    return (
        <Box className={isMobile ? "flex flex-col" : "flex"} sx={{height: 'calc(100vh - 3rem)'}}>
            <AppNavBar></AppNavBar>            
            <Container className="h-full">
                <main className="h-full">{children}</main>
            </Container>
        </Box>

    )
}