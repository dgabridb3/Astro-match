
import styled from 'styled-components'
import React from 'react';
import logo from "../../assets/logo.png"
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Button from '../../components/Button';
import ContainerCard from '../../components/ContainerCard';
import { useNavigate } from 'react-router-dom';
import { goToMaches } from '../../routes/coordinator';
import ResetButton from '../../components/ResetButton';



const Main =styled.div`
height: 500px;
width: 300px;
background-color: white;
border-radius: 7px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
`
const ContainerHeader = styled.div`
height: 50px;
width: 100%;
border-bottom: 1px solid #3333;
display: flex;
justify-content: flex-end;
`
const Header = styled.div`
width: 77%;
display: flex;
justify-content: space-around;
align-items: center;

`
const HeaderImage = styled.img`
height: 40px;
`


const TelaInicial = () => {

    const navigate = useNavigate()
    
    
   
     return(
       
      <>
        <Main>
           <ContainerHeader>
              <Header>
               <HeaderImage src={logo} alt="imagem da logo"/>
               <GroupAddIcon sx={{ color: 'purple', fontSize: 25, cursor:"pointer" }} onClick={() => goToMaches(navigate)} />
              </Header>
           </ContainerHeader>
           <ContainerCard/>
           <Button/>
        </Main>

        < ResetButton/>
        

      </>
       
     )
}

export default TelaInicial