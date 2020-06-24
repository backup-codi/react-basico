import React from 'react';

class BadgeForm extends React.Component {
  // Para poder usar value={this.state.firstName} en los input se debe declarar e inicializar el state
  // con el fin de que el input no guarde los valores
  // Se recomienda que solo el state maneje la informacion a manipular
  state = {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  };

  handleChange = (e) => {
    // Para guardar la informacion en el estado usamos setState y se le pasa un objeto con la informacion que
    // deseamos guardar
    this.setState({
      // firstName: e.target.value,
      // Para guardar el valor dependiendo el nombre del input usamos
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    console.log('Button was clicked');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.firstName}
            />
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.state.lastName}
            />
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
            />
            <label>Job Title</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.state.jobTitle}
            />
            <label>Twitter</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.state.twitter}
            />

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
