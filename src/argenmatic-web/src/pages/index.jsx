import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";

  const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {HomePage} />
            <Route path = "/login" component = {LoginPage} />
        </Router>
    );
};
export default Webpages;