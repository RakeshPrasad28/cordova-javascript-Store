const signUp = () => {
  window.location.replace("register.html");
};

const validateForm = () => {
  const Email = document.getElementById("inputEmail").value.trim();
  const Password = document.getElementById("inputPassword").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_records.some((user) => {
      return user.Email === Email && user.Password === Password;
    })
  ) {
    alert("Login Successfull");
    let current_user = user_records.filter((info) => {
      return info.Email === Email && info.Password === Password;
    })[0];
    localStorage.setItem("currUser", current_user.Email);
    // window.location.replace("register.html");
  } else {
    alert("Invalid Credintials");
  }
};
const valUser = (localStorage.getItem("currUser"));
if (valUser) {
  window.location.replace("profile.html");
}
