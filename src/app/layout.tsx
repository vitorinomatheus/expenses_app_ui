import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme';
import { Box } from "@mui/material";
import { PageProvider } from "./contexts/pageContext";

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto',
//   preload: false
// })

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: false
})

export const metadata: Metadata = {
  title: "Minhas despesas",
  description: "Conheça como você gasta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} antialiased`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <PageProvider>
                <Box className="min-h-screen w-full bg-gradient-to-b from-purple-950 via-gray-900 to-gray-950"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      minHeight: '100vh',
                      width: '100%'
                    }}> 
                    {children}
                  </Box>  
            </PageProvider>      
          </ThemeProvider>          
        </AppRouterCacheProvider>        
      </body>
    </html>
  );
}
