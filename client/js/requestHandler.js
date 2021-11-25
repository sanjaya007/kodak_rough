const hostUrl = "http://127.0.0.1:7000";

const getData = (url, successCb) => {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: url,
    success: successCb,
  });
};

const postData = (url, data, successCb) => {
  $.ajax({
    type: "POST",
    dataType: "json",
    url: url,
    data: data,
    success: successCb,
  });
};
