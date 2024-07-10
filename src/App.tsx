import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import WrapperPage from "./pages/wrapper/WrapperPage";
import Dashboard from "./pages/dashboard/Dashboard";
import Integration from "./pages/integration/Integration";
import Settings from "./pages/settings/Settings";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <WrapperPage>
                <Dashboard />
              </WrapperPage>
            }
          />
          <Route
            path="/integration"
            element={
              <WrapperPage>
                <Integration />
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
          <Route
            path="/settings"
            element={
              <WrapperPage>
                <Settings />
              </WrapperPage>
            }
          />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
