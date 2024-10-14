'use client'

import { useEffect } from "react"
import { usePageContext } from "@/app/contexts/pageContext"
import Grid from "@mui/material/Grid2"
import { Card, CardContent, Typography } from "@mui/material"
import { LineChart }  from '@mui/x-charts/LineChart'
import { PieChart } from "@mui/x-charts/PieChart"
import { BarChart } from "@mui/x-charts/BarChart"

export default function MainPage() {
    const { setPageName } = usePageContext()
    useEffect(() => { setPageName('DASHBOARD INICIAL') }, [setPageName])
    
    return (
        <>
            <Grid container spacing={2}>

                <Grid size={12} sx={{width: '100%'}}>
                        <Card sx={{ width: '100%' }}>
                            <CardContent sx={{ width: '100%', height:'100%'}}>
                            <Typography variant="h6"sx={{color: 'text.secondary'}}>GASTOS MÉDIOS POR DIA DA SEMANA</Typography>
                            <LineChart
                                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7],
                                        tickMinStep: 1,
                                        colorMap: { type:"continuous", color: ['purple', 'purple'] } }]}
                                series={[
                                    {
                                        data: [2, 5.5, 2, 6.2, 1.5, 5, 7]
                                    },
                                ]}
                                grid={{ horizontal: true, vertical: true }}
                                height={300}
                            />
                            </CardContent>
                        </Card>
                </Grid>

                <Grid size={{sm: 12, md: 6}} sx={{width: '100%'}}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent>
                            <Typography variant="h6"sx={{color: 'text.secondary'}}>
                                GASTOS POR EMOÇÃO
                            </Typography>
                            <PieChart
                                series={[
                                    {
                                    data: [
                                        { id: 0, value: 10, label: 'series A' },
                                        { id: 1, value: 15, label: 'series B' },
                                        { id: 2, value: 20, label: 'series C' },
                                    ],
                                    },
                                ]}
                                width={400}
                                height={200}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{sm: 12, md: 6}} sx={{width: '100%'}}>
                    <Card sx={{ minWidth: '100%' }}>
                        <CardContent>
                        <Typography variant="h6"sx={{color: 'text.secondary'}}>
                                GASTOS POR SOCIAL
                            </Typography>
                            <PieChart
                                series={[
                                    {
                                    data: [
                                        { id: 0, value: 10, label: 'series A' },
                                        { id: 1, value: 15, label: 'series B' },
                                        { id: 2, value: 20, label: 'series C' },
                                    ],
                                    },
                                ]}
                                width={400}
                                height={200}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{sm: 12, md: 6}} sx={{width: '100%'}}>
                    <Card sx={{ minWidth: '100%' }}>
                        <CardContent>
                        <Typography variant="h6"sx={{color: 'text.secondary'}}>
                                GASTOS POR TIPO
                            </Typography>
                            <PieChart
                                series={[
                                    {
                                    data: [
                                        { id: 0, value: 10, label: 'series A' },
                                        { id: 1, value: 15, label: 'series B' },
                                        { id: 2, value: 20, label: 'series C' },
                                    ],
                                    },
                                ]}
                                width={400}
                                height={200}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                {/* <Grid size={{sm: 12, md: 6}} sx={{width: '100%'}}>
                    <Card sx={{ minWidth: '100%' }}>
                        <CardContent>
                            <Typography variant="h6"sx={{color: 'text.secondary'}}>
                                    GASTOS POR IMPACTO NO ORÇAMENTO
                                </Typography>
                                <PieChart
                                    series={[
                                        {
                                        data: [
                                            { id: 0, value: 10, label: 'series A' },
                                            { id: 1, value: 15, label: 'series B' },
                                            { id: 2, value: 20, label: 'series C' },
                                        ],
                                        },
                                    ]}
                                    width={400}
                                    height={200}
                                />
                        </CardContent>
                    </Card>
                </Grid> */}

                <Grid size={{sm: 12, md: 6}} sx={{width: '100%'}}>
                    <Card sx={{ minWidth: '100%' }}>
                    <CardContent>
                        <Typography variant="h6"sx={{color: 'text.secondary'}}>
                                GASTOS POR RELAÇÃO C/ GASTO
                            </Typography>
                            <PieChart
                                series={[
                                    {
                                    data: [
                                        { id: 0, value: 10, label: 'series A' },
                                        { id: 1, value: 15, label: 'series B' },
                                        { id: 2, value: 20, label: 'series C' },
                                    ],
                                    },
                                ]}
                                width={400}
                                height={200}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={12} sx={{width: '100%'}}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent sx={{ width: '100%', height:'100%'}}>
                        <Typography variant="h6"sx={{color: 'text.secondary'}}>RELAÇÃO GASTO EM EVENTO SOCIAL POR EMOÇÃO</Typography>
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C', 'group D'] }]}
                            series={[{ data: [4, 3, 5, 6] }, { data: [1, 6, 3, 2] }, { data: [2, 5, 6, 2] }]}
                            height={300}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}