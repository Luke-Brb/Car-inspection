import { AuthErrorCodes } from "firebase/auth";
import { App } from "./App";

export const txtEmail = document.querySelector("#txtEmail");
export const txtPassword = document.querySelector("#txtPassword");

export const btnLogin = document.querySelector("#btnLogin");
export const btnSignup = document.querySelector("#btnSignup");

export const btnLogout = document.querySelector("#btnLogout");

export const divAuthState = document.querySelector("#divAuthState");
export const lblAuthState = document.querySelector("#lblAuthState");

export const divLoginError = document.querySelector("#divLoginError");
export const lblLoginErrorMessage = document.querySelector(
  "#lblLoginErrorMessage"
);

export const showLoginForm = () => {
  btnLogin.style.display = "block";
  app.style.display = "none";
};

export const showApp = () => {
  btnLogin.style.display = "none";
  app.style.display = "block";
};

export const hideLoginError = () => {
  if (divLoginError) {
    divLoginError.style.display = "none";
    lblLoginErrorMessage.innerHTML = "";
  } else {
    console.error("divLoginError element not found");
  }
};
export const showLoginError = () => {
  divLoginError.style.display = "block";
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    lblLoginErrorMessage.innerHTML = "Wrong password. Try again.";
  } else {
    lblLoginErrorMessage.innerHTML = "Error: ${error.message}";
  }
};

export const showLoginState = (user) => {
  lblAuthState.innerHTML =
    "You are logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email})";
};

hideLoginError();

export const ui = {
  txtEmail,
  txtPassword,
  btnLogin,
  btnSignup,
  btnLogout,
  divAuthState,
  lblAuthState,
  divLoginError,
  lblLoginErrorMessage,
};
