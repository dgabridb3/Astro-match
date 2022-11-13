import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';



const CardMatches = () => {
    
    const {request} = useContext(GlobalStateContext)
    const listMatches = request.matches && request.matches.matches.map((i)=>{
        return(
            
            <Card key={i.id} sx={{display:"flex",alignItems:"center", margin:"5px auto",width:"95%", boxShadow: 0,'&:hover': {backgroundColor:"#d3d3d3"}}}>    
                <Avatar src={i.photo} alt={i.photo_alt} sx={{margin:"5px", objectFit:"cover"}}/>
                <Typography paragraph={true} sx={{fontSize:"13px", margin:"0 0 0 5px"}}>
                  {i.name}
                </Typography>
            </Card>
        )
    })

    
    
    return(
         
         <>
         {listMatches}
         </>
    )
}

export default CardMatches