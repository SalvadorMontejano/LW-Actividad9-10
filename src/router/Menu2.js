import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Cake from '@material-ui/icons/Cake';
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@mui/material/Typography";
import BakeryDining from '@mui/icons-material/BakeryDining';
import ListAlt from '@mui/icons-material/ListAlt';
import Store from '@mui/icons-material/Store';
import AddBusiness from '@mui/icons-material/AddBusiness';
import Add from '@mui/icons-material/Add';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
 } from "react-router-dom";
 //import Box from "@mui/material/Box";
 import { makeStyles } from '@material-ui/core/styles';
 //import { styled } from '@mui/material/styles';
 import Fab from '@material-ui/core/Fab';
 import Button from '@material-ui/core/Button';
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

const actions = [
  { icon: <Cake />, name: "Agregar Pastel" },
  { icon: <BakeryDining />, name: "Agregar Postre" },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

export default function Menunavegacion() {
  const [value, setValue] = React.useState(0);

  return (
    <Router>      
        <Box sx={{ width: 1350 }}>
            <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
                <BottomNavigation
                        position="static"  
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        sx={{ bgcolor: "pink", width: 1350 }}
                        >
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}/>
                    <Typography href="/" variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                        Julitas
                    </Typography>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>

                        <StyledInputBase placeholder="Buscar" inputProps={{ "aria-label": "search" }}/>
                    </Search>

                    
                    <BottomNavigationAction href="/" label="Pasteles" icon={<Cake/>} />                 
                    
                    <BottomNavigationAction href="/postres" label="Postres" icon={<BakeryDining/>} / >                      
                    
                    <BottomNavigationAction href="/admpastel" label="Adm Pasteles"icon={<ListAlt />}/>
                      
                    <BottomNavigationAction href="/admpostre" label="Adm Postres" icon={<ListAlt />}/>
                                        
                    <BottomNavigationAction href="/admpedidos" label="Adm Pedidos" icon={<Store />}/>
                   
                    <BottomNavigationAction href="/crepastel" label="Publicar Pasteles" icon={ <AddBusiness />}/>
                     
                    <BottomNavigationAction href="/crepostre" label="Publicar Postres"icon={<AddBusiness />}/>
                       
                
                </BottomNavigation>

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
                                    
                    <Route path="/agregar">
                        <Agregar />
                    </Route>

                    <Route path="/">
                        <Pasteles />
                    </Route>
                </Switch>  
            </Box> 
              

        </Box>   
        <SpeedDial ariaLabel="SpeedDial basic example"
                    sx={{ position: "absolute", bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}>
                          {actions.map((action) => (
                            
                            <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            href="/crepastel"
                                />
                                
                        ))}
        </SpeedDial>      
         
    </Router> 
  );
}
