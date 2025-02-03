import headerLogo from '../assets/header-logo.svg';

export const Header = () => {



    return (
        <>
            <header className="Header">
                <img src={headerLogo} alt="Header-logo" className='Header-logo' />
                    <nav>
                        <ul className="Header-ul">
                            <li className='Header-li'>Home</li>
                            <li className='Header-li'>Buscador</li>
                            <li className='Header-li'>Registro</li>
                            <li className='Header-li'>Mi perfil</li>
                        </ul>
                    </nav>
            </header>
        </>
    );
}