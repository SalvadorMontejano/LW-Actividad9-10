import Fondo from "../style/background";    
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Pedido from "../views/pedido"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
 } from "react-router-dom";



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 345,
  },
});

export default function Pasteles() {
  const classes = useStyles();

  return (
    <Router>   
    <div>
    <h2>Consulta de todos los Pasteles publicados</h2>
    <Card sx={{ maxWidth: 1200 }}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pastel de Cafe
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Pastel humedecido con licor de cafe
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Detalles
        </Button>

       
        <Button href="/pedido" size="small" color="primary">
          Comprar
        </Button>
        
      </CardActions>
    </Card>
    </Card>
    
    <Switch>
    <Route path="/pedido">
                <Pedido />
              </Route>
    </Switch>      
    </div>  
    </Router> 
  );
}