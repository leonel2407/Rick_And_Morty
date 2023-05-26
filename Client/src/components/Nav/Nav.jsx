import style from "./Nav.module.css";
import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';

const Nav = ({ onSearch, setAccess }) => {
    const handleLogOut = () => {
        setAccess(false);
    }

    return (
        <nav className={style.nav}>
            <div className={style.btns}>
            <SearchBar onSearch={onSearch}/>
            <button className={style.boton}><NavLink to='/About' >About</NavLink></button>
            <button className={style.boton}><NavLink to='/home' >Home</NavLink></button>
            <button className={style.boton}><NavLink to='/favorites'>Favorites</NavLink></button>
            <button className={style.boton} onClick={handleLogOut}>LOG OUT</button>

            </div>

        </nav>
    )
}

export default Nav;