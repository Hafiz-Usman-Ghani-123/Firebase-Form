import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult,
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
      Toastify({
        text: "Account Has Been Loged In 👍",
        position: "center", // `left`, `center`
        className: "info",
        style: {
          background: "rgb(50, 204, 236)",
        },
      }).showToast();
      setTimeout(() => {
        window.location.href = "../MainFiles/index.html";
      }, 1000);
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

// // By Google Authenticatoin  code ------------------------------------------------------------------------
// //
// const provider = new GoogleAuthProvider();
// const withGoogle = document.querySelector(".withGoogle");
// withGoogle.addEventListener("click", () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       window.location.href = "../loginForm/login.html";
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       Toastify({
//         text: errorMessage,
//         position: "center", // `left`, `center`
//         className: "info",
//         style: {
//           background: "#fc3232", //red
//           //  background: "rgb(50, 204, 236)",
//         },
//       }).showToast();
//     });
//   // //
// });
