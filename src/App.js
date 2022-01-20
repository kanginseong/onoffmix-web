import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";

function App() {
    const isLoggedIn = false;
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        {isLoggedIn ? <Home /> : <Login />}
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
