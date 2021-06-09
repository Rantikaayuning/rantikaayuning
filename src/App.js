import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Header />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            {/* <Route exact path='/about' component={ProfilePage}/>
            <Route exact path='/projects' component={ProjectsPage}/> */}
          </Switch>
      </Router>
    </>
  );
}

export default App;
