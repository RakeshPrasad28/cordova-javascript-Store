const signIn = () => {
  window.location.replace("login.html");
};

const validateForm = () => {
  const Email = document.getElementById("inputEmail1").value.trim();
  const Username = document.getElementById("inputUsername").value.trim();
  const Password = document.getElementById("inputPassword1").value;
  let user_info = new Array();
  user_info = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_info.some((user) => {
      return user.Email === Email;
    })
  ) {
    alert("Email already registered");
  } else {
    user_info.push({
      Email: Email,
      Username: Username,
      Password: Password,
    });
    localStorage.setItem("users", JSON.stringify(user_info));
    window.location.pathname = "login.html";
  }
};
