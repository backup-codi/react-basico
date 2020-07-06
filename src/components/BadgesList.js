import React from 'react';

import twitter from '../images/logoTwitter.svg';
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';

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
                <img
                  className="BadgesListItem__avatar"
                  src={badge.avatarUrl}
                  alt="Avatar"
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
