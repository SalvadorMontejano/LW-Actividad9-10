import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
function Topic() {
    let { panelId } = useParams();
    return <h3>Opcion Panel ID: {panelId}</h3>;
}
export default Topic;