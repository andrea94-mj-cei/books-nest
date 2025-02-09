import { createBrowserRouter } from "react-router-dom";

//páginas
import LandingPage from "../pages/LandingPage";
import BuscadorLibros from "../pages/BuscadorLibros";
import Registro from "../pages/Registro";
import MiPerfil from "../pages/MiPerfil";

//páginas especiales
import App from "../App";


const router = createBrowserRouter([{
    path: "/",
    element: <App />,

    children: [
        {
            index:true,
            element: <LandingPage />
        },
        {
            path: "buscador",
            element: <BuscadorLibros />
        },
        {
            path: "registro",
            element: <Registro />
        },
        {
            path: "perfil",
            element: <MiPerfil />
        }
    ]
}]);


export default router;

