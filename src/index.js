import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

// ReactDOM.render(Badge, container); // Cuando NOOOO tiene < > es un componente
// Pero a react render hay que darle un elemento, asi que
ReactDOM.render(<Badge />, container);
