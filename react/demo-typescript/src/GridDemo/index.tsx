import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Hyd from "../images/hyd.jpeg"
import Bng from "../images/ban.jpeg"
import Che from "../images/che.jpeg"
import Del from "../images/del.jpeg"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function GridDemo() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} lg={3}>
          <Stack direction="row" spacing={1}>
            {["hyd","chennai"].map((e:any)=><Chip label={e} variant="outlined" onDelete={()=>{
              console.log("welcome");
            }}/>)}
          </Stack>
        </Grid>
        <Grid item xs={4}  lg={3}>
            <img src={Bng}/>
        </Grid>
        <Grid item lg={3}>
          <img src={Che}/>
        </Grid>
        <Grid item lg={3}>
          <img src={Del}/>
        </Grid>
      </Grid>
    </Box>
  );
}