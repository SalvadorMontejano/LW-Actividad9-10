import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { styled } from '@mui/material/styles';

function CrePostre() 
{

  const[imagen,setImagen]=useState("");
  const[nombre,setNombre]=useState("");
  const[precio,setPrecio]=useState("");
  const[descripcion,setDescripcion]=useState("");
  const[cantidad,setCantidad]=useState("");

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
  const cambioCantidadValue=({target:{value}})=>
  {
    console.log(value);
    setCantidad(value);
  }
  const enviarValores=(event)=>
  {
    event.preventDefault();
    console.log("submit");
    alert(`Nombre:${nombre}, Descripcion:${descripcion}, Precio $:${precio}, Cantidad $:${cantidad}`)
  } 

  return (
      
    <div className="CrePostre">
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
                <h2>Alta de Postre </h2>
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

                    <TextField
                    required
                    id="standard-number"
                    label="Cantidad"
                    type="number"
                    InputLabelProps={{shrink: true,}}
                    variant="standard"
                    value={cantidad}
                    onChange={cambioCantidadValue}
                    />

                    <Button 
                        variant="contained" 
                        type="submit"
                    >
                            Guardar
                    </Button>
                </div>
            </Box>     
    </div>
  );
}

export default CrePostre;
