import User from "./pages/user";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Admin from "./pages/admin";
import ManageTrain from "./pages/trainAdd";
import EditTrains from "./pages/trainEdit";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route path="/admin/train/view">
            <EditTrains />
          </Route>
          <Route path="/admin/train/add">
            <ManageTrain />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
