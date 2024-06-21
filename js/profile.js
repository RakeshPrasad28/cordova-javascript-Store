const logout = () => {
  localStorage.removeItem("currUser");
  window.location.replace("login.html");
};

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// let app = {
//   init: function () {
//     document.getElementById("btn").addEventListener("click", app.takephoto);
//   },
//   takephoto: function () {
//     let opts = {
//       quality: 80,
//       destinationType: Camera.DestinationType.FILE_URI,
//       sourceType: Camera.PictureSourceType.CAMERA,
//       mediaType: Camera.MediaType.PICTURE,
//       encodingType: Camera.EncodingType.JPEG,
//       cameraDirection: Camera.Direction.BACK,
//       targetWidth: 300,
//       targetHeight: 400,
//     };
//     navigator.camera.getPicture(app.ftw, app.wtf, opts);
//   },
//   ftw: function (imgURI) {
//     document.getElementById("msg").textContent = imgURI;
//     document.getElementById("myImage").src = imgURI;
//   },
//   wtf: function (msg) {
//     document.getElementById("msg").textContent = msg;
//   },
// };
// document.addEventListener("deviceready", app.init);
