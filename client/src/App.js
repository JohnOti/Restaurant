import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
