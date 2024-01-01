if (localStorage.getItem('isLoggedIn') === 'false') {
    window.location.href = 'index.html'; // Redirect to login page
}
let name = document.getElementById('name')
let logoutBtn = document.getElementById('logoutBtn')
let userName = localStorage.getItem('name')

name.innerHTML = userName;


logoutBtn.addEventListener('click', function (){
    localStorage.setItem('isLoggedIn' ,'false')
    localStorage.setItem('name', '')
    window.location.href = 'index.html'
})