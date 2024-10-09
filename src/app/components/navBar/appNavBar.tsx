'use client'

import { Box, Divider, Drawer, Fab, Stack, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu"
import * as React from 'react';
import { useRouter } from "next/navigation";
import VerticalBarProps from "@/app/types/componentsType/verticalBarProps";
import { usePageContext } from "@/app/contexts/pageContext";
import AddIcon from '@mui/icons-material/Add'

export default function AppNavBar(props: any) {
    let isMobile = useMediaQuery('(max-width:770px)');
    const [open, setOpen] = React.useState(false);    
    const handleDrawerClose = () => { setOpen(false); };    
    const handleDrawerOpen = () => { setOpen(true); };
    const { pageName } = usePageContext()

    return (
        <>
            <Box
                className={isMobile 
                ? "flex items-center min-w-screen h-16 bg-opacity-55 bg-black" 
                : "h-screen lg:w-60 md:w-48 bg-black bg-opacity-55 flex-shrink-0"
            }>  
            {
                isMobile ? (
                    <>
                        <div className="ml-6 mr-6 flex gap-5 items-center justify-between" style={{ width: '100%' }}>
                            <MenuIcon onClick={handleDrawerOpen}/>                    
                            <Typography variant="h6">{pageName}</Typography>
                            <Fab color="primary" aria-label="add" size="small" style={{ alignSelf: 'flex-end' }}>  
                                <AddIcon /> 
                            </Fab> 
                        </div>  

                        <Drawer open={open} onClose={handleDrawerClose} PaperProps={{ width: '60%' }}>
                            <VerticalBar onClose={handleDrawerClose}/>
                        </Drawer>
                    </>

                ) : (
                    <VerticalBar />
                )
            }               
            </Box>
        </>
    )
}

function VerticalBar({ onClose }: VerticalBarProps) {

    const router = useRouter()

    const handleNavigation = (route: string) => {
        if (onClose) {
          onClose();
        }
        router.push(route);
    };

    const [openCat, setOpenCat] = React.useState(false);    
    const [openDash, setOpenDash] = React.useState(false);   

    const handleMenuToggle = (toggle: boolean, menu: 'cat' | 'dash' ) => {
        menu == 'cat' ? setOpenCat(toggle) : setOpenDash(toggle)
    }

    return (
        <div className="flex flex-col items-center p-2 gap-20 bg-transparent" style={{height: '100% !important', marginTop: '2rem'}}>
            <Typography variant="h6">ExpensesApp</Typography>
            <Stack 
                spacing={2} 
                divider={<Divider orientation="horizontal" flexItem />} 
                sx={{width: '100%', padding: '1rem'}}
            >
                <div onClick={() => handleNavigation('/login')} style={{cursor: 'pointer'}} className="select-none">
                    <Typography>Início</Typography>
                </div>
                <div onClick={() => handleNavigation('/app/expenses')} style={{cursor: 'pointer'}} className="select-none">
                    <Typography>Minhas despesas</Typography>
                </div>
                <div onClick={() => handleMenuToggle(!openCat, "cat")} style={{cursor: 'pointer'}} className="select-none">
                    <Typography>Categorias</Typography>
                </div>
                {openCat ? 
                    <>
                        <div className="pl-4">
                            <Stack 
                                spacing={1}
                                divider={<Divider orientation="horizontal" flexItem />} >
                                <div onClick={() => handleNavigation('/app/categories/budgetImpact')} style={{cursor: 'pointer'}} className="select-none">
                                        <Typography>Impacto</Typography>
                                </div>
                                <div onClick={() => handleNavigation('/app/categories/emotional')} style={{cursor: 'pointer'}} className="select-none">
                                    <Typography>Emoção</Typography>
                                </div>
                                <div onClick={() => handleNavigation('/app/categories/expenseFeel')} style={{cursor: 'pointer'}} className="select-none">
                                    <Typography>Relação c/ despesa</Typography>
                                </div>
                                <div onClick={() => handleNavigation('/app/categories/expenseType')} style={{cursor: 'pointer'}} className="select-none">
                                    <Typography>Tipo de despesa</Typography>
                                </div>
                                <div onClick={() => handleNavigation('/app/categories/social')} style={{cursor: 'pointer'}} className="select-none">
                                    <Typography>Social</Typography>
                                </div>
                            </Stack>
                        </div>
                    </>                
                    : null
                }
                <div onClick={() => handleMenuToggle(!openDash, "dash")} style={{cursor: 'pointer'}} className="select-none">
                    <Typography>Dashboards</Typography>
                </div>
                {openDash ? 
                    <>
                        <div className="pl-4">
                            <Stack 
                                spacing={1}
                                divider={<Divider orientation="horizontal" flexItem />} >
                                <div onClick={() => handleNavigation('/login')} style={{cursor: 'pointer'}} className="select-none">
                                    <Typography>Médias</Typography>
                                </div>
                                <div onClick={() => handleNavigation('/login')} style={{cursor: 'pointer'}} className="select-none">
                                    <Typography>Relações</Typography>
                                </div>
                            </Stack>
                        </div>
                    </>                
                    : null
                }
                <div onClick={() => handleNavigation('/app/user')} style={{cursor: 'pointer'}} className="select-none">
                    <Typography>Minha conta</Typography> 
                </div> 
                <div onClick={() => handleNavigation('/login')} style={{cursor: 'pointer'}} className="select-none">
                    <Typography>Logout</Typography> 
                </div>                  
            </Stack>
        </div>
    )
}