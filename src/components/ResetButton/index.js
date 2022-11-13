import Fab from '@mui/material/Fab';
import React,{ useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';


export default function ResetButton() {
   
    const {request} = useContext(GlobalStateContext)
    const {clear} = request
    
   
    
    return (
      
        <Fab sx={{position:"fixed", bottom:"6px",right:"60px"} }   onClick={clear}>
         reset
        </Fab>
       
    );
  }