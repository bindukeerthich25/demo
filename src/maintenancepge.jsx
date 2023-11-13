import { Container,Paper, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

import img1 from './maintpage.png';
import { padding } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    left: '10%',
    top: '60%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    marginTop: '100px',
    marginRight:'240px',
  },
  image: {
    maxWidth: '700px',
    position: 'absolute',
    left: '80px',
    marginTop:'200px'
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
    <Container className={classes.container}>
      <img src={img1} className={classes.image} alt="Maintenance" />
      <Paper>
        <Typography variant="h2" className={classes.title}>
          We are doing some maintenance.!!
        </Typography>
        <Typography variant="body1" className={classes.subTitle}>
          We will be back soon!!!
        </Typography>
      </Paper>
    </Container>
  );
};

export default Maintenancepge;