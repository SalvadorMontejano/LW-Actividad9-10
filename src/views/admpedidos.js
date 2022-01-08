import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(foto, nombre, detalle,fecha) {
  return { foto, nombre, detalle,fecha}
}
const rows = [
  createData('Foto','Opera', 600,'30-01-2022'),
  createData('Foto','Cafe', 290,'30-01-2022'),
  createData('Foto','Envinado', 300,'30-01-2022'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function AdmPedidos() {
  const classes = useStyles();

  return (
    <div>
    <h2>Consulta de todos los Pasteles Pedidos </h2>
                
   
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>            
            <StyledTableCell align="right">Foto</StyledTableCell>
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="right">Fecha de Entrega</StyledTableCell>
            <StyledTableCell align="right">Detalle</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>              
              <StyledTableCell align="right">{row.foto}</StyledTableCell>
              <StyledTableCell align="right">{row.nombre}</StyledTableCell>
              <StyledTableCell align="right">{row.fecha}</StyledTableCell>
              <StyledTableCell align="right">{row.detalle}</StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="contained" color="secondary">
                    Ver
                </Button>
              </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>  
  );
}

export default AdmPedidos;