import React, { useCallback } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router";
import FirebaseConfig from "./Firebase";
import { Link } from "react-router-dom";
import Header from "./Header";
import { motion } from "framer-motion";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  paper: {
    /* border: 1px solid black; */
    display: "flex",
    padding: "25px",
    marginTop: "0",
    alignItems: "center",
    borderRadius: "5px",
    flexDirection: "column",
    background: "#f3f3f370;",
    // boxShadow: '13px 13px 46px #ededed', '-13px -13px 46px #ffffff',
    border: "1px solid #c2c2c2",
  },
  avatar: {
    margin: theme.spacing(0, 0, 2),
    backgroundColor: "#f5c518",
    color: "#121212",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

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

  const classes = useStyles();

  return (
    <>
      <div className="page">
        <div className="background backgroundSignup">
          <div className="sexy">
            <Header />
          </div>
          <div className="upper">
            <div className="letter">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="signuphead">Sign Up</h1>
              </motion.div>
            </div>
          </div>

          <div className="container signupcont">
            <Container component="main" maxWidth="xs" className="formwrap">
              <CssBaseline />
              <div className={classes.paper}>
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={handleSignUp}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        style={{ marginBottom: "-5px" }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                    </Grid>
                    {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Create Account
                  </Button>
                  <Grid container justify="center">
                    <Grid item>
                      <Link to="/login" variant="body2">
                        Already have an account? Sign in !
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Container>

            <div className="footer" style={{ position: "absolute" }}>
              <Footer></Footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(SignUp);
