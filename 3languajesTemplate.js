/*
Write a html, css and javascript web page that:

A submit form that takes the user:
	name, lastname
	phone number.
	email address.
	home address.
	password.
	secret question.
Then a button that once clicked checks if all fields were full, if so
It displays a json variable with all of the user information


Chose a grayish background color and be sure to user a title sizing, and just play with css to make it look somewhat pretty.
*/
<form action="/action_page.php">
  <div class="container">
    <label><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" required>
    <label><b>Last Name</b></label>
    <input type="text" placeholder="Enter last name" name="lastname" required>
    <label><b>Phone Number</b></label>
    <input type="text" placeholder="Enter phone number" name="phonenumber" required>
    <label><b>Email address</b></label>
    <input type="text" placeholder="Enter email address" name="email" required>
    <label><b>Home address</b></label>
    <input type="text" placeholder="Enter home addres" name="homeaddress" required>

    <label><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
    <label><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
    
    <label><b>Secret Question</b></label>
    <input type="text" placeholder="Enter hobbie" name="secret question" required>

    <div class="clearfix">
      <button type="button"  class="cancelbtn">Cancel</button> 
      <button type="submit" class="signupbtn">Sign Up</button onclick="validateForm()"/> 
    </div>
  </div>
</form>

//css
/* Full-width input fields */
body {background-color:rgb(200,200,200);}
input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

/* Set a style for all buttons */
button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

/* Extra styles for the cancel button */
.cancelbtn {
    padding: 14px 20px;
    background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn,.signupbtn {
    float: left;
    width: 50%;
}

/* Add padding to container elements */
.container {
    padding: 16px;
}

/* Clear floats */
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
    .cancelbtn, .signupbtn {
        width: 100%;
    }
}
//javascript
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
