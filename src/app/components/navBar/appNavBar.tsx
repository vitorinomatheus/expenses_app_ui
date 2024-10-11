'use client'

import { Box, Divider, Drawer, Fab, Icon, Stack, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu"
import * as React from 'react';
import { usePathname, useRouter } from "next/navigation";
import VerticalBarProps from "@/app/types/componentsProps/verticalBarProps";
import { usePageContext } from "@/app/contexts/pageContext";
import AddIcon from '@mui/icons-material/Add'
import { APPNAME, MOBILE_MEDIA_QUERY } from "@/app/appConstants";
import { AccountCircle, Analytics, ArrowDropDown, ArrowDropUp, BarChart, CurrencyExchange, EmojiEmotions, Groups, LocalAtmRounded, Logout, PieChart, PriceChange, ProductionQuantityLimits, QueryStats, ShowChart, TableView } from "@mui/icons-material";

export default function AppNavBar(props: any) {
    let isMobile = useMediaQuery(MOBILE_MEDIA_QUERY);
    const [open, setOpen] = React.useState(false);    
    const handleDrawerClose = () => { setOpen(false); };    
    const handleDrawerOpen = () => { setOpen(true); };
    const { pageName } = usePageContext();
    let pathname = usePathname();
    const router = useRouter();

    let hideAddButton = pathname.includes('/form') 

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

    const handleMenuToggle = (toggle: boolean, menu: 'cat' | 'dash' ) => {
        menu == 'cat' ? setOpenCat(toggle) : setOpenDash(toggle)
    }

    return (
        <div className="flex flex-col items-center p-2 gap-20 bg-transparent" style={{height: '100vh', marginTop: '2rem'}}>
            <div onClick={() => handleNavigation('/app')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                <Typography variant="h6">{APPNAME}</Typography>
            </div>
            <Stack 
                spacing={2} 
                divider={<Divider orientation="horizontal" flexItem />} 
                sx={{width: '100%', padding: '1rem'}}
            >
                <div onClick={() => handleNavigation('/app')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                    <BarChart /><Typography>Dashboard inicial</Typography>
                </div>
                <div onClick={() => handleNavigation('/app/expenses')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                    <LocalAtmRounded /><Typography>Despesas</Typography>
                </div>
                <div onClick={() => handleMenuToggle(!openCat, "cat")} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                    <div><TableView />{!openCat ? <ArrowDropDown /> : <ArrowDropUp />}</div><Typography>Categorias</Typography>
                </div>
                {openCat ? 
                    <>
                        <div className="pl-4">
                            <Stack 
                                spacing={1}
                                divider={<Divider orientation="horizontal" flexItem />} >
                                <div onClick={() => handleNavigation('/app/categories/budgetImpact')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                                    <PriceChange /><Typography>Impacto</Typography>
                                </div>
                                <div onClick={() => handleNavigation('/app/categories/emotional')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                                    <EmojiEmotions /><Typography>Emoção</Typography>
                                </div>
                                <div onClick={() => handleNavigation('/app/categories/expenseFeel')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                                    <ProductionQuantityLimits /><Typography>Relação</Typography>
                                </div>
                                <div onClick={() => handleNavigation('/app/categories/expenseType')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                                    <CurrencyExchange /><Typography>Tipo de despesa</Typography>
                                </div>
                                <div onClick={() => handleNavigation('/app/categories/social')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                                    <Groups/><Typography>Social</Typography>
                                </div>
                            </Stack>
                        </div>
                    </>                
                    : null
                }
                <div onClick={() => handleMenuToggle(!openDash, "dash")} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                    <div><ShowChart />{!openDash ? <ArrowDropDown /> : <ArrowDropUp />}</div><Typography>Análise</Typography>
                </div>
                {openDash ? 
                    <>
                        <div className="pl-4">
                            <Stack 
                                spacing={1}
                                divider={<Divider orientation="horizontal" flexItem />} >
                                <div onClick={() => handleNavigation('/login')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                                    <PieChart /><Typography>Médias</Typography>
                                </div>
                                <div onClick={() => handleNavigation('/login')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                                    <QueryStats /><Typography>Relações</Typography>
                                </div>
                            </Stack>
                        </div>
                    </>                
                    : null
                }
                <div onClick={() => handleNavigation('/app/user')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                    <AccountCircle /> <Typography>Minha conta</Typography> 
                </div> 
                <div onClick={() => handleNavigation('/login')} style={{cursor: 'pointer', display: 'flex', gap: '1rem'}} className="select-none">
                    <Logout /> <Typography>Logout</Typography> 
                </div>                  
            </Stack>
        </div>
    )
}