// const element = document.createElement('h1');
// element.innerText = 'Hola, Platzi badges 2';
// const container = document.getElementById('app');
// container.appendChild(element);

import React from 'react'; //Sera el analogo a createElement
import ReactDOM from 'react-dom'; // Sera el analogo a appendChild

const container = document.getElementById('app');
const element = <h1>Hello, Platzi 2 update</h1>; // Esto es JSX, y para poder utilizarlo SIEMPREEEEE hay que importar 'react'

ReactDOM.render(element, container); // Primer dato que queremos renderizar y el segundo es donde lo queremos renderizar
