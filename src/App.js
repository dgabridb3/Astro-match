import GlobalState from "./global/GlobalState"
import Router from "./routes/router";
import styled from 'styled-components'

function App() {

  const Div = styled.div`
    background: #3333;
    width: 100vw;
    height: 100vh;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
  `

  return (
    
    <Div>
      <GlobalState>
       <Router/>
     </GlobalState>
    </Div>
  );
}

export default App;
