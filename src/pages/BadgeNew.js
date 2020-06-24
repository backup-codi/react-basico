import React from 'react';

import './styles/BadgeNew.css';
import logoHeader from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logoHeader} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Alberto"
                lastName="López"
                twitter="alberto27"
                jobTitle="Engineer"
                avatarUrl="https://i.postimg.cc/fL2xYmYD/persona.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
