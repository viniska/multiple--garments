import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "antd";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Login.css"

function ForgotPass() {
  let navigate = useNavigate();
  return (
    <>
      <div
        className="fpass"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Card
          className="card1"
          style={{
            width: "100%",
            maxWidth: "400px",
            boxShadow: "0 35px 45px rgba(0, 0, 0, 0.35)",
          }}
        >
          <div className="inside-card">
            <h1>Forgot Password</h1>

            <Typography variant="h2"> Enter your Email ID</Typography>
            <TextField
              placeholder="email address"
              sx={{ width: 250 }}
            ></TextField>

            <br />
            <Button
              variant="contained"
              sx={{
                ":hover": { boxShadow: 20 },
                width: 250,
                border: "0.1px solid black",
              }}
              onClick={() =>navigate("/rpassword") }
            >
              Send Reset Code
            </Button>
            <br />
            <br />
          </div>
        </Card>
      </div>
    </>
  );
}

export default ForgotPass;
