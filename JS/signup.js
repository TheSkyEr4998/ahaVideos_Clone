
    document.querySelector("form").addEventListener("submit", submitFunc);

    document.querySelector("#mobile").addEventListener("click", submitFunc1);
    document.querySelector("#facebook").addEventListener("click", submitFunc2);
    document.querySelector("#google").addEventListener("click", submitFunc3);


    var email = document.getElementById("email").value;

var span = document.createElement("span");
span.innerText = "Enter Password:";
var pass = document.createElement("input");
pass.setAttribute("type","password");
pass.setAttribute("placeholder","Password")
pass.setAttribute("id","pass")


document.querySelector(".inputBox").append(span,pass)





    function submitFunc(){

     event.preventDefault();

   

     var email = document.getElementById("email").value ;
     var pass = document.getElementById("pass").value;


if(email == ""|| pass == ""){
    alert("enter details");
}else{
    alert("You are successfully logged in")
    var arr = JSON.parse(localStorage.getItem("data"))|| [];

var user = {
email: email,
pass: pass,

}
arr.push(user);
localStorage.setItem("data", JSON.stringify(arr));

window.location.href = "index.html"
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