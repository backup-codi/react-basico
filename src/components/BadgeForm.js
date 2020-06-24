import React from 'react';

class BadgeForm extends React.Component {
  // El metodo recibe un evento  - (e)
  handleChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };

  // Cuando se activa el evento de que se presiono el boton se imprime un mensaje
  handleClick = (e) => {
    console.log('Button was clicked');
  };

  // Esta es otra manera de impedir que el formulario se envie y se recarge la pagina.
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form was submitted');
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            {/* En un input cada que el usuario escribe algo de activa un evento onChange */}
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName" />
            {/* Para evitar que se recarge la pagina se puede usar el atributo type="button" ya que por default tiene el valor de submit */}
            <button onClick={this.handleClick} className="btn btn-primary mt-2">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
