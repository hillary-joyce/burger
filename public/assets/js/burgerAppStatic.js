
//when user clicks "submit" to add a new burger
  $("#submit").on("click", function(event){
    console.log("clicked");
  //Prevent the page from reloading
    event.preventDefault();
  //grab the name data and store it as a vairable
    var burgerName = $("#burgerName").val().trim();
    var newBurger = {
      burger_name: burgerName
    }
  //Set up an ajax POST method
  $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("New Burger Added");
      location.reload();
    });
  });

//When user selects a burger and "devours" it
  $(".devour-it").on("click", function() {
    console.log("clicked");
//save data id associate with the clicked devour buttron as a variable
    var id = $(this).data("id")
    console.log(id);
//Send a PUT api request to change the devoured data on that burger
    $.ajax("/api/burger/" + id, {
      type: "PUT",
    }).then(function(){
      console.log("burger with id " + id +" has been updated");
      location.reload();
    });
  });
