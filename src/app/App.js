import { Component } from 'react';

import Footer from './Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';
import './App.css';
import HomePage from '../components/HomePage';
import AddPet from '../components/AddPet';
import Gallery from '../components/Gallery';
import AboutUs from '../components/AboutUs';
import SignUp from '../components/SignUp';
// Sign
// Pet Form
//PHG
// About Us
export default class App extends Component {
  state = {
    token: localStorage.getItem('TOKEN') || ''
  }

handleTokenChange = token => {
  localStorage.setItem('TOKEN', token);
  this.setState({ token: token });
}

logout = () => {
  localStorage.clear();
  this.setState({ token: '' });
}

render() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Paw-Star</h1>
          <nav>
            <NavLink exact activeClassName='active' to ='/'>Home</NavLink>
            <NavLink exact activeClassName='active' to ='/addpet'>Add Pet</NavLink>
            <NavLink exact activeClassName='active' to ='/gallery'>Gallery</NavLink>
            <NavLink exact activeClassName='active' to ='/aboutus'>About</NavLink>
            <NavLink exact activeClassName='active' to ='/signup'>Sign Up</NavLink>
            {this.state.token && <span className='logout' onClick={this.logout}>Logout</span>}

          </nav>
        </header>
        <main>

          <Switch>
            <Route path="/" exact={true}
              render={routerProps => (
                <HomePage 
                  handleTokenChange={this.handleTokenChange}
                  {...routerProps}/>
              )}
            />

            <Route path="/addpet" exact={true}
              render={routerProps => 
                  //if there is a token
                this.state.token ?
                  //pass the token to addpet
                  <AddPet
                    token={this.state.token}
                    {...routerProps}/>
                  //else redirect to signup (homepage)
                  : <Redirect to='/'/>
              }
            />
            <Route 
              path="/gallery" 
              exact={true}
              render={routerProps => 
                  //if there is a token
                this.state.token ?
                  //pass the token to the gallery page
                  <Gallery 
                    token={this.state.token}
                    {...routerProps}/>
                  //else redirect to signup (homepage)
                  : <Redirect to='/'/>
              }
            />
            <Route path="/aboutus" exact={true}
              render={routerProps => (
                <AboutUs {...routerProps}/>
              )}
            />
            <Route path="/signup" exact={true}
              render={routerProps => (
                <SignUp
                  handleTokenChange={this.handleTokenChange}
                  {...routerProps}/>
              )}
            />
          </Switch>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

}

// export default App;
