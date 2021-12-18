import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  
import Topic from "./topic";
function Agregar() {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>+</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/pupastel`}>Publicar Pasteles</Link>
          </li>
          <li>
            <Link to={`${match.url}/pupostre`}>Publicar Postre</Link>
          </li>
        </ul>
  
        {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
        <Switch>
          <Route path={`${match.path}/:agregaId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Que publicaras</h3>
          </Route>
        </Switch>
      </div>
    );
}
  
  
 
export default Agregar;