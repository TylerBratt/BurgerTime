import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from "react-router-dom";
import axios from 'axios'
// import useApplicationData from './hooks/useApplicationData'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import BurgerNavbar from './components/Navbar'
// import Burger from './components/Burger'
// import AddBurger from './components/AddBurger'
// import Burgers from './components/Burgers'
// import Restaurant from './components/Restaurant'
// import Restaurants from './components/Restaurants'
// import Favourites from './components/Favourites'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
    };
  }
componentDidMount() {
  this.loginStatus()
}
loginStatus = () => {
    axios.get('http://localhost:3001/api/logged_in', 
    {withCredentials: true})    
.then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <BurgerNavbar />
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;