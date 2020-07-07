import React from 'react';

import './styles/PageError.css';
import Error503 from '../images/503.svg';

function PageError(props) {
  return (
    <div className="PageError">
      {props.error.message}
      <img src={Error503} alt="Error 503" />
    </div>
  );
}

export default PageError;
