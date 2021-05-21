import React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function Alert() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    const changeAlert = Boolean(false)
    if (changeAlert === true) {
      variant = 'success'
      enqueueSnackbar('Account successful created!', { variant  });
    }
    if (changeAlert === false) {
      variant = 'error'
      enqueueSnackbar('field username or password don`t must be empty!', { variant });
    }

  };

  return (
    <React.Fragment>
      <Button
       onClick={handleClickVariant('success')}
        className='modalBtn'
        variant="contained"
        color="default"
        style={{background: '#ff9800', color: 'white', marginTop: '20px'}}
      >
        Add account
      </Button>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Alert />
    </SnackbarProvider>
  );
}