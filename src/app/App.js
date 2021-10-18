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
// Sign
// Pet Form
//PHG
// About Us
class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <h1>Paw-Star</h1>
            <nav>
              <NavLink exact activeClassName='active' to ='/'>Home</NavLink>
              <NavLink exact activeClassName='active' to ='/addpet'>Add Your Pet</NavLink>
              <NavLink exact activeClassName='active' to ='/gallery'>Gallery</NavLink>
              <NavLink exact activeClassName='active' to ='/aboutus'>About the Team</NavLink>
            </nav>
          </header>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <HomePage {...routerProps}/>
                )}
              />

              <Route path="/addpet" exact={true}
                render={routerProps => (
                  <AddPet {...routerProps}/>
                )}
              />
              <Route path="/gallery" exact={true}
                render={routerProps => (
                  <Gallery {...routerProps}/>
                )}
              />
              <Route path="/aboutus" exact={true}
                render={routerProps => (
                  <AboutUs {...routerProps}/>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
