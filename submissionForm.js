function validateForm(){
  console.log("this is in validateForm")
  var isValid = true;

  var elements = document.getElementById('ss-form').getElementsByTagName('input');

  for(var i=0; i < elements.length; i++){
    if(elements[i].value.length < 1){
      isValid = false;
    }
  }

  if(isValid){
    document.getElementById('ss-form').submit();
  }
  else {
    alert('Please fill all required fields');
  }
}
var name
var lastName
var phoneNumber
var email
var homeAddress
var enterPassword
var repeatPassword
var enterHobbie

function changeForm(n,lN,pN,e,hA,eP,rP,eH){
  console.log("this is in changeForm")
  name=n
  lastName=lN
  phoneNumber=pN
  email=e
  homeAddress=hA
  enterPassword=eP
  repeatPassword=rP
  enterHobbie=eH
}
function jsonMaker(){
  //convert and output of json form
}
