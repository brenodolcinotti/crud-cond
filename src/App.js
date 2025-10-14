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
  const [activeScreen, setActiveScreen] = useState('welcome');
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

  const handleSaveContact = (contact) => {
    if(contact.id){ 
      // Se o contato já tem id, é uma atualização
      setContacts(contacts.map(c => c.id === contact.id ? contact : c));
      alert("Contato alterado com sucesso!");
    }else{
      // Cadastra-se um contato novo
      contact.id = Date.now();
      setContacts([...contacts, contact]);
      alert("Contato cadastrado com sucesso!")
    }
    setActiveScreen('list');
    setContactToEdit(null);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
    alert("Contato removido com sucesso!")
  };

  const startEdit = (contact) => {
    setContactToEdit(contact);
    setActiveScreen('form');
  };

  const showCreateForm = () => {
    setContactToEdit(null);
    setActiveScreen('form');
  };

  const handleNavigate = (screen) => {
    if(screen === 'logout'){
      setIsLoggedIn(false)
    }else{
      setActiveScreen(screen)
    }
  };

  if (!isLoggedIn){
    return <Login onLogin={handleLogin}/>
   }

   return(
    <div className="app-container">
      <Menu onNavigate={handleNavigate} onCreate={showCreateForm}/>
      <main className="content">
        {activeScreen === 'welcome' && <Welcome/>}
        {activeScreen === 'list' && <ContactList contacts={contacts} onEdit={startEdit} onDelete={handleDeleteContact}/>}
        {activeScreen === 'form' && <ContactForm contactToEdit={contactToEdit} onSave={handleSaveContact}/>}
      </main>
    </div>
   )
}export default App;