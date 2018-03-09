
//when user clicks "submit" to add a new donut
  $("#submit").on("click", function(event){
    console.log("clicked");
  //Prevent the page from reloading
    event.preventDefault();
  //grab the name data and store it as a vairable
    var donutName = $("#donutName").val().trim();
    var newdonut = {
      donut_name: donutName
    }
  //Set up an ajax POST method
  $.ajax("/api/donut", {
      type: "POST",
      data: newdonut
    }).then(function() {
      console.log("New donut Added");
      location.reload();
    });
  });

//When user selects a donut and "devours" it
  $(".devour-it").on("click", function() {
    console.log("clicked");
//save data id associate with the clicked devour buttron as a variable
    var id = $(this).data("id")
    console.log(id);
//Send a PUT api request to change the devoured data on that donut
    $.ajax("/api/donut/" + id, {
      type: "PUT",
    }).then(function(){
      console.log("donut with id " + id +" has been updated");
      location.reload();
    });
  });
