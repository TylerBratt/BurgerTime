import './App.css';
import React, { useState, Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from "react-router-dom";
import axios from 'axios'
import SocialFollow from "./SocialFollow"
import useApplicationData from './hooks/useApplicationData'
// import useApplicationData from './hooks/useApplicationData'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Burger from './components/Burger'
import Burgers from './components/Burgers'
import Restaurants from './components/Restaurants'
import Restaurant from './components/Restaurant'
import Favourites from './components/Favourites'
import Searchbar from './components/Searchbar'
import About from './components/About'
import AddBurger from './components/AddBurger'
// import BurgerNavbar from './components/Navbar'
// import Burger from './components/Burger'
// import Restaurant from './components/Restaurant'

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

    // const { state, dispatch } = useApplicationData();
    // const [currentView, setCurrentView] = useState('')
    // const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>));
    // const extburgerList = state.extburgers.map((extburger) =>(<li key={extburger.id}> {extburger.name} {extburger.restaurant}</li>));
  
  render() {
  
    return (
      
      <div>

        <Router>
          <Switch>
            {/* <BurgerNavbar /> */}
            {/* <ul> {userList} </ul>
            <ul> {extburgerList} </ul> */}
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/burgers' component={Burgers}/>
            <Route exact path='/restaurants' component={Restaurants}/>
            <Route exact path='/restaurants/burger/:id' component={Burger}/>
            <Route exact path='/restaurants/restaurant/:id/:lat/:long' component={Restaurant}/>
            <Route exact path='/favourites' component={Favourites}/>
            <Route exact path='/search' component={Searchbar}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/addBurger' component={AddBurger}/>

          </Switch>
        </Router>
        <SocialFollow />
      </div>
    );
  }
}
export default App;
