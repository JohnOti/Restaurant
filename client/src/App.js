import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            
          </ul>
        </nav>
        <Switch>
          <Route path="/about"><About /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
