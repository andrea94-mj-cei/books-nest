import '/src/css/LandingPage.css';
import {Button} from '../components/Button.jsx';
import bookIcon from '../assets/book-icon.svg';

const LandingPage = () => {
    return (
        <>
            <div className="Landing-contenedor">
                <div className="Landing-contenido">
                <img src={bookIcon} alt="Book Icon" className="BookIcon" />
                    <h1 className='Landing-h1'>Comparte y descubre libros con tus vecinos</h1>
                    <p className='Landing-p'>
                        Encuentra libros cerca de ti, préstalos o solicita uno y enriquece tu comunidad lectora.
                    </p>
                    <Button>Buscar libros</Button>
                </div>
            </div>
        </>
    );
}

export default LandingPage;