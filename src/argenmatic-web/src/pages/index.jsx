import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";

const Webpages = () => {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="*" component={ErrorPage} />
    </Router>
  );
};
export default Webpages;