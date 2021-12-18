import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

import Topic from "./topic";
function Panel() {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>Panel</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/aPasteles`}>Administrar Pasteles</Link>
          </li>
          <li>
            <Link to={`${match.url}/aPostres`}>Administrar Postres</Link>
          </li>
          <li>
            <Link to={`${match.url}/pedidos`}>Pedidos</Link>
          </li>
          <li>
            <Link to={`${match.url}/salir`}>Salir</Link>
          </li>
        </ul>
  
        {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
        <Switch>
          <Route path={`${match.path}/:panelId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Opciones</h3>
          </Route>
        </Switch>
      </div>
    );
}

export default Panel;
