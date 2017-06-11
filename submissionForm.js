function validateForm(){
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
