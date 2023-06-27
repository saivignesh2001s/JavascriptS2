document.body.style.backgroundColor="#FFB6C1" ;
 document.forms["myform"]["fname"].required=true;
  document.forms["myform"]["lname"].required=true;
  document.forms["myform"]["email"].required=true;
  document.forms["myform"]["mobile"].required=true;
  document.forms["myform"]["password"].required=true;
  document.forms["myform"]["confirmpass"].required=true;
function validateForm(){
  var uname=document.forms["myform"]["fname"].value;
  var gname=document.forms["myform"]["lname"].value;
  var mobilenum=document.forms["myform"]["mobile"].value;
  var mail=document.forms["myform"]["email"].value;
  var passw=document.forms["myform"]["password"].value;
  var con=document.forms["myform"]["confirmpass"].value;
  var ant=document.querySelectorAll('input[name=trued]:checked')
  if(uname.length<10 && gname.length<10){
    alert("The length is less than 10");
    return false;
    }else if(!(ValidateEmail(mail))){
      alert("You have entered an invalid email address!")
      return false;
    }
    else if(mobilenum.length<10||mobilenum.length>10){
    alert("Mobile number invalid");
    return false;
  }else if(passw.length<8){
    alert("Password invalid");
    return false;
  }else if(con!=passw){
    alert("Password not matched");
    return false;
  }else if(ant.length==0){
    document.getElementById("net").style.visibility='visible';
    return false;
  }
 
}
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}
  
  

