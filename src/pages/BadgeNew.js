import React from 'react';

import './styles/BadgeNew.css';
import logoHeader from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

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
            <div className="col-7">
              <Badge
                firstName="Alberto"
                lastName="López"
                twitter="alberto27"
                jobTitle="Engineer"
                avatarUrl="https://www.gravatar.com/avatar/580a552f26ac5e3a0817c3ecc5b9d690?d=identicon"
              />
            </div>
            <div className="col-5">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
