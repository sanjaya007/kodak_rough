const showAlert = () => {
  $("#alertBox").removeClass("hidden");
  $("#alertBox").addClass("show");
  $("#alertBox").addClass("alert-init");
  setTimeout(function () {
    $("#alertBox").removeClass("show");
    $("#alertBox").addClass("hidden");
  }, 5000);
};

const hideAlert = () => {
  $("#alertBox").removeClass("show");
  $("#alertBox").addClass("hidden");
};

$("#alertClose").on("click", hideAlert);
