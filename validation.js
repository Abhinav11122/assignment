var email = document.getElementById('field1');
var err1 = document.getElementById('err1');
var phno=document.getElementById('field2');
var err2=document.getElementById('err2')
var pwd= document.getElementById('field3');
var err3 = document.getElementById('err3');

var regex =/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/

var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;

function validateEmail(){
   //alert("clicked")
  if(email.value.trim()==''){
    err1.innerText="field cannot be empty";
    email.style.border='5px solid red';
    return false
  }
  else if(!email.value.match(regex)){
    err1.innerText="Email is not in correct format";
    email.style.border='5px solid red';
    return false

  }
  else{
    err1.innerText="";
    email.style.border='6px solid green'
    return true
  }

}
  function validatePhone()
{
  
  if((phno.value.match(phoneno)))
        {
          err2.innerText=""
          phno.style.border='5px solid green';
      return true;
        }
      else
        {
        err2.innerText='inncorrect format';
        phno.style.border='5px solid red';
        return false;
        }
}
function validatePass() 
{ 
if(pwd.value.match(passw)) 
{ 
err3.innerText=""
pwd.style.border='4px solid green'
return true;
}
else
{ 
pwd.style.border='4px solid red'
err3.innerText="password must minimum 8 characters, at least one uppercase,and one lower case, must contain at least one number"
return false;
}
} 

function verify(){
  if(!validateEmail()||!validatePhone()||!validatePass()){
    return false
  }
  else{
    return true
  }
}