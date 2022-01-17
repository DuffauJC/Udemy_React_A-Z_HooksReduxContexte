import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import NotFound from './components/Notfound/NotFound';
import NavBar from './components/Navbar/NavBar';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profil/:id' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
     </Routes>
    </div>
  );
}

export default App;
