import { Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { NavBar } from '../../components/navigation/navbar'

export const Home = () => {
    return (
        <Box className='flex flex-col'>
            <NavBar />
            <Container>
                <Grid container spacing={2} className='p-9'>
                    <Grid item xs={6} className='border border-solid border-4 border-slate-500  p-3 border-double rounded mx-auto'>
                        <Typography>
                            Hey<br />
                            I am Ankit Bansal<br />
                            And i am a Full Stack Dev
                        </Typography>

                    </Grid>
                    <Grid item xs={6}>
                        enfd
                    </Grid>

                </Grid>
                <Typography>

                </Typography>
            </Container>
        </Box>
    )
}
