import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "../firebase/app.js";
//
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const btn = document.querySelector(".loginBtn");
const forgetPass = document.querySelector("#forgetPass");
// console.log(forgetPass);

const auth = getAuth();
btn.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, email.value, pass.value)
    .then((userCredential) => {
      const user = userCredential.user;
      //   Toastify({
      //     text: "Account Has Been Loged In 👍",
      //     position: "center", // `left`, `center`
      //     className: "info",
      //     style: {
      //       background: "rgb(50, 204, 236)",
      //     },
      //   }).showToast();
      window.location.href = "../MainFiles/index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      Toastify({
        text: "Please Enter Right Email or Password ✖️", //❌
        position: "center", // `left`, `center`
        className: "info",
        style: {
          //   background: "#fc3232", //red
          background: "rgb(50, 204, 236)",
        },
      }).showToast();
    });
});
// 
// forget btn code ------------------------------------------------------------------------
// 
forgetPass.addEventListener("click", () => {
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      // Password reset email sent!
      Toastify({
        text: "Password Reset Email Sent, Check Your Gmail !! ",
        position: "center", // `left`, `center`
        className: "info",
        style: {
          //   background: "#fc3232", //red
          background: "rgb(50, 204, 236)",
        },
      }).showToast();
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Toastify({
        text: "Please Enter Valid Email !! ",
        position: "center", // `left`, `center`
        className: "info",
        style: {
          background: "#fc3232", //red
          //  background: "rgb(50, 204, 236)",
        },
      }).showToast();
      // ..
    });
});
