
//when user clicks "submit" to add a new burger
  $("#submit").on("click", function(event){
  //Prevent the page from reloading
    event.preventDefault();
  //grab the name data and store it as a vairable
    var burgerName = $("#burgerName").val().trim();
  //Set up an ajax POST method
  $.ajax("/api/burger", {
      type: "POST",
      data: burgerName
    }).then(function() {
      console.log("New Burger Added");
      location.reload();
    });
  });

//When user selects a burger and "devours" it
  $(".devour-it").on("click", function() {
//save data id associate with the clicked devour buttron as a variable
    var id = $(this).data("id")
//Send a PUT api request to change the devoured data on that burger
    $.ajax("/api/burger/" + id, {
      type: "PUT",
    }).then(function(){
      console.log("burger with id " + id +" has been updated");
      location.reload();
    });
  });
