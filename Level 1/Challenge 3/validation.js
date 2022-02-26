// We need to target all the elements that we need events on

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit',(e) => {
    e.preventDefault();
    checkInputs();
  });



function checkInputs(){
  //get values from the inputs
  const usernameValue=username.value.trim()
  const emailValue=email.value.trim()
  const passwordValue=password.value.trim()
  const password2Value=password2.value.trim()

  // Handling username field
  if(usernameValue === ''){
    // show error
    // add error class
    setErrorFor(username, 'Username cannot be blank');
  }
  else{
    //add success class
    setSuccessFor(username);
  }

  // Handling email field
  if(emailValue === ''){
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isValidEmail(emailValue)){
    setErrorFor(email, 'Email is not valid')

  }else{
    setSuccessFor(email);
  }

  // Handling password field
  if(passwordValue === ''){
    setErrorFor(password, 'Password cannot be empty');
  }else if(passwordValue.length <= 8){
    setErrorFor(password,'Password too short')
  }else{
    setSuccessFor(password);
  }

  // Handling password check field
  if(password2Value === ''){
    setErrorFor(password2, 'Confirm your password!');
  }else if(passwordValue !== password2Value){
    setErrorFor(password2, 'Passwords do not match')
  }else{
    setSuccessFor(password);
  }
}


function setErrorFor(input, message){
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector('small');

  //add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input){
  const formControl = input.parentElement; //.form-control

  // add success class
  formControl.className = 'form-control success';
}

function isValidEmail(email){
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
