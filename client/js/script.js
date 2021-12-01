var t;

const checkStatus = (status, message) => {
  if (status === "warning") {
    $("#alertBox").removeClass("danger-alert");
    $("#alertBox").removeClass("success-alert");
    $("#alertBox").addClass("warning-alert");
  } else if (status === "error") {
    $("#alertBox").removeClass("success-alert");
    $("#alertBox").removeClass("warning-alert");
    $("#alertBox").addClass("danger-alert");
  } else if (status === "success") {
    $("#alertBox").removeClass("warning-alert");
    $("#alertBox").removeClass("danger-alert");
    $("#alertBox").addClass("success-alert");
  } else {
    $("#alertBox").removeClass("warning-alert");
    $("#alertBox").removeClass("danger-alert");
    $("#alertBox").removeClass("success-alert");
  }
  $("#alertMessage p").text(message);
};

const showAlert = (status, message) => {
  clearTimeout(t);
  $("#alertBox").removeClass("hidden");
  $("#alertBox").addClass("show");
  $("#alertBox").addClass("alert-init");
  checkStatus(status, message);
  t = setTimeout(function () {
    $("#alertBox").removeClass("show");
    $("#alertBox").addClass("hidden");
  }, 5000);
};

const hideAlert = () => {
  $("#alertBox").removeClass("show");
  $("#alertBox").addClass("hidden");
};

$("#alertClose").on("click", hideAlert);
