import About from "./About";
import "./App.css";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Nav />
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/About">
              <About />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </main>
    </div>
  );
}

export default App;
