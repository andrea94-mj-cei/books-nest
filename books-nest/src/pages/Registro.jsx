import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Form.css';
import { Button } from '../components/Button';


const Registro = () => {
    const [formData, setFormData]= useState({
        username: "",
        password:"",
        name: "",
        tyc: false, 
    });

    
    const handleChange = (e) =>{
        const {name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type == "checkbox" ? checked : value
        });
    };
    
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("../perfil") 
        console.log(formData);
    };

    return ( 
        <>
        <form className='Form-registro' onSubmit={handleSubmit}>
        <h2 className='Form-h2'>Regístrate</h2>
        

        <input onChange={handleChange} value={formData.name} type="text" name="name" placeholder='Escribe tu nombre' />
        <input onChange={handleChange} value={formData.username} type="email" name="username" placeholder="Escribe tu email" />
        <input onChange={handleChange} value={formData.password} type="password" name="password" placeholder="Escribe tu contraseña" />
        
        <label ><input className='Input-chekbox' type='checkbox' onChange={handleChange} name="tyc" checked={formData.tyc}/>Acepto los terminos y condiciones</label>

        {formData.tyc ? <Button>Registro</Button>
                      : <Button disabled >Acepte los términos y condiciones</Button>  }
        
        

        </form>
        </>
     );
}
 
export default Registro;