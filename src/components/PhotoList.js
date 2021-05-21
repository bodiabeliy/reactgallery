import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Photo from './Photo'


// стили
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '50px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function AllPhotos(props) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
       <h1>System Images:</h1>
      <Grid container spacing={3}>
        { props.photos.map(photo => {
        return (
         
        <Grid item  lg={4} xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
        <Photo image={photo}/>
        </Paper>
        </Grid>
        )
       })
      }
      </Grid>
      
    </div>
  );
}
