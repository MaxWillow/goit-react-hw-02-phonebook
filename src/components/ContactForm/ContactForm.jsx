import React, { Component } from 'react';
import T from 'prop-types';

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: T.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAddContact } = this.props;

    onAddContact(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name
          <input id="name" value={name} onChange={this.handleChange} />
        </label>
        <label htmlFor="number">
          Number
          <input
            id="number"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="0xx-xxx-xx-xx"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
