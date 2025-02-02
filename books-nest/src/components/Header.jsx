import headerLogo from '../assets/header-logo.svg';

export const Header = () => {



    return (
        <>
            <header className="Header">
                <img src={headerLogo} alt="Header-logo" className='Header-logo' />
                    {/* <nav>
                        <ul className="Header-ul">
                            <li>Home</li>
                            <li>Buscador</li>
                            <li>Registro</li>
                            <li>Mi perfil</li>
                        </ul>
                    </nav> */}
            </header>
        </>
    );
}