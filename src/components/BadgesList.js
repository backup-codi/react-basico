import React from 'react';

import twitter from '../images/logoTwitter.svg';
import './styles/BadgesList.css';

class BadgesList extends React.Component {
  render() {
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
