import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import Divider from "@mui/material/Divider";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



import { styled } from '@mui/material/styles';

function CrePastel()
{

  const[imagen,setImagen]=useState("");
  const[nombre,setNombre]=useState("");
  const[precio,setPrecio]=useState("");
  const[descripcion,setDescripcion]=useState("");
  

  const Input = styled('input')({
    display: 'none',
    });

  const cambioNombrevalue=({target:{value}})=>
  {
    console.log(value);
    setNombre(value);
  }
  const cambioDescripvalue=({target:{value}})=>
  {
    console.log(value);
    setDescripcion(value);
  }
  const cambioPreciovalue=({target:{value}})=>
  {
    console.log(value);
    setPrecio(value);
  }
 
  const enviarValores=(event)=>
  {
    event.preventDefault();
    console.log("submit");
    alert(`Nombre:${nombre}, Descripcion:${descripcion}, Precio $:${precio}`)
  } 

  return (
      
    <div className="CrePostre">
      <Card sx={{ maxWidth: 1200 }}>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={enviarValores}
        >        
            <div>
                <ListItem>
                    <h2>Alta de Pastel </h2>
                </ListItem>
                <Divider variant="inset" />
                
                <ListItem>
                    <label htmlFor="contained-button-file">
                        <Input 
                            accept="image/*" 
                            id="contained-button-file" 
                            multiple type="file" 
                            value={imagen} 
                            onChange={(e) => setImagen(e.target.files[0])}
                        />
                        <Button variant="contained" component="span">
                            Subir Imagen
                        </Button>
                    </label>
                </ListItem> 
                <Divider variant="inset"  />
                <ListItem>  
                    <TextField
                    required
                    id="standard-required"
                    label="Nombre"
                    variant="standard"
                    value={nombre} 
                    onChange={cambioNombrevalue}
                    />

                    <TextField
                    id="standard-multiline-flexible"
                    label="Descripcion"
                    multiline
                    maxRows={4}          
                    variant="standard"
                    value={descripcion}
                    onChange={cambioDescripvalue}
                    />

                    <TextField
                    required
                    id="standard-number"
                    label="Precio $"
                    type="number"
                    InputLabelProps={{shrink: true,}}
                    variant="standard"
                    value={precio}
                    onChange={cambioPreciovalue}
                    />
                </ListItem>
                <Divider variant="inset" />
                <ListItem>
                    <Button 
                        variant="contained" 
                        type="submit"
                    >
                            Guardar
                    </Button>
                </ListItem>         
            </div>
        </Box> 
        </Card>    
    </div>
  );
}

export default CrePastel;
