$(document).ready(function(){





   var firstname;
   var lastname;
   var email;
   var password;
   var description;











$("form#planner-detail").submit(function(event){
   event.preventDefault();

   firstname=$("#firstname").val();
   console.log(firstname);
   lastname=$("#lastname").val();
   email=$("#emailinput").val();
   password =$("#passwordinput").val();
   description=$("#descriptioninput").val();

   // display(firstname,lastname,email)

   alert("anything");
});



function display(){

  
   
   $(".first-name").text(firstname);
   $(".last-name").text(lastname);
   $(".email").text(email);
   $(".desc").text(description);
   alert("firstname");

   // window.location="file:///home/tracy/Documents/moringa-school-projects/hafla/list.html";





   // $(".user-name").text(password);
};
// var name="tracy";

// $(".user-name").text(name);

// $(".user-name").text(firstname);
// console.log(firstname);

// $(".user-name").text(lastname);
// $(".user-name").text(email);
// $(".user-name").text(password);



});