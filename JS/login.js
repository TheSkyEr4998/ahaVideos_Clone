
    document.querySelector("form").addEventListener("submit", submitFunc);

    document.querySelector("#mobile").addEventListener("click", submitFunc1);
    document.querySelector("#facebook").addEventListener("click", submitFunc2);
    document.querySelector("#google").addEventListener("click", submitFunc3);



    function submitFunc(){
     event.preventDefault();

     var email = document.getElementById("email").value;

     var detail = JSON.parse(localStorage.getItem("data")) || [];
     var check = false;
    
if(email == ""){
  window.location.href = "SignUp.html"
}


     detail.filter(function (elem) {
      if (elem.email == email) {
     
      }
      if (elem.email == email) {
        check = true;
      }
      else {
        check = false;
      }
    })
    if (check) {
      alert("You are successfully logged in")
      window.location.href = "index.html";
    }
    else {
      if (check == false) {
        alert("Email Does Not found, Please SIGN-UP First");
        window.location.href = "SignUp.html";
      }
      else {
        alert("Wrong Credentials Entered");
      }
    }

   




    
  
    }
    function submitFunc1(){
        alert("yes its mobile")
    }

  function submitFunc2(){
window.location.href = "https://www.facebook.com/"

  }
  function submitFunc3(){
    window.location.href = "https://www.google.com/"
  }