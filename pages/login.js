import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase";

import { TextField, Button } from "@mui/material";
import { useState } from "react";

const LoginDesktop = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <main
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#ededed",
          width: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 50,
          borderRadius: 5,
        }}
      >
        <TextField
          label="Email"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="small"
        />
        <TextField
          label="Password"
          margin="normal"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size="small"
        />
        <br />
        <Button
          size="large"
          variant="contained"
          fullWidth
          onClick={handleClick}
        >
          Login
        </Button>
      </div>
    </main>
  );
};

const Login = () => {
  return <LoginDesktop />;
};

export default Login;
