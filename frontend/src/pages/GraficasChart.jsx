import React from "react";
//componentes ejemplo
import BarChart, { PastelChart, RadarChart, LineChart, BubbleChart, DoughnutChart, PolarAreaChart } from '../components/Global/GraficasComponent'
//MIU
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//datos muestra
import { faker } from '@faker-js/faker';

const GraficasChart = () => {

    //BARRAS
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const dataBARRAS = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    //PASTEL
    const dataPASTEL = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const dataRADAR = {
        labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
        datasets: [
            {
                label: '# of Votes',
                data: [2, 9, 3, 5, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const dataLINE = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };


    const dataBUBBLE = {
        datasets: [
            {
                label: 'Red dataset',
                data: Array.from({ length: 50 }, () => ({
                    x: faker.datatype.number({ min: -100, max: 100 }),
                    y: faker.datatype.number({ min: -100, max: 100 }),
                    r: faker.datatype.number({ min: 5, max: 20 }),
                })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Blue dataset',
                data: Array.from({ length: 50 }, () => ({
                    x: faker.datatype.number({ min: -100, max: 100 }),
                    y: faker.datatype.number({ min: -100, max: 100 }),
                    r: faker.datatype.number({ min: 5, max: 20 }),
                })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const dataLINE2 = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const dataDoughnut = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    const dataPolarArea = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderWidth: 1,
            },
        ],
    }


    return (
        <>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: '100%',
                    height: '98%',

                },
            }}
            >
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>  <BarChart data={dataBARRAS} /></Grid>
                            <Grid item xs={6}>  <PastelChart data={dataPASTEL} /></Grid>
                            <Grid item xs={6}>  <RadarChart data={dataRADAR} /></Grid>
                            <Grid item xs={6}>  <LineChart data={dataLINE} /></Grid>
                            <Grid item xs={6}>  <BubbleChart data={dataBUBBLE} /></Grid>
                            <Grid item xs={6}>  <LineChart data={dataLINE2} /></Grid>
                            <Grid item xs={6}>  <DoughnutChart data={dataDoughnut} /></Grid>
                            <Grid item xs={6}>  <PolarAreaChart data={dataPolarArea} /></Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Box>
        </>
    );
}


export default GraficasChart;