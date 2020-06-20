import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
import fotoPerfil from '../images/perfil.jpeg';
import logoTwitter from '../images/logoTwitter.svg';

class Badge extends React.Component {
  // Define el resultado que vamos a ver en pantalla
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo Conferencia" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src={fotoPerfil} alt="Avatar" />
          <h1>
            Alberto <br />
            López
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <h4>
            <img src={logoTwitter} alt="Logo Twitter" />
            @lopezx2
          </h4>
        </div>
        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
