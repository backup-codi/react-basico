import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(
  <Badge
    firstName="Alberto"
    lastName="López"
    avatarUrl="https://i.postimg.cc/MTMjx2KJ/perfil.jpg"
    jobTitle="Frontend Engineer"
    twitter="alberto_27"
  />,
  container
);
