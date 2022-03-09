function getUrl(){
    const urlParams = new URLSearchParams(window.location.search);
    const login = urlParams.get('login');
    
    if(login == 'false'){
        alert('Invalid Username or Password...!')
    }
}