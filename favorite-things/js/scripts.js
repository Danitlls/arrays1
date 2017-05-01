// var array11 = function(thing1, thing2) {
//   var a = thing1.concat(thing2) ;
// }

var totalArray = function(thing1, thing2) {
  return thing1 , thing2
}

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();

  var favoriteThings = ["fav-one", "fav-two"]

  favoriteThings.forEach(function(test){
    var userInput = $("input#" + test).val();
    $("#test").text(userInput)
  });

  // if ( favoriteThings === ) {
  //   $("#test").show();
  // } else {
  //   $("#fail").show();
  // }
console.log(favoriteThings.indexOf());
  });

});
