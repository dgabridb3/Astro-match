import React from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import CircularProgress from '@mui/material/CircularProgress';


const styleBox = { 

    height: "350px", 
    width:"250px", 
    margin:"10px auto", 
    position:"relative", 
    overflow: "hidden",
    boxShadow:"rgb(117 117 117 / 77%) 0px 2px 10px 0px",
    '&:hover': {backgroundColor:"black"}

}

const styleBgCard = {
  filter:"blur(30px)",
  height:"100%", 
  width:"100%",
  position:"absolute",
  zIndex:"0"
}
const styleImg = {
  width:"100%", 
  height:"100%", 
  position:"absolute",
  zIndex:"1"
}
const cardName = {
  backgroundColor:"transparent",
  position:"absolute",
  zIndex:"2",
  bottom:"0",
  backgroundImage:"linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)",
  boxShadow: 0, 
  display:"flex",
  flexDirection:"column", 
  padding:"10px",
  width:"92%"
}

const ContainerCard = () => {

  
  const {request} = useContext(GlobalStateContext)
  const profileChoose = request.profileChoose.profile

 
  

  return(
     
     profileChoose 
     ? 
  <Box  sx={styleBox}>
     <CardMedia image={profileChoose.photo}  sx={styleBgCard}/>
     <CardMedia component="img" image={profileChoose.photo}  sx={styleImg }/>
     <Card sx={cardName}>   
         <Card  sx={{backgroundColor:"transparent",boxShadow: 0, display:"flex", alignItems:"center"}}>
           <Typography paragraph={true} sx={{fontWeight:"bold", color:"white", margin:0, fontSize:"20px"}}>
            {profileChoose.name},
           </Typography>
           <Typography paragraph={true} sx={{ color:"white", margin:0,fontSize:"17px",marginLeft:"5px"}} >
            {profileChoose.age}
           </Typography>
         </Card>
         <Card  sx={{backgroundColor:"transparent",boxShadow: 0, display:"flex", alignItems:"center"}}>
           <Typography paragraph={true} sx={{color:"white", margin:0, fontSize:"13px"}}>
            {profileChoose.bio}
           </Typography>
         
         </Card>
     </Card> 
 </Box> 
 : 
 <CircularProgress/>

  )

}

export default ContainerCard