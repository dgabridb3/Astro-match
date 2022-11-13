import React from "react"
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Box } from '@mui/system';
import Fab from '@mui/material/Fab';
import { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';


const styleButton =  {  
    width: "300px", 
    height: "70px", 
    display: "flex",
    alignItems:"center", 
    justifyContent: "space-evenly",
    padding:"10px 0 10px 0"
   
}
const styleButtonRadiusRed = 
{ color: 'red', 
  backgroundColor: "white", 
   '&:hover': {
    background: "red",
    transform: "scale(1.1)",
    transition: "all 0.2s ease 0s"
 },}
 const styleButtonRadiusGreen= 
 { color: 'green', 
   backgroundColor: "white", 
    '&:hover': {
     background: "green",
     transform: "scale(1.1)",
     transition: "all 0.2s ease 0s"
  },}
const styleIconRed = {
     color: 'red',
      width: "80%",
      height:"100%", 
      '&:hover': {color:"white"}
}
const styleIconGreen = {
    color: 'green',
     width: "80%",
     height:"100%", 
     '&:hover': {color:"white"}
}


const Button = () =>{

   const {request} = useContext(GlobalStateContext)
    const { postChoosePerson} = request
 
   
   const onClickNo = () =>  {
      postChoosePerson(false) 
   }
   const onClickYes= () =>  {
      postChoosePerson(true) 
   }

   return(

  <Box sx={ styleButton}>   
      <Fab sx={styleButtonRadiusRed} onClick={onClickNo} >
         <ClearOutlinedIcon  sx={styleIconRed}/>
      </Fab>   
      <Fab sx={styleButtonRadiusGreen}>
         <FavoriteBorderOutlinedIcon  sx={styleIconGreen} onClick={onClickYes}/>
      </Fab>
  </Box>

)
}

export default Button