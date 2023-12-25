let loginemail= document.getElementById("login_email");
let loginpass = document.getElementById("login_pass");

let signupname = document.getElementById("signup-name");
let signupemail = document.getElementById("signup-email");
let signuppass = document.getElementById("signup-pass");


// to say welcome in home page
var username = localStorage.getItem('sessionUsername')
if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username
}

var SignUpArray =[];
if(localStorage.getItem('users')!=null)
{
    SignUpArray=JSON.parse(localStorage.getItem("users"));
}
else{
    SignUpArray=[];
}

function isItEmpty(){
    if (signupname.value == "" || signupemail.value == "" || signuppass.value == "") {
        return false
    } else {
        return true
    }
}
function ifExist(){
   for(const i of SignUpArray){
    if(i.email.toLowerCase()==signupemail.value.toLowerCase()){
        return false;
    }
   }
}
function SignUpA(){
    const loginPage = document.getElementById("login-page");
    const signupPage = document.getElementById("signup-page");
    const homepage = document.getElementById("homepage");

    loginPage.classList.add("d-none");
    signupPage.classList.remove("d-none");
    homepage.classList.add("d-none");
}
 function SignIn() {
    const loginPage = document.getElementById("login-page");
    const signupPage = document.getElementById("signup-page");
    const homepage = document.getElementById("homepage");

    loginPage.classList.remove("d-none");
    signupPage.classList.add("d-none");
    homepage.classList.add("d-none");
    }

function SignUp(){
   
    if (isItEmpty() == false) {
        document.getElementById('done').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
   var signup={
    name:signupname.value,
    email:signupemail.value,
    pass:signuppass.value
   } ;
   if(SignUpArray.length==0){
    SignUpArray.push(signup);
    localStorage.setItem("users",JSON.stringify(SignUpArray));
    document.getElementById('done').innerHTML = '<span class="text-success m-3">Success</span>';
   }
   if (ifExist() == false) {
    document.getElementById('done').innerHTML = '<span class="text-danger m-3">email already exists</span>'

} else {
    SignUpArray.push(signup);
    localStorage.setItem('users', JSON.stringify(SignUpArray));
    document.getElementById('done').innerHTML = '<span class="text-success m-3">Success</span>';

}

}

function isItloginEmpty(){
    if (loginemail.value == "" || loginpass.value == "") {
        return false
    } else {
        return true
    }
}
function Login(){

    if (isItloginEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var password = loginpass.value
    var email = loginemail.value
    for (const i of SignUpArray) {
        if (i.email.toLowerCase() == email.toLowerCase() && i.pass.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('sessionUsername', i.name)
            const loginPage = document.getElementById("login-page");
            const signupPage = document.getElementById("signup-page");
            const homepage = document.getElementById("homepage");
            const nav= document.getElementById("nav");
        
            loginPage.classList.add("d-none");
            signupPage.classList.add("d-none");
            homepage.classList.remove("d-none");
            nav.classList.remove("d-none");
        }
         else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }
}
// for logout
function logout() {
    localStorage.removeItem('sessionUsername');
    const loginPage = document.getElementById("login-page");
            const signupPage = document.getElementById("signup-page");
            const homepage = document.getElementById("homepage");
            const nav= document.getElementById("nav");
        
            loginPage.classList.add("d-none");
            signupPage.classList.remove("d-none");
            homepage.classList.add("d-none");
            nav.classList.add("d-none");
}