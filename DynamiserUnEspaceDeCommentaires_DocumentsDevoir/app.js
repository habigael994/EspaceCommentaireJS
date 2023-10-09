 
  
function value1() {
 let a = document.forms["f1"]["first-name"].value;
 return a;
 }
 function value2() {
 let b = document.forms["f1"]["last-name"].value;
 return b;
 }
 function value3() {
 let c = document.forms["f1"]["message"].value;
 return c;
 }
 function validateForm1() {
  let t = 0 
  let x = document.forms["f1"]["first-name"].value;
  if (x == "") {
    ShowError();
    t += 1;
  }
   else if (x == 0){
    ShowError();
    t += 1;
   }   
  
   else { noError();  
  }
  console.log(document.forms["f1"]["first-name"].value);
  console.log(t);
  return t;
}
function validateForm2() {
  let t = 0 
  let x = document.forms["f1"]["last-name"].value;
  if (x == "") {
    ShowError();
    t += 1;
  }
   else if (x == 0){
    ShowError();
    t += 1;
   }   
  
   else { noError();  
  }
  console.log(document.forms["f1"]["last-name"].value);
  console.log(t);
  return t;
}
function validateForm3() {
  let t = 0 
  let x = document.forms["f1"]["message"].value;
  if (x == "") {
    ShowError();
    t += 1;
  }
   else if (x == 0){
    ShowError();
    t += 1;
   }   
   else if (x.length > 500){
    ShowError();
    t += 1;
   }   
   else { noError();  
  }
  console.log(document.forms["f1"]["message"].value);
  console.log(t);
  return t;
}
  function ShowError() {
  let x = document.getElementById("error-message");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
}
function noError() {
  let x = document.getElementById("error-message");
  if (x.style.display === "block") {
    x.style.display = "none";
  } 
}
function postComment(){
  let nameValue = value1()+" "+value2();
  let messageValue = value3();
  let zone = document.getElementById("comment-list");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let comment  = document.createElement("div");
  let name = document.createElement("h3");
  let message = document.createElement("p");
  let displayName = document.createTextNode(nameValue);
  let displayMessage = document.createTextNode(messageValue)
  let form = document.querySelectorAll("form")
  name.className = "font-medium text-gray-900";
  message.className = "prose prose-sm mt-4 max-w-none text-gray-500";
  div1.className = "flex space-x-4 text-sm text-gray-500";
  div2.className = "flex-1 py-10 border-t border-gray-200";
  name.appendChild(displayName);
  message.appendChild(displayMessage);
  comment.appendChild(message);
  div2.appendChild(name);
  div2.appendChild(comment);
  div1.appendChild(div2);
  zone.appendChild(div1);
}
function validateForm(){

  let name = validateForm1();
  let lname = validateForm2();
  let message = validateForm3();

  if (name + lname + message != 0) { 
    ShowError();
  }
    else {
      postComment();
  } 
}

 
 
   


