import React from "react";
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ViewCompact from '@material-ui/icons/ViewCompact';
import Cake from '@material-ui/icons/Cake';
import Mood from '@material-ui/icons/Mood';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { FolderOpenOutlined } from "@material-ui/icons";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';



  
/////
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Box from "@mui/material/Box";
//import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Fab from '@material-ui/core/Fab';
//import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add'; 

import Pasteles from "../views/pasteles"
import Postres from "../views/postres";
import AdmPasteles from"../views/admpasteles"
import AdmPostres from"../views/admpostres"
import CrePastel from "../views/crepasteles"
import CrePostre from "../views/crepostres"
import Pedido from "../views/pedido"
import Panel from "../views/panel";
import Agregar from "../views/agregar";
import Fondo from "../style/background";
import Wid from "../style/wid";
import AdmPedidos from "../views/admpedidos";

const StyledFab = styled(Fab)({
position: 'absolute',
zIndex: 1,
top: -0,
left: 0,
right: 0,
margin: '0 auto',
});

///////////////////////////////////////////////

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {

  const [Valor, setValor] = React.useState(0);

  const color = createTheme({
    palette: {
      primary: {
        main: "#F5DDDD"
      }
    }
  });
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Administrar Pasteles</MenuItem>
      <MenuItem onClick={handleMenuClose}>Administrar Postres</MenuItem>
      <MenuItem onClick={handleMenuClose}>Pedidos</MenuItem>
      <MenuItem onClick={handleMenuClose}>Salir</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Cake />
          </Badge>
        </IconButton>
        <p>Pasteles</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Mood />
          </Badge>
        </IconButton>
        <p>Postres</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ViewCompact />
        </IconButton>
        <p>Panel</p>
      </MenuItem>
    </Menu>
  );

  return (   
      
    
    <div className={classes.grow}>
      <Router> 
      <ThemeProvider theme={color}>
        <AppBar position="static">
          <Toolbar>

            <Typography className={classes.title} variant="h6" noWrap>
              JulitasPostresyMas
            </Typography>         
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>  
            <BottomNavigation
                showLabels
                value={Valor}
                onChange={(event, newValue) => {
                  setValor(newValue);
                }}
              >
                <Link to="/">
                <BottomNavigationAction label="Pasteles" icon={<Cake />} />
                </Link>
                <Link to="/postres">
                <BottomNavigationAction label="Postres" icon={<Mood />} />
                </Link>
              </BottomNavigation>
              </div>
              
                  
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }} />
            </div>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>        
            

              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>

              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

                
                <IconButton aria-label="show 17 new notifications" color="inherit">
                
                  <Badge badgeContent={0} color="secondary"> 
                  <Link to="/admpastel">            
                    <NotificationsIcon />  
                    </Link>     
                  </Badge> 
                                
                </IconButton> 
              
                  
                
              <Link to="/admpostre">    
                <IconButton aria-label="show 17 new notifications" color="inherit">                
                  <NotificationsIcon />                
                </IconButton>
              </Link>  

              <Link to="/admpedidos">  
                <IconButton aria-label="show 17 new notifications" color="inherit">
                  <NotificationsIcon />                
                </IconButton>
              </Link>  

              <IconButton aria-label="show 17 new notifications" color="inherit">
                
                  <NotificationsIcon />
                
              </IconButton>

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <ViewCompact />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>  
        {renderMobileMenu}
        {renderMenu}   
    
                <Link to="/crepastel">
                  <Button variant="contained" >                  
                    publicar pastel
                  </Button>
                </Link>                
              
                <Link to="/crepostre">
                  <Button variant="contained" >                  
                    Publicar porstre
                  </Button>
                </Link>                
             
                <Link to="/pedido">
                  <Button variant="contained" >                  
                    crear pedido
                  </Button>
                </Link>                
              
                <Link to="/panel">Panel</Link>
             
              
                <Link to="/agregar">                
                  <Fab color="primary" aria-label="add">
                  <StyledFab>
                      <AddIcon />
                  </StyledFab>                     
                  </Fab>                   
                </Link>             
            
            
            <Switch>
              <Route path="/postres">
                <Postres />
                
              </Route>
              <Route path="/panel">
                <Panel />
              </Route>
              <Route path="/admpastel">
                <AdmPasteles />
              </Route>
              <Route path="/admpostre">
                <AdmPostres />
              </Route>
              <Route path="/admpedidos">
                <AdmPedidos />
              </Route>
              <Route path="/crepastel">
                <CrePastel />
              </Route>
              <Route path="/crepostre">
                <CrePostre />
              </Route>
              <Route path="/pedido">
                <Pedido />
              </Route>
              <Route path="/agregar">
                <Agregar />
              </Route>
              <Route path="/">
                <Pasteles />
              </Route>
            </Switch>            
                  
        </Router>  
                     
      </div>
      
      
    
  );
}
