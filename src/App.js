import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import HomeNavbar from './components/Navbar';
import ProjectsPage from './pages/ProjectsPage';
import './index.css';

function App() {
  return (
    <>
      <Router>
        <HomeNavbar />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/about' component={ProfilePage}/>
            <Route exact path='/projects' component={ProjectsPage}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
