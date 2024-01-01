let signUpRedirect =document.getElementById('signUpRedirect');
let loginBtn =document.getElementById('loginBtn');
let email = document.getElementById('email')
let password = document.getElementById('password')

let accounts = JSON.parse(localStorage.getItem('accounts'))
console.log(accounts)


loginBtn.addEventListener('click', function (){
    for (let i =0; i<accounts.length; i++){
        if(email.value === accounts[i].email
            && password.value === accounts[i].password){
            localStorage.setItem('isLoggedIn', 'true')
            localStorage.setItem('name', accounts[i].name)
            window.location.href = 'homePage/home.html'
            email.value = ''
            password.value = ''
        }
        else if (password.value !== accounts[i].password) {
            window.alert('Wrong Password')
        }
        else  if (email.value !== accounts[i].email){
            window.alert('Wrong Email')
        }
        else window.alert('Something went wrong')

    }
})



signUpRedirect.addEventListener("click", function (){
    window.location.href = 'signUpPage/signup.html'
})