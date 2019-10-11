$(document).ready(function(){

  $('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  });

  $("button").click(function(){
    $("trial").show();
  });



  function UserLogin(userLogin, passLogin){
    this.userLogin = userLogin;
    this.passLogin = passLogin;
  }

  function UserSignup(userSignup,passSignup,emailSignup){
    this.userSignup=userSignup;
    this.passSignup=passSignup;
    this.emailSignup=emailSignup;
  }
  
$(".login-form").submit(function(event){

  event.preventDefault();
  var usernamelogin=$("#username-login").val();
  var passwordlogin=$("#password-login").val();

  var loginObj=new UserLogin(usernamelogin, passwordlogin);
  var arr=JSON.parse(localStorage.getItem("clientlogin")) || [];
  arr.push(loginObj);
  localStorage.setItem("clientlogin", JSON.stringify(arr));

  

  if (passwordlogin=="password"){
    alert("User verification successful");
  

    window.location="landing.html";
  }else{
    alert("Invalid login. Please try again");
    pass = "";

  };

});

  $(".signup").submit(function(event){
    event.preventDefault();

    var username=$("#username").val();
    var password=$("#password").val();
    var email=$("#email").val();

    var signupObj=new UserSignup(username,password,email);
    var arr=JSON.parse(localStorage.getItem("clientsignup")) || [];
    arr.push(signupObj);
    localStorage.setItem("clientsignup", JSON.stringify(arr));

    if(password !=""){
      alert ("User Sign Up Successful. Please Login");


    }else{
      alert("Please fill in all empty fields");
    }

    
  });

  

});


