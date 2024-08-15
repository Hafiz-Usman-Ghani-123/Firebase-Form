import { getAuth, signOut } from "../firebase/app.js";

const logoutbtn = document.querySelector(".logout");
logoutbtn.addEventListener("click", () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
    //   Toastify({
    //     text: "Sign-out successful !!",
    //     position: "center", // `left`, `center`
    //     className: "info",
    //     style: {
    //       background: "rgb(50, 204, 236)",
    //     },
    //   }).showToast();
      window.location.href = "../loginForm/index.html";
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
