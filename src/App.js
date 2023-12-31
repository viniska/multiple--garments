import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Admin Page/Authentication/Login';
import ForgotPass from './Admin Page/Authentication/ForgotPass';
import ResetPass from './Admin Page/Authentication/ResetPass';
import Dashboard from './layout/Main Layout/Dashboard';
import { CssBaseline } from "@mui/material";


function App() {

  // const [auth, setAuth] = useState(false);
  // const location = useLocation();

  return (
    <Router>
      <CssBaseline />
      <Routes>
        {/* <Route exact path="/" element={<Dashboard />} /> */}
        <Route path='/' element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route
          path="/"
          element={
            auth ? (
              <Dashboard setAuth={setAuth} />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        /> */}
        <Route path='/fpassword' element={<ForgotPass />} />
        <Route path='/rpassword' element={<ResetPass />} />
      </Routes>
    </Router>
  );
}

export default App;
