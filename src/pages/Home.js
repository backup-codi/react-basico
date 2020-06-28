import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import logoPlatziconf from '../images/platziconf-logo.svg';
import logoAstronauts from '../images/astronauts.svg';

function Home() {
  return (
    <div className="container__home">
      <div className="home__description">
        <img src={logoPlatziconf} alt="Logo Platziconf" />
        <p className="home__description-title">Print your badges</p>
        <p className="home__description-text">
          The easiest way to manage you conference
        </p>
        <Link className="btn btn-primary" to="/badges">
          Start Now
        </Link>
      </div>
      <div className="home__logo">
        <img src={logoAstronauts} alt="Logo Astronauts" />
      </div>
    </div>
  );
}
export default Home;
