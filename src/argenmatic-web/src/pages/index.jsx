import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";

const Webpages = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
};
export default Webpages;