import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import modelS from "./components/modelS";
import model3 from "./components/model3";
import modelX from "./components/modelX";
import modelY from "./components/modelY";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Support from "./components/Support";
import Contact from "./components/Contact";
import Lineup from "./components/Lineup";
import Utilities from "./components/Utilities";
import Upcoming from "./components/Upcoming";
import Account from "./components/Account";
import Cybertruck from "./components/Cybertruck";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                timeout={450}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path="/" component={LandingPage}></Route>
                  <Route exact path="/modelS" component={modelS}></Route>
                  <Route exact path="/model3" component={model3}></Route>
                  <Route exact path="/modelX" component={modelX}></Route>
                  <Route exact path="/modelY" component={modelY}></Route>
                  <Route exact path="/support" component={Support}></Route>
                  <Route exact path="/contact" component={Contact}></Route>
                  <Route exact path="/login" component={Login}></Route>
                  <Route exact path="/signup" component={SignUp}></Route>
                  <Route exact path="/lineup" component={Lineup}></Route>
                  <Route exact path="/upcoming" component={Upcoming}></Route>
                  <Route exact path="/utilities" component={Utilities}></Route>
                  <Route
                    exact
                    path="/upcoming/cybertruck"
                    component={Cybertruck}
                  ></Route>
                  <PrivateRoute
                    exact
                    path="/myaccount"
                    component={Account}
                  ></PrivateRoute>
                  {/* <img src={tire} className='rotate' alt='tire'></img> */}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
