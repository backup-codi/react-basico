import React from 'react';

import twitter from '../images/logoTwitter.svg';
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <div className="BadgesList">
        <ul>
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id} className="BadgesListItem">
                <Link
                  className="text-reset text-decoration-none"
                  to={`/badges/${badge.id}/edit`}
                >
                  <span className="info">
                    <h5 className="font-weight-bold">
                      {badge.firstName} {badge.lastName}
                    </h5>

                    <p>{badge.jobTitle}</p>
                    <p className="text-primary">
                      <img
                        className="logoTwitter"
                        src={twitter}
                        alt="Logo Twitter"
                      />
                      @{badge.twitter}
                    </p>
                  </span>
                  <Gravatar
                    className="BadgesListItem__avatar"
                    email={badge.email}
                    alt="Avatar"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
