let loginRedirect = document.getElementById('signInRedirect')
let emailRegexCheck = document.getElementById('emailRegexCheck');
let passwordRegexCheck = document.getElementById('passwordRegexCheck');

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?_-])[a-zA-Z\d!@#$%^&*?_-]{8,}$/;

let signUpBtn = document.getElementById('signUp');

let name = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')

let registeredAccounts = JSON.parse(localStorage.getItem('accounts')) || []
let account = {
    name: String,
    email: String,
    password: String,
}



loginRedirect.addEventListener('click',function (){
    window.location.href = '../index.html'
})

email.addEventListener('keyup',validateEmail)
password.addEventListener('keyup',validatePassword)

signUpBtn.addEventListener('click', function () {
    if (validateEmail()=== true && validatePassword()=== true ) {
       if (!isEmailInUse(email.value)){
           account = {
               name: name.value,
               email: email.value,
               password: password.value
           }
           registeredAccounts.push (account);
           localStorage.setItem('accounts' ,JSON.stringify(registeredAccounts) )
           email.value =''
           password.value = ''
           window.location.href = '../index.html'

       } else
           window.alert('Email already exists!')
    }
})




function validateEmail () {
    if(!emailRegex.test(email.value)){
        emailRegexCheck.innerHTML = `Enter valid email`
        emailRegexCheck.style.color = 'red'
        return false
    }
    else
        emailRegexCheck.innerHTML = ``
        return true

}

function validatePassword () {
    if (!passwordRegex.test(password.value)){
        passwordRegexCheck.style.color ='red'
        passwordRegexCheck.innerHTML = 'Password should have at least one lowercase letter, one uppercase letter,' +
            ' one digit, one symbol, and a minimum length of 8 characters. '
        return false
    }
    else passwordRegexCheck.innerHTML = ``
    return  true
}


function isEmailInUse(email) {
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    for (let i = 0; i < accounts.length; i++) {
        if (email === accounts[i].email) {
            return true;
        }
    }
    return false;
}




