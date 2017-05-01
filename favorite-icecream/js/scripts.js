// BUISNESS LOGIC






// FRONT-END LOGIC
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var userFlavors = ["fav-one", "fav-two", "fav-three"]

    userFlavors.forEach(function(flavor){
      var userInput = $("#" + flavor).val();
      $("." + flavor).text(userInput);

    });
  });
});
