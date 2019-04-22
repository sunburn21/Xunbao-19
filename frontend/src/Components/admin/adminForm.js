import React, { Component } from 'react';
import axios from 'axios';
import { history } from '../../Router/AppRouter'

export default class AdminForm extends Component {
  state = {
    email: "",
    password: ""
  }
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState((state) => (
      {
        email
      }
    ))
  };
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState((state) => (
      {
        password
      }
    ))
  };

  onSubmit = (e) => {
    e.preventDefault();
    const admin = { ...this.state };
    axios.post('http://localhost:4000/api/app/getAdminToken', admin)
      .then((res) => {
        localStorage.setItem('adminToken', res.data.token);
        console.log(localStorage.getItem('adminToken'));
        history.push('/question');
      })
      .catch((err) => {
        console.log(err);
      })

  }
  render() {
    return (
      <div>
        <h1>Admin Form!</h1>
        <input placeholder="email" type="email" name="" id="" value={this.state.email} onChange={this.onEmailChange} />
        <input placeholder="password" type="password" name="" id="" value={this.state.password} onChange={this.onPasswordChange} />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    )
  }
}