function getUrl(){
    const urlParams = new URLSearchParams(window.location.search);
    const Param = urlParams.get('login');
    
    if(Param == 'false'){
        alert('Invalid Username or Password...!')
    }
}

function getUrl2(){
    const urlParams = new URLSearchParams(window.location.search);
    const Param = urlParams.get('authentication');
    
    if(Param == 'false'){
        alert('Non Authenticate...! \nPlease Login...!')
    }
}