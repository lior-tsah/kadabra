import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import WrapperPage from "./pages/wrapper/WrapperPage";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginViaGoogle from "./pages/login/LoginViaGoogle";
import {DataProvider} from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/" element={<LoginViaGoogle/>} /> */}
          <Route
            path="/dashboard"
            element={
              <WrapperPage>
                <Dashboard />
              </WrapperPage>
            }
          />
          <Route
            path="/home"
            element={
              <WrapperPage>
                <div>hello from home</div>
              </WrapperPage>
            }
          />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
