import React from 'react';
import ReactDOM from 'react-dom';

import './styles/BadgeDetails.css';
import LogoConfetencia from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';

function BadgeDetails(props) {
  const badge = props.badge;
  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={LogoConfetencia} alt="Logo de conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
            />
          </div>
          <div className="col actions">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button className="btn btn-danger">Delete</button>
                {ReactDOM.createPortal(
                  <h1>Hola, realmente no estoy aqui</h1>,
                  document.getElementById('modal')
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetails;
