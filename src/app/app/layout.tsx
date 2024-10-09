'use client'

import { Box, Container, Paper, Typography, useMediaQuery } from "@mui/material";
import AppNavBar from "../components/navBar/appNavBar";
import { LayoutProps } from "../../../.next/types/app/layout";
import { usePageContext } from "../contexts/pageContext";

export default function Layout({children}: LayoutProps) {
    let isMobile = useMediaQuery('(max-width:770px)');
    const { pageName } = usePageContext()
    
    return (
        <Box className={isMobile ? "flex flex-col" : "flex"}>
            <AppNavBar></AppNavBar>  
            <div style={{ width: '100%', height: '100vh', paddingTop: '2rem'}}>                
                <Container>
                    {!isMobile ? <Typography variant="h4">{ pageName }</Typography> : null }
                    <main className="h-full">{children}</main>
                </Container>
            </div>
        </Box>
    )
}