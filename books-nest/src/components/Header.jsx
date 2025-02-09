import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import headerLogo from '../assets/header-logo.svg';

export const Header = () => {



    return (
        <>
            <header className="Header">
                <img src={headerLogo} alt="Header-logo" className='Header-logo' />
                    <nav>
                        <ul className="Header-ul">
                        <li><NavLink to="/" className="Header-li"><b>Inicio</b></NavLink></li>
                        <li><NavLink to="buscador" className="Header-li"><b>Buscador de libros</b></NavLink></li>
                        <li><NavLink to="registro" className="Header-li"><b>Registro</b></NavLink></li>
                        <li><NavLink to="perfil" className="Header-li"><b>Mi perfil</b></NavLink></li>
                        </ul>
                    </nav>
            </header>
        </>
    );
}