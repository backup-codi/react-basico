import React from 'react';

import confLogo from '../images/badge-header.svg';
import fotoPerfil from '../images/perfil.jpeg';

class Badge extends React.Component {
  // Define el resultado que vamos a ver en pantalla
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo Conferencia" />
        </div>
        <div>
          <img src={fotoPerfil} alt="Avatar" />
          <h1>
            Alberto <br />
            Lopez
          </h1>
        </div>
        <div>
          <p>Frontend Engineer</p>
          <p>@lopezx2</p>
        </div>
        <div>#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
