import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
 } from "react-router-dom";

 import { makeStyles } from '@material-ui/core/styles';
 import Fab from '@material-ui/core/Fab';
 import Button from '@material-ui/core/Button';
 import AddIcon from '@material-ui/icons/Add';
 

import Pasteles from "../views/pasteles"
import Postres from "../views/postres";
import Panel from "../views/panel";
import Agregar from "../views/agregar";

function Routers(){
    return (
      
        <Router>
          <div>
            <ul>
              <li>
              <Link to="/">
                <Button variant="contained" >                  
                Pasteles
                </Button>
              </Link>                
              </li>
              <li>
              <Button variant="contained" >
                <Link to="/postres">Postres</Link>
                </Button> 
              </li>
              <li>
                <Link to="/panel">Panel</Link>
              </li>
              <li>
                <Link to="/agregar">
                  <Fab color="primary" aria-label="add">
                    <AddIcon />
                  </Fab> 
                </Link>           
              </li>
            </ul>
    
            <Switch>
              <Route path="/postres">
                <Postres />
              </Route>
              <Route path="/panel">
                <Panel />
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