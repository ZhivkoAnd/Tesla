import React, { useCallback } from "react";
import { withRouter } from "react-router";
import FirebaseConfig from "./Firebase";
import { Link } from "react-router-dom";
import Header from "./Header";
import { motion } from "framer-motion";
import Footer from "./Footer";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await FirebaseConfig.auth().createUserWithEmailAndPassword(
          email.value,
          password.value
        );
        // If the registration is complete, the history object will redirect us to the main page
        // without reloading, that why we needed ({history as a prop})
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <>
      <div className="page">
        <div className="background backgroundSignup">
          <Header />
          <div className="upper">
            <div className="letter">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="modelh" style={{ marginLeft: "5px" }}>
                  Sign Up
                </h1>
              </motion.div>
            </div>
          </div>

          <div className="container signupcont">
            <form onSubmit={handleSignUp} className="signup">
              <label>
                Email<br></br>
                <input name="email" type="email" placeholder="Email" />
              </label>
              <label>
                Password<br></br>
                <input name="password" type="password" placeholder="Password" />
              </label>
              <button type="submit">Sign Up</button>
            </form>

            <div className="footer">
              <Footer></Footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(SignUp);
