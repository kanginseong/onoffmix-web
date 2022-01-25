import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Detail from "./screens/Detail";
import Apply from "./screens/Apply";
import Open from "./screens/Open";
import Manage from "./screens/Manage";
import GroupRegi from "./screens/GroupRegi";
import MemberRegi from "./screens/MemberRegi";

export const isLoggedIn = localStorage.getItem("TOKEN");

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/detail" render={props => <Detail {...props} />}></Route>
          <Route path="/apply" render={props => <Apply {...props} />}></Route>
          <Route path="/open">
            <Open />
          </Route>
          <Switch>
            <Route path="/manage" exact>
              <Manage />
            </Route>
            <Route
              path="/manage/regigroup"
              exact
              render={props => <GroupRegi {...props} />}
            ></Route>
            <Route
              path="/manage/regigroup/member"
              render={props => <MemberRegi {...props} />}
            ></Route>
          </Switch>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
