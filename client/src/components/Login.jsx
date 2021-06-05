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