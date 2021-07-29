import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/manga-f8b68.appspot.com/o/uploads%2FNH-Agent_S_poster.png?alt=media&token=0906b6d7-d73f-4c15-9159-a0c6c41282f4"
          alt=""
        />
        <h1>Sign in</h1>
        <p>fwefewfe</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40;
  }

  >button{
      margin-top:50px;
      text-transform:inherit:!important;
      background-color:#0a8d48 !important;
      color:white;
  }
`;
