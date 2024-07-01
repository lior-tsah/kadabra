import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Wrapper from "./pages/wrapper/WrapperPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Wrapper><Login/></Wrapper>} />
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
