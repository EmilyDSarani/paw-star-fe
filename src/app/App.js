import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';
import './App.css';
import Login from '../components/Login';
import Pets from '../components/Pets';
import Pawstrology from '../components/Pawstrology';
import AboutUs from '../components/AboutUs';
import SignUp from '../components/SignUp';

export default class App extends Component {
  state = {
    token: localStorage.getItem('TOKEN') || '',
    userSign: localStorage.getItem('USERSIGN') || '',
    userZip: localStorage.getItem('USERZIP') || ''
  }

handleTokenChange = token => {
  localStorage.setItem('TOKEN', token);
  this.setState({ token: token });
}

handleUserLsData = (sign, zipcode) => {
  localStorage.setItem('USERSIGN', sign);
  localStorage.setItem('USERZIP', zipcode);
}

logout = () => {
  localStorage.clear();
  this.setState({ 
    token: '',
    userSign: '',
    userZip: '' });
}

render() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Paw-Star</h1>
          <nav>
            {!this.state.token && <NavLink exact activeClassName='active' to ='/'>Login</NavLink>}
            <NavLink exact activeClassName='active' to ='/pets'>Pets</NavLink>
            <NavLink exact activeClassName='active' to ='/pawstrology'>Pawstrology</NavLink>
            <NavLink exact activeClassName='active' to ='/aboutus'>About</NavLink>
            {!this.state.token && <NavLink exact activeClassName='active' to ='/signup'>Sign Up</NavLink>}
            {this.state.token && <span className='logout' onClick={this.logout}>Logout</span>}

          </nav>
        </header>
        <main>

          <Switch>
            <Route path="/" exact={true}
              render={routerProps => (
                <Login 
                  handleTokenChange={this.handleTokenChange}
                  handleUserLsData={this.handleUserLsData}
                  {...routerProps}/>
              )}
            />

            <Route path="/pets" exact={true}
              render={routerProps => 
                  //if there is a token
                this.state.token ?
                  //pass the token to addpet
                  <Pets
                    token={this.state.token}
                    {...routerProps}/>
                  //else redirect to signup (homepage)
                  : <Redirect to='/'/>
              }
            />
            <Route 
              path="/pawstrology" 
              exact={true}
              render={routerProps => 
                  //if there is a token
                this.state.token ?
                  //pass the token to the gallery page
                  <Pawstrology 
                    userSign={this.state.userSign}
                    userZip={this.state.userZip}
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
                  handleUserLsData={this.handleUserLsData}
                  {...routerProps}/>
              )}
            />
          </Switch>
        </main>
        
      </Router>
    </div>
  );
}

}

// export default App;
