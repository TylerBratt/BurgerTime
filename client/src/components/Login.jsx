import React from 'react'
import axios from 'axios'
import { Component } from 'react'
import {Link} from 'react-router-dom'
import BurgerNavbar from './Navbar';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: ''
    };
  }
  // const userObject = {
  //   user_id: 10,
  //   name: "Austin",
  //   token: 'd89has98dajkndhj3n'
  // };
  // localStorage.setItem('userObject', JSON.stringify(random));
  // localStorage.setItem('user_id', 10);
  // const user_id = localStorage.getItem('user_id');

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]:value
    })
  };
  handleSubmit = (event) => {
    event.preventDefault()
    const {email, password} = this.state
    let user = {
      email: email,
      password: password
    }
    
axios.post('http://localhost:3001/api/login', {user}, {withCredentials: true})
    .then(response => {
      const user = {
        id: response.data.user.id,
        full_name: response.data.user.first_name + ' ' + response.data.user.last_name,
        email: response.data.user.email,
        token: response.data.token
      }

      localStorage.setItem('userObject', JSON.stringify(user));

      console.log('response from login:', response)
      if (response.data.logged_in) {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };
redirect = () => {
    this.props.history.push('/')
  }
handleErrors = () => {
    return (
      <div>
        <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  };
  render(){
    const {email, password} = this.state
    
    return(
      <div>
        <BurgerNavbar />
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          
          <input
            placeholder='email'
            type="text"
            name='email'
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder='password'
            type="password"
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          <button placceholder='submit' type='submit'>Log In</button>
          <div>or <Link to='/register'>Register</Link></div>
        </form>
      </div>
    );
  }
}

export default Login;