import React, {useState} from "react";
import './App.css';

// Importar os componentes
import Login from './components/Login/Login';

function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '123'){
      setIsLoggedIn(true);
    }else{
      alert("Usuário ou senha inválidos!!!");
    }
  }

  if (!isLoggedIn){
    return <Login onLogin={handleLogin}/>
  }
}export default App;