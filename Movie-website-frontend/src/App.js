import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Add } from "./components/Add";
import Login from "./components/login/Login";
import { MovieInfo } from "./components/Movie Infopage/MovieInfo";
import Navbar from "./components/Navbar";
import { Playlist } from "./components/Playlist";
import Register from "./components/register/Register";
import { Watched } from "./components/Watched";
import { GlobalProvider } from "./context/GlobalState";
import "./lib/css/all.min.css";

function App() {
  const [user, setLoginUser] = useState({});
  var a = JSON.parse(localStorage.getItem("MyUser"))
  

  useEffect(() => {
    
    setLoginUser(a);
  }, []);

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user));
    setLoginUser(user);
  };

  return (
    <GlobalProvider>
      <BrowserRouter>
        

        <Routes>
          <Route
            path="/"
            element={
              user && user._id ? (
                <Playlist updateUser={updateUser} />
              ) : (
                <Login updateUser={updateUser} />
              )
            }
            exact 
          />
          
          <Route
            path="/login"
             element={<Login updateUser={updateUser} />}
            
          />
          <Route path="/register" element={<Register />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
          <Route path="/movieInfo/:id" element={<MovieInfo />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
