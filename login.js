let signUpRedirect =document.getElementById('signUpRedirect');
let loginBtn =document.getElementById('loginBtn');
let email = document.getElementById('email')
let password = document.getElementById('password')

let accounts = JSON.parse(localStorage.getItem('accounts'))
console.log(accounts)


loginBtn.addEventListener('click', function (){
    let wrongEmail = true;
    let wrongPassword = false;
    for (let i =0; i<accounts.length; i++){
        if(email.value === accounts[i].email){
            wrongEmail = false;
            if(password.value !== accounts[i].password){
                wrongPassword = true;
            } else {
                localStorage.setItem('isLoggedIn', 'true')
                localStorage.setItem('name', accounts[i].name)
                window.location.href = 'homePage/home.html'
                email.value = ''
                password.value = ''
                return;
            }
        }
    }
    if (wrongEmail) {
        window.alert('Wrong Email')
    } else if (wrongPassword) {
        window.alert('Wrong Password')
    }
})

signUpRedirect.addEventListener("click", function (){
    window.location.href = 'signUpPage/signup.html'
})