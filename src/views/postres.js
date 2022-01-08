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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 345,
  },
});

function Postres() {
  const classes = useStyles();

  return (
    <div>
    <h2>Consulta de todos los Postres publicados</h2>;
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1507306788627-e0850edeaa8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1486&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pay de Manzana
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Pay con trosos de manzana relleno de mermelada de manzana
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Detalles
        </Button>
        <Button size="small" color="primary">
          Comprar
        </Button>
      </CardActions>
    </Card>
    </div>  
  );
}
export default Postres;