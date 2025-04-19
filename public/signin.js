const signUpButton=document.getElementById('signUpButton1');
const signInButton=document.getElementById('signInButton1');
const signInForm=document.getElementById('signIn1');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})