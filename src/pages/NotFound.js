import React from 'react';

import './styles/NotFound.css';
import logo404 from '../images/404.svg';
import logoOps from '../images/comienzo.svg';

function NotFound() {
  return (
    <div className="contenedor">
      <div className="error">
        <div className="ops">OoPs!</div>
        <p className="ops__title">Lo sentimos, la ruta solicitada no existe</p>
        <img className="ops__logo" src={logoOps} alt="Logo Ops" />
        <p className="ops__description">
          Verifique nuevamente para poder continuar
        </p>
      </div>
      <div className="container__404">
        <img className="logo404" src={logo404} alt="Error 404" />
      </div>
    </div>
  );
}

export default NotFound;
