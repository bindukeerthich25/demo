import React from "react";
import { makeStyles } from '@mui/styles';
import img1 from './Nodata1.jpg';
import { Container, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    
  },
 
  image: {
    maxWidth: '900px',
    position: 'relative',
    right: "50px",
    marginTop:'60px',
   
    borderRadius: "150px",
    
  },
  title: {
    
    color: "#330099",
    textAlign: "center",
    margin: "40px",
    top: "30px",
    fontSize:'25px',
  },
  text: {
    fontSize: '15px',
    textAlign: "center",
  },
}));

const Norecord = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <img src={img1} alt="No Records Found" className={classes.image} />
      <Typography variant="h1" className={classes.title}>
        No Records Found!!
      </Typography>
      <Typography variant="body1" className={classes.text}>
        There are no records to display at the moment.
      </Typography>
    </Container>
  );
};

export default Norecord;
