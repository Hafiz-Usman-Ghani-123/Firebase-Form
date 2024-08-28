import { getAuth, signOut, onAuthStateChanged } from "../firebase/app.js";
const auth = getAuth();

//
// logout
//
const logoutbtn = document.querySelector(".logout");
logoutbtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => { 
      window.location.href = "../index.html";
    })
    .catch((error) => {
      Toastify({
        text: "Sign-out successful !!",
        position: "center", // `left`, `center`
        className: "info",
        style: {
          background: "rgb(50, 204, 236)",
        },
      }).showToast();
    });
});
////
//// onAuthStateChanged
////
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    const useremail = user.email;
    console.log("user Sign in hy");
    // window.location.href = 'index.html'
    // userEmail
    const userEmailDiv = document.querySelector(".userEmail");
    userEmailDiv.innerHTML = `Welcome To ${useremail}`;
    // ...
  } else {
    // User is signed out
    console.log("user Sign in nahi hy");
    window.location.href = "../index.html";
    // ...
  }
});
