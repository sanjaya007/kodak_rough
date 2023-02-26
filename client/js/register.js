const setData = () => {
  return {
    firstname: $("#firstname").val(),
    lastname: $("#lastname").val(),
    username: $("#username").val(),
    email: $("#email").val(),
    password: $("#password").val(),
    confirmPassword: $("#confirmPassword").val(),
    birthdate: $("#birthdate").val(),
    gender: $("#gender").val(),
    contact: $("#contact").val(),
  };
};

const allowedFileTypes = ["png", "jpg", "jpeg", "JPG", "JPEG", "PNG"];
$("#profileImage").on("change", function (e) {
  e.preventDefault();
  const file = $(this)[0].files[0];
  if (allowedFileTypes.indexOf(file.type.replace("image/", "")) >= 0) {
    var reader = new FileReader();
    reader.onload = function () {
      var dataURL = reader.result;
      $("#profileImage").attr("src", dataURL);
    };
    reader.readAsDataURL(file);
  } else {
    alert("yo");
  }
});

const addUser = (e) => {
  e.preventDefault();
  showAlert();
  postData(hostUrl + "/users", setData(), function (data) {
    console.log(data);
    showAlert(data.status, data.message);
  });
};

$("#registerBtn").on("click", addUser);
