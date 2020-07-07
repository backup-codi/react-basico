import React from 'react';

import './styles/Badge.css';
import Gravatar from './Gravatar';

import confLogo from '../images/badge-header.svg';
import logoTwitter from '../images/logoTwitter.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo Conferencia" />
        </div>
        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br />
            {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <h4>
            <img src={logoTwitter} alt="Logo Twitter" />@{this.props.twitter}
          </h4>
        </div>
        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
