import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Wrapper from "./pages/wrapper/WrapperPage";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Wrapper><Dashboard/></Wrapper>} />
          <Route path="/home" element={<Wrapper><div>hello from home</div></Wrapper>} />
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
