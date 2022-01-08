import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

//import Routers from "./router/router";
import Fondo from "./style/background";
import PrimarySearchAppBar from "./router/Menu";
import Menunavegacion from "./router/Menu2";
import Wid from "./style/wid";
//import { Menu } from "@mui/material";

export default function App() {
  return (
    <div>
      <Menunavegacion/>
      {/*<PrimarySearchAppBar/>
      
      {/* <Routers/>Comment goes here 
      
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Wid>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Stack spacing={2} direction="row">
              
              </Stack>            
            </Box>          
          </Box>
        </Wid>
        
      </Box>*/}
    </div>
  );
}


