import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllExpenses from "./expense-tracker/screens/AllExpenses";
import ManageExpenses from "./expense-tracker/screens/ManageExpenses";
import RecentExpenses from "./expense-tracker/screens/RecentExpenses";
import Home from "./Home/Home";
import Login from "./Login&Signup/screens/Login";
import Signup from "./Login&Signup/screens/Signup";
import Welcome from "./Login&Signup/screens/Welcome";
import { AuthContext } from "./Login&Signup/store/auth-context";


function App() {
const authCtx=useContext(AuthContext);
useEffect(() => {
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    authCtx.authenticate(storedToken);
  }
}, [authCtx]);

  return (
   <>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
            {authCtx.authenticated && (<><Route path="AllExpenses" element={<AllExpenses />} />
            <Route path="RecentExpenses" element={<RecentExpenses />} />
            <Route path="ManageExpense" element={<ManageExpenses />}>
              <Route path=":itemId" element={<ManageExpenses />} />
            </Route>
            <Route path="Welcome" element={<Welcome />} /></>)}
         
        </Routes>
      </BrowserRouter>
   </> 
      
  );
}

export default App;
