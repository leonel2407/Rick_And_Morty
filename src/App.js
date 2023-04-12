
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import Abaut from './components/abaut/About';
import Detail from './components/Detail/Detail';
import Form from './components/form/form';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';



const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'aa4428c5a60d.112cdc34e04dbdd267cd';


   function App() {
      const [characters, setCharacters] = useState([]);
      const { pathname } = useLocation()

      const navigate = useNavigate();
      const [access, setAccess] = useState(false);
      const EMAIL = 'leonel@gmail.com';
      const PASSWORD = '123asd';

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   const onSearch = (id) => {
   axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }
   

   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
           <Route path='/'element={<Form login={login}/>}/>
           <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
           <Route path='/About'element={<Abaut/>}/>
           <Route path='/detail/:id'element={<Detail/>}/>
         </Routes>
         
      </div>
   );
}

export default App;