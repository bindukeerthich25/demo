import { Avatar, Card, CardContent, Container,Grid,Paper, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

import img1 from './maintpage.png';
import { Box, padding } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  container: {
  
   
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    marginTop: '100px',
    marginRight:'240px',
    display:'flex',
    flexDirection:'row',
  },
  image: {
    maxWidth: '700px',
    
    marginTop:'200px',
  },
  title: {
    fontSize: '50px',
    textAlign:'right',
    marginRight: '900px',  
  },
  subTitle: {
    fontSize: '30px',
    margin: '10px',
  },
}));
const Maintenancepge = () => {
  const classes = useStyles();
  return (
  
  <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        height: '100vh',
      }}
    >
      <Grid item xs={12} sm={8}>
        <Card className={classes.mainCard} >
          <Typography
            variant="h3"
            sx={{ marginTop: '100px', textAlign: 'center', fontFamily: 'Geogria',color:'darkblue'}}
          >
           Page Under maintenance
          </Typography>
          <CardContent className={classes.cardContent}>
            <Box
              className={classes.box}
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Card
                
                sx={{
                  flex: 1,
                  borderRadius: '16px',
                  marginRight: '5rem',
                  justifyContent: 'Center',
                  alignContent: 'center',
                  
                  maxHeight: '650px',
                  maxWidth: '800px',
                  textAlign:'right', 
                }}
              >
                <CardContent style={{}}>
                  <Avatar
                    className={classes.img}
                    alt="Admin"
                    src={img1}
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '16px',
                      justifyContent: 'center',
                      display: 'flex',
                      objectFit: 'contain',  
                    }}
                  />
                </CardContent>
              </Card>
              <Paper
                className={classes.paper}
                sx={{
                  color: 'darkblue',
                  padding: '2rem',
                  flex: 1,
                  borderRadius: '16px',
                  
                  marginTop:'200px'
                }}
              ><Typography variant="h4" className={classes.title}>
                       We are doing some maintenance.!!
                     </Typography>
                    
               </Paper>  
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
};

export default Maintenancepge;