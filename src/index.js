import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <h1>Hello, Platzi 2 update</h1>;
// const element = React.createElement('a', { href: 'https://platzi.com' }, 'Ir a platzi');
const name = 'Lopez';
const sum = () => 3 + 3;

//la forma de hacerlo con React
// const element = React.createElement('h1', {}, `Hola! soy ${name}`);

// La forma de hacerlo con JSX
//Dentro de jsx se admiten expresiones - 2+2   -  functiones
// Si llegaran a ser false (null, string vacio, false, cero, undefine) NO SE VAN A VER
// const jsx = <h1>Hola soy {undefined}</h1>;

const jsx = (
  <div>
    <h1>Hola soy Alberto</h1>
    <p>Y soy ingeniero Frontend</p>
  </div>
);
const element = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, `Hola Soy Alberto`),
  React.createElement('p', {}, `Soy ingeniero Frontend de la web`)
);

const container = document.getElementById('app');

ReactDOM.render(element, container);
