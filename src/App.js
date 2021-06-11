import './App.css';
import About from './components/About';
import Explore from './components/Explore';
import Landing from './components/Landing';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NotFound from './components/NotFound';

function App() {


  return (
    <div className="App">
      <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/Explore" component={Explore} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
