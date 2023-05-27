import './App.css'
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import Abaut from './components/abaut/About';
import Detail from './components/Detail/Detail';
import Form from './components/form/form';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';



//const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
//const API_KEY = 'aa4428c5a60d.112cdc34e04dbdd267cd';
const URL = 'http://localhost:3001/rickandmorty/login/';


   function App() {
      const [characters, setCharacters] = useState([]);
      const { pathname } = useLocation()

      const navigate = useNavigate();
      const [access, setAccess] = useState(false);

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         
         setAccess(access);
         access && navigate('/home');
         
      
      } catch (error) {
         console.log(error.massage);
      }

   }  
   
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);


   const onSearch = async (id) => {
      try {
         const { data } = await  axios(`http://localhost:3001/rickandmorty/character/${id}`)

         if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
         }

      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
      }
}

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }
   

   return (
      <div >
         {
            pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />
         }
         <Routes>
           <Route path='/'element={<Form login={login} />}/>
           <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
           <Route path='/About'element={<Abaut/>}/>
           <Route path='/detail/:id'element={<Detail/>}/>
           <Route path='/favorites' element={<Favorites/>} />
         </Routes>
         
      </div>
   );
}

export default App;