import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <>
    <Header isRegister />
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form'>
          <input className='input' type='text' placeholder='Nombre' />
          <input className='input' type='text' placeholder='Correo' />
          <input className='input' type='password' placeholder='Contraseña' />
          <button className='button' type='button'>Registrarme</button>
        </form>
        <Link to='/login' className='register__container--login'>
          Iniciar sesión
        </Link>
      </section>
    </section>
  </>
);

export default Register;
