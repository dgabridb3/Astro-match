import { BrowserRouter, Routes, Route} from "react-router-dom"
import TelaInicial from "../pages/TelaInicial"
import TelaMatches from "../pages/TelaMatches"

 const Router = () => {
  
    return(
    <BrowserRouter>

        <Routes>

            <Route index path="/" element={<TelaInicial/>} />
            <Route path="/matches"element={<TelaMatches/>}/>
            <Route path="*"/>
            
        </Routes>

    </BrowserRouter>
    )
}

export default Router