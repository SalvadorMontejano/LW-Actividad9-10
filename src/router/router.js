import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
 } from "react-router-dom";
 import Box from "@mui/material/Box";
 import { makeStyles } from '@material-ui/core/styles';
 import { styled } from '@mui/material/styles';
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

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -0,
  left: 0,
  right: 0,
  margin: '0 auto',
});

function Routers(){
    return (       
        <Router>          
          <div>             
                <Link to="/">
                  <Button variant="contained" >                  
                    Pasteles
                  </Button>
                </Link>                
              
                <Link to="/postres">
                  <Button variant="contained" >
                    Postres
                  </Button> 
                </Link>
              
                <Link to="/admpastel">
                  <Button variant="contained" >                  
                    administrar pasteles
                  </Button>
                </Link>                
              
                <Link to="/admpostre">
                  <Button variant="contained" >                  
                    administrar postres
                  </Button>
                </Link>                
              
                <Link to="/admpedidos">
                  <Button variant="contained" >                  
                    administrar pedidos
                  </Button>
                </Link>                
              
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
          </div>          
        </Router>      
      );
}
export default Routers;