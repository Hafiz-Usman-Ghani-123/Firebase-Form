import { getAuth, createUserWithEmailAndPassword } from "../firebase/app.js";
//
const sEmail = document.querySelector("#email");
const sPass = document.querySelector("#password");
const sBtn = document.querySelector(".signupBtn");
// console.log(sBtn, sEmail, sPass);
sBtn.addEventListener("click", () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, sEmail.value, sPass.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      Toastify({
        text: "Your Account Has Been Created !!",
        position: "center", // `left`, `center`
        className: "info",
        style: {
          background: "rgb(50, 204, 236)",
        },
      }).showToast();
      window.location.href = '../loginForm/index.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Toastify({
        text: "Invalid Email or Password !!",
        position: "center", // `left`, `center`
        className: "info",
        style: {
          background: "rgb(50, 204, 236)",
        },
      }).showToast();
      // ..
    });
});
