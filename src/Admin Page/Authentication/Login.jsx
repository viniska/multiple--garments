import React from "react";
import { Container, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from "./LoginForm";
import { motion } from "framer-motion";

const RootStyle = styled("div")({
  backgroundImage: "url(https://images.pexels.com/photos/7134986/pexels-photo-7134986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", 
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Login = ({ setAuth }) => {
  return (
    <RootStyle>
      <Container
        maxWidth="sm"
        sx={{ boxShadow: "0 35px 45px rgba(0, 0, 0, 0.35)", borderRadius: "15px 116px",backgroundColor: "#00ffff5c" }}
      >
        <ContentStyle sx={{ boxShadow: "0 35px 45px rgba(0, 0, 0, 0.35)", background:"#5418c9b5", }}>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Typography>
              <h1>Admin Login</h1>
            </Typography>
          </HeadingStyle>

          <LoginForm setAuth={setAuth} />
          <br />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;
