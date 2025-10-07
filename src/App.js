import React, {useState} from "react";
import './App.css';

// Importar os componentes
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Welcome from './components/Welcome/Welcome';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState('Welcome');
  const [contacts, setContacts] = useState([
    {id:1, name:'Breno Dolcinotti', phone:'1698636487'},
    {id:2, name:'Neymar Junior', phone:'1699743757'}]);

  const [contactToEdit, setContactToEdit] = useState(null);

  // Função de login
  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '123'){
      setIsLoggedIn(true);
    }else{
      alert("Usuário ou senha inválidos!!!");
    }
  }

  const handleSaveContact = (contact) => {}
  const handleDeleteContact = (id) => {}
  const startEdit = (contact) => {}
  const showCreateForm = () => {}
  const handleNavigate = (screen) => {}

  if (!isLoggedIn){
    return <Login onLogin={handleLogin}/>
   }

   return(
    <div>
      <Menu onNavigate={handleNavigate} onCreate={showCreateForm}/>
      <main className="content">
        {activeScreen === 'Welcome' && <Welcome/>}
        {activeScreen === 'list' && <ContactList contacts={contacts} onEdit={startEdit} onDelete={handleDeleteContact}/>}
        {activeScreen === 'form' && <ContactForm contactToEdit={contactToEdit} onSave={handleSaveContact}/>}
      </main>
    </div>
   )
}export default App;