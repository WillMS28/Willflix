import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css';
import Button from '../Button';
import {Link} from 'react-router-dom'
//import ButtonLink from '../ButtonLink';

function Menu() {
    return (
        <nav className = "Menu">
            <Link to ="/">
                <img className = "Logo"  src = {Logo} alt="Willflix logo"/>
            </Link>

            <Button as={Link} className = "ButtonLink" to = "/cadastro/Video">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu