import React from "react";

//MIU
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const DemosComponents = (props) => {
  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: '98%', height: '100%', }, }}>
        <Grid container spacing={1}>
          DemosComponents
        </Grid>
      </Box>
    </>
  );
};

export default DemosComponents;
