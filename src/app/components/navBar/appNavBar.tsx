'use client'

import { Box, Divider, Drawer, Fab, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import * as React from 'react';
import { usePathname, useRouter } from "next/navigation";
import VerticalBarProps from "@/types/componentsProps/verticalBarProps";
import { usePageContext } from "@/app/contexts/pageContext";
import AddIcon from '@mui/icons-material/Add'
import { APP_VERSION, APPNAME } from "@/app/appConstants";
import { AccountCircle, ArrowDropDown, ArrowDropUp, BarChart, CurrencyExchange, EmojiEmotions, Groups, LocalAtmRounded, Logout, PieChart, PriceChange, ProductionQuantityLimits, QueryStats, ShowChart, TableView } from "@mui/icons-material";
import useIsMobile from "@/hooks/useIsMobile";

export default function AppNavBar() {
    const isMobile = useIsMobile()
    const [open, setOpen] = React.useState(false);    
    const handleDrawerClose = () => { setOpen(false); };    
    const handleDrawerOpen = () => { setOpen(true); };
    const { pageName } = usePageContext();
    const pathname = usePathname();
    const router = useRouter();

    const hideAddButton = pathname.includes('/form') 

    const handleClick = () => {
        router.push(`${pathname}/form`)
      }

    return (
        <>
            <Box
                className={isMobile 
                ? "flex items-center min-w-screen h-16 bg-opacity-55 bg-black" 
                : "h-screen lg:w-60 md:w-48 bg-black bg-opacity-55 flex-shrink-0 overflow-hidden"
            }>  
            {
                isMobile ? (
                    <>
                        <div className={hideAddButton ? "ml-6 mr-6 flex gap-5 items-center" : "ml-6 mr-6 flex gap-5 items-center justify-between"} style={{ width: '100%' }}>
                            <MenuIcon onClick={handleDrawerOpen}/>                    
                            <Typography variant="h6">{pageName}</Typography>
                            { hideAddButton ? 
                                null 
                                : 
                                <Fab color="primary" aria-label="add" size="small" style={{ alignSelf: 'flex-end' }} onClick={() => handleClick()}>  
                                    <AddIcon /> 
                                </Fab>
                            }
 
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

    const handleMenuToggle = (toggle: boolean, menu: 'cat' | 'dash') => {
        if (menu === 'cat') {
          setOpenCat(toggle);
        } else {
          setOpenDash(toggle);
        }
      }

    return (
        <div className="flex flex-col items-center p-2 gap-20 bg-transparent" style={{height: '100vh', marginTop: '2rem'}}>
            <div onClick={() => handleNavigation('/home')} style={{cursor: 'pointer', display: 'flex', flexDirection: 'column'}} className="select-none">
                <Typography variant="h6">{APPNAME}</Typography>
                <Typography sx={{alignSelf: 'center'}}>{APP_VERSION}</Typography>
            </div>
            <Stack 
                spacing={2} 
                divider={<Divider orientation="horizontal" flexItem />} 
                sx={{width: '100%', padding: '1rem'}}
            >
                <div onClick={() => handleNavigation('/home')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                    <BarChart color="white" /><Typography>Dashboard inicial</Typography>
                </div>
                <div onClick={() => handleNavigation('/expenses')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                    <LocalAtmRounded color="white" /><Typography>Despesas</Typography>
                </div>
                <div onClick={() => handleMenuToggle(!openCat, "cat")} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                    <div><TableView color="white" />{!openCat ? <ArrowDropDown color="white" /> : <ArrowDropUp color="white" />}</div>
                    <Typography>Categorias</Typography>
                </div>
                {openCat ? 
                    <>
                        <div className="pl-4">
                            <Stack 
                                spacing={1}
                                divider={<Divider orientation="horizontal" flexItem />} >
                                <div onClick={() => handleNavigation('/categories/budgetImpact')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                                    <PriceChange color="white" /><Typography>Impacto</Typography>
                                </div>
                                <div onClick={() => handleNavigation('/categories/emotional')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                                    <EmojiEmotions color="white" /><Typography>Emoção</Typography>
                                </div>
                                <div onClick={() => handleNavigation('/categories/expenseFeel')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                                    <ProductionQuantityLimits color="white" /><Typography>Relação</Typography>
                                </div>
                                <div onClick={() => handleNavigation('/categories/expenseType')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                                    <CurrencyExchange color="white" /><Typography>Tipo de despesa</Typography>
                                </div>
                                <div onClick={() => handleNavigation('/categories/social')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                                    <Groups color="white"/><Typography>Social</Typography>
                                </div>
                            </Stack>
                        </div>
                    </>                
                    : null
                }
                <div onClick={() => handleMenuToggle(!openDash, "dash")} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                    <div><ShowChart color="white" />{!openDash ? <ArrowDropDown color="white" /> : <ArrowDropUp color="white"/>}</div>
                        <Typography>Análise</Typography>
                </div>
                {openDash ? 
                    <>
                        <div className="pl-4">
                            <Stack 
                                spacing={1}
                                divider={<Divider orientation="horizontal" flexItem />} >
                                <div onClick={() => handleNavigation('/login')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                                    <PieChart color="white" /><Typography>Médias</Typography>
                                </div>
                                <div onClick={() => handleNavigation('/login')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                                    <QueryStats color="white" /><Typography>Relações</Typography>
                                </div>
                            </Stack>
                        </div>
                    </>                
                    : null
                }
                <div onClick={() => handleNavigation('/user')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                    <AccountCircle color="white" /> <Typography>Minha conta</Typography> 
                </div> 
                <div onClick={() => handleNavigation('/login')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                    <Logout color="white" /> <Typography>Logout</Typography> 
                </div>                  
            </Stack>
        </div>
    )
}