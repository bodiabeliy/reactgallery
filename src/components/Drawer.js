import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Auth from './Authorization'
import GTranslateIcon from '@material-ui/icons/GTranslate';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
// размер drawer-a (окно с боковым появлением)
const drawerWidth = 300;
// стили для drawer
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% + ${drawerWidth /0.7}px)`,
    marginLeft: -drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft(props) {
  // состояние для проверки авторизации (ввода символов) 
  const [auth] = useState(true);
  // применение классового подхода к стилям
  const classes = useStyles();
  const theme = useTheme();
  // состояние модального окна
  const [open, setOpen] = useState(false);
  // состояние-тригер для выдвижения drawer-a
  const [anchorEl, setAnchorEl] = useState(null);
  // точка состояния 
  const openClick = Boolean(anchorEl);

  // выбран елемент из списка
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    console.log(props);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
       <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Photos
          </Typography>
          <Auth />

          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenu}
              >
               <GTranslateIcon />
              </IconButton>
              <IconButton
               color="inherit"
              > 
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openClick}
                onClose={handleClose}
              >
               <Router>
                <MenuItem onClick={handleClose}>
                 <Route>
                 <Link 
                  className='link' 
                  to='/russian'>Русский
                  </Link>
                 </Route>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                  <Route>
                  <Link 
                  className='link'
                   to='/'

                   >English
                   </Link>
                  </Route>
                </MenuItem>
               </Router>
              </Menu>
              <AccountCircle />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ?
            <div>
            Options
            <ChevronLeftIcon />
            </div> 
            :
             <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Total size', 'User photos'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <PhotoSizeSelectActualIcon /> : <PermIdentityIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      
    </div>
  );
}