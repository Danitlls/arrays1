// back-end






// front-end
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();

    // get elements for the array from the inputs

    var produce = [ $('input[name="item-one"]').val(),
                    $('input[name="item-two"]').val(),
                    $('input[name="item-three"]').val(),
                    $('input[name="item-four"]').val(),
                    $('input[name="item-five"]').val(), ];


    var capValues = produce.map(function(item){
      // return $("input#" + item).val().toUpperCase();
      });

    var sortedValues = capValues.sort();

    sortedValues.forEach(function(item){
      $("#form1").hide();
      $("#grocerie-list").append("<li>" + item + "</li>");
    });


    // var lastValue =
    //   $("." + item).text(totalItems)

  });
});
// console.log(totalItems);




    // var list = produce.map(function(item){
    //   return item.toUpperCase();
    // });


    //
    // var totalllll = totalItems.map(function(valor){
    // return valor.toUpperCase();
