window.onload = function () {
  var r = new XMLHttpRequest();
  r.open("POST", "/test", true);
  r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return;
    var result = JSON.parse(r.response);
    alert(result.result);
  };
  r.send();
};
