import React from "react";
//MIU
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Home = () => {



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
                        Tables
                        </Grid>
                    </Grid>
                </Grid>

            </Box>
        </>
    )

}

export default Home;
