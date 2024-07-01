var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.Login-link');
const registerLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close')

registerLink.addEventListener ('click', ()=> {
  wrapper.classList.add('active');
})
loginLink.addEventListener ('click' , ()=> {
  wrapper.classList.remove('active');
})
btnpopup.addEventListener ('click',()=> {
  wrapper.classList.add('active-popup');
})
iconclose.addEventListener('click',()=>{
  wrapper.classList.remove('active-popup');
})
btnpopup.addEventListener('click',()=>{
  wrapper.style.display="flex";
})
iconclose.addEventListener('click',()=>{
  wrapper.style.display="none";
})

//register code
const Username = document.querySelector('.USER')
const register = document.querySelector('#register')
//code to reset the form
let check_availability = document.getElementById("check_availability");
function isUserNameAvailable(){
    //read the value of username
    if(localStorage.getItem(Username) != null){
        alert("Username is already occupied; please choose another");
        return false;
    }
    return true;
}
function isAvailable(){
    if(isUserNameAvailable()){
        alert("Username available; go ahead");
    }
}
check_availability.addEventListener('click', isAvailable);
//code to submit the form
register.addEventListener('submit', function(event){
    let fd = new FormData(event.target);
    if(isRegisterFormValidated(fd) && isUserNameAvailable()){
        //you are here means form is validated
        //covert FormData object to normal JS object
        let object = {};
        fd.forEach((value, key) => {
            object[key] = value;
        })
        //write object to local storage by using the username as key
        localStorage.setItem(object['Username'], JSON.stringify(object));
        alert("Registration Successfull");
        //code to make the form empty
        for(let i = 0; register.elements.length; i++){
            let element = register.elements[i];
            if(element.type == 'text' || element.type == 'password'){
                element.value = "";
            }
        }
    }
    event.preventDefault();
});
function isRegisterFormValidated(fd){
    let message = "";
    if(fd.get('Name').trim().length == 0){
        //you are here means no value for name
        message = "Please provide name";
    }
    if(fd.get('Username').trim().length == 0){
        //you are here means no value for username
        message != ""?(message+="\nPlease provide username"):(message = "Please provide username");
    }
    if(fd.get('Email').length == 0){
      //you are here means no value for password
      message != ""?(message+="\nPlease provide password"):(message = "Please provide password");
  }
    if(fd.get('Password').length == 0){
        //you are here means no value for password
        message != ""?(message+="\nPlease provide password"):(message = "Please provide password");
    }
    
    if(message != ""){
        alert(message);
        return false;
    }
    return true;
}

//login code

//code to access form having id "login" starts here
let loginForm = document.getElementById("login");
//code to submit the login form
loginForm.addEventListener('submit', function(event){
    //create FormData object for loginForm
    let fd = new FormData(event.target);
    //check if form is validated or not
    if(isLoginFormValidated(fd)){
        //You are here means form is validated
        //check if username exists in the local storage
        let userData = localStorage.getItem(fd.get("Username"));
        let isLoginSuccesssful = true;
        if(userData == null){
            //you are here means username doesn't exists
            isLoginSuccesssful = false;
        }else{
            //convert the userData to the object from String type
            userData = JSON.parse(userData)
            if(userData["password"] != loginForm.password.value){
                //you are here means password is incorrect
                isLoginSuccesssful = false;
            }
        }
        if(!isLoginSuccesssful){
            //you are here means username and password mismatched
            alert("Invalid username or password");
            event.preventDefault();
        }else{
            //you are here means username and password are valid
            alert("Login Successful");
            //write the name of logged in user to localstorage for the key 'loggedInUser'
            localStorage.setItem('loggedInUser', userData["Name"])
            //load a new page that is login protected and display some name of user there
            window.location.href = "postlogin.html";
        }
    }
    event.preventDefault();
})
function isLoginFormValidated(fd){
    let message = "";
    if(fd.get('Username').trim().length == 0){
        //you are here means no value for name
        message = "Please provide username";
    }
    if(fd.get('Password').length == 0){
        //you are here means no value for password
        message != ""?(message+="\nPlease provide password"):(message = "Please provide password");
    }
    if(message != ""){
        alert(message);
        return false;
    }
    return true;
}