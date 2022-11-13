
import styled from 'styled-components'
import React from 'react';
import logo from "../../assets/logo.png"
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import { useNavigate } from 'react-router-dom';
import { goToHome } from '../../routes/coordinator';
import CardMatches from '../../components/CardMatches';
import ResetButton from '../../components/ResetButton';


const Main =styled.div`
   height: 500px;
   width: 300px;
   background-color: white;
   border-radius: 7px;

   
  `
const ContainerMatches =styled.div`
 height: 90%;
overflow-y: scroll;


`  
const ContainerHeader = styled.div`
height: 50px;
width: 100%;
border-bottom: 1px solid #3333;
display: flex;
justify-content: flex-start;
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

const TelaMatches = () => {

    const navigate = useNavigate()

    return(
      <>
        <Main>
           <ContainerHeader>
              <Header>
               <GroupRoundedIcon sx={{ color: "rgb(74, 163, 151)", fontSize: 25,cursor:"pointer" }} onClick={() => goToHome(navigate)} />
               <HeaderImage src={logo} alt="imagem da logo"/>
              </Header>
            
           </ContainerHeader>
           <ContainerMatches >
               <CardMatches/>
           </ContainerMatches >
           
        </Main>
        <ResetButton/>
      </>
    )
}

export default TelaMatches