$(document).ready(function() {
  $("#blanks form").submit(function() {
    var usernameInput = $("input#user-name").val();

    $("#myName").text(usernameInput);

    $("#confirmation").show();

    event.preventDefault();
  });
});
