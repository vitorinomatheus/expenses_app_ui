'use client'

import AppButton from "@/app/components/buttons/appButton";
import { usePageContext } from "@/app/contexts/pageContext";
import { Box, FormControl, InputLabel, MenuItem, Select, Stack, TextField, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import Expense from '@/app/types/models/expenses';
import { MOBILE_MEDIA_QUERY } from '@/app/appConstants';
import AppValueInput from '@/app/components/valueInput/appValueInput';
''
export default function Form(props: any) {
    let expense = new Expense(0, 0, 0, 0, 0, 0, 0, new Date(Date.now()), 0, 0)

    let isMobile = useMediaQuery(MOBILE_MEDIA_QUERY)

    const { setPageName } = usePageContext()

    useEffect(() => { setPageName('CADASTRO DESPESA') }, [setPageName])
    
    return (
        <>
            <Box className="flex flex-col" maxWidth="sm">
                <Stack spacing={3}>
                    <AppValueInput variant="filled" label="Valor" type="text" margin="normal" fullWidth/>

                    <FormControl>
                        <InputLabel id="tipo-gasto">Tipo de gasto</InputLabel>
                        <Select labelId='tipo-gasto' label="Tipo de gasto">
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    
                    <FormControl>
                        <InputLabel id="tipo-emocao">Tipo de emoção</InputLabel>
                        <Select label='Tipo de emoção' labelId='tipo-emocao'>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <InputLabel id="tipo-social">Situação social</InputLabel>
                        <Select label='Situação social' labelId='tipo-social'>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <InputLabel id="tipo-relacao">Relação com o gasto</InputLabel>
                        <Select label='Relação com o gasto' labelId="tipo-relacao">
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <InputLabel id="tipo-impacto">Impacto no orçamento</InputLabel>
                        <Select label='Impacto no orçamento' labelId='tipo-impacto'>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>


                <div className={`flex ${isMobile ? 'flex-col gap-4' : 'gap-10'} w-full mt-6`}>
                    <div style={{width: '100%'}}><AppButton primary={true} text="Salvar" /></div>
                    <div style={{width: '100%'}}><AppButton primary={false} text="Voltar" /></div>
                </div>             
            </Box>
        </>
    )
}