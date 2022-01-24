import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Detail from "./screens/Detail";
import Apply from "./screens/Apply";
import Open from "./screens/Open";
import Manage from "./screens/Manage";

export const isLoggedIn = localStorage.getItem("TOKEN");

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
          <Route path="/detail" render={props => <Detail {...props} />}></Route>
          <Route path="/apply" render={props => <Apply {...props} />}></Route>
          <Route path="/open">
            <Open />
          </Route>
          <Route path="/manage">
            <Manage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
