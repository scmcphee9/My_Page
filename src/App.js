import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import pdf from "./pages/assets/images/Shawn McPhee Website.pdf";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contactme" component={ContactMe} />
        <Route exact path="/resume" component={Resume} />
        <Route
          path="/GitHub"
          component={() => {
            window.location.href = "https://github.com/scmcphee9";
            return null;
          }}
        />
        <Route
          path="/LinkedIn"
          component={() => {
            window.location.href =
              "https://www.linkedin.com/in/shawn-mcphee-4a92731ab/";
            return null;
          }}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
