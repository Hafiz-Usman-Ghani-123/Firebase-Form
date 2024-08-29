import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "./firebase/app.js";
//redirect to sign in page onclick
document.querySelector("#signinBtn").addEventListener('click',()=>{
    location.href = './loginForm/login.html'
})
//redirect to sign up page onclick
document.querySelector("#signupBtn").addEventListener('click', ()=>{
    location.href = "./SignupForm/signup.html";

});

// By Google Authenticatoin  code ------------------------------------------------------------------------
//
const auth = getAuth();
const provider = new GoogleAuthProvider();
document.getElementById("withGoogle").addEventListener("click", () => { 

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        window.location.href = "../MainFiles/index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Toastify({
          text: errorMessage,
          position: "center", // `left`, `center`
          className: "info",
          style: {
            background: "#fc3232", //red
            //  background: "rgb(50, 204, 236)",
          },
        }).showToast();
      });
  //
});
//   console.log(withGoogle, "click");

