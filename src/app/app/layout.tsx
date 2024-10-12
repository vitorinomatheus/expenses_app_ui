'use client'

import { Box, Container, Typography } from "@mui/material";
import AppNavBar from "../components/navBar/appNavBar";
import { LayoutProps } from "../../../.next/types/app/layout";
import { usePageContext } from "../contexts/pageContext";
import useIsMobile from "../utils/mediaQuery";

export default function Layout({children}: LayoutProps) {
    const isMobile = useIsMobile()
    const { pageName } = usePageContext()
    
    return (
        <Box className={`flex ${isMobile ? 'flex-col' : ''} h-screen`}>
            <AppNavBar />
        
            <Box 
                component="main"
                className="flex-1 overflow-auto"
                sx={{
                    height: '100vh',
                    width: '100%',
                    paddingBottom: '2rem'
                }}
            >
                <Container sx={{ pt: 3 }}>
                {!isMobile && <Typography variant="h4" sx={{ mb: 3}}>{pageName}</Typography>}
                <Box className="h-full"> 
                        {children}                   
                </Box>
                </Container>
            </Box>
        </Box>
    )
}