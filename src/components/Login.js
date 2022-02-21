import React, { useCallback, useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { withRouter, Redirect } from "react-router";
import FirebaseConfig from "./Firebase";
import { AuthContext } from "./AuthContext";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import styled from "styled-components";

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

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await FirebaseConfig.auth().signInWithEmailAndPassword(
          email.value,
          password.value
        );
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="page">
        <LoginContainer>
          <HeaderContainer className="sexy">
            <Header />
          </HeaderContainer>

          <div className="upper">
            <div className="letter">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="signuphead">Sign In</h1>
              </motion.div>
            </div>
          </div>

          <LoginSecondaryContainer>
            <div className="container signupcont">
              <Container component="main" maxWidth="xs" className="formwrap">
                <CssBaseline />
                <div className={classes.paper}>
                  <form
                    className={classes.form}
                    noValidate
                    onSubmit={handleLogin}
                  >
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      style={{ marginBottom: "-5px" }}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Sign In
                    </Button>
                    <Grid container justify="center">
                      <Grid item>
                        <Link to="/signup" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </form>
                </div>
              </Container>
            </div>
          </LoginSecondaryContainer>
        </LoginContainer>
        <div className="footer">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);

const HeaderContainer = styled.div``;

const LoginContainer = styled.div`
  background-repeat: no-repeat fixed;
  background-color: whitesmoke;
  background-position: center;
  width: 100vw;
  height: 100vh;
  transition: 0.5s;
  background-size: cover;
  z-index: 3;
  text-align: center;
  display: flex;
  justify-content: center;

  .icons-main {
    height: 30px;
  }
`;

const LoginSecondaryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .icons-main {
    height: 30px;
  }
`;
