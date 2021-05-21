import React, {useState} from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import Alert from './Alert'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
 

const Authorization = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log(open);
    setOpen(true);
  };

  const handleClose = () => {
    console.log(open);
    setOpen(false);
  };

 return (
  <div className='modal' >
    <div className="modal_content">
        <Button
          className='authbtn'
         endIcon={<HowToRegIcon />}
          onClick={handleOpen}
          variant="contained"
          style={{background: '#ff9800', color:'#fff' }}
        >
        Sign Up
       
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
         <h2 className='modal_header'> Create new account</h2>
        <div>
         <TextField
          helperText="Please enter your username"
          id="demo-helper-text-aligned"
          label="username"
        />
        <TextField
          helperText="Please enter your password"
          id="demo-helper-text-aligned-no-helper"
          label="password"
        />
        </div>
        <Alert />
      </div>
        </Fade>
      </Modal>
    </div>
  </div>
 )
}

export default Authorization