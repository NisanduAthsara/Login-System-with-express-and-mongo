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

function display(){
    const logout_tag = document.querySelector('#logout-tag')
    const urlParams = new URLSearchParams(window.location.search);
    const Param = urlParams.get('logout');

    if(Param == 'true'){
        logout_tag.style.display = 'block'
    }
}

function display2(){
    const err_tag1 = document.querySelector('#err-tag1')
    const err_tag2 = document.querySelector('#err-tag2')
    const err_tag3 = document.querySelector('#err-tag3')
    const err_tag4 = document.querySelector('#err-tag4')
    const err_tag5 = document.querySelector('#err-tag5')
    const err_tag6 = document.querySelector('#err-tag6')

    const suc_tag7 = document.querySelector('#suc-tag1')

    const urlParams = new URLSearchParams(window.location.search);

    const Param1 = urlParams.get('usernameVal');
    const Param2 = urlParams.get('usernameLen');
    const Param3 = urlParams.get('emailVal');
    const Param4 = urlParams.get('passVal');
    const Param5 = urlParams.get('passLen');
    const Param6 = urlParams.get('emailUse');

    const Param7 = urlParams.get('useradd');

    if(Param1 == 'false'){
        err_tag1.style.display = 'block'
    }
    if(Param2 == 'false'){
        err_tag2.style.display = 'block'
    }
    if(Param3 == 'false'){
        err_tag3.style.display = 'block'
    }
    if(Param4 == 'false'){
        err_tag4.style.display = 'block'
    }
    if(Param5 == 'false'){
        err_tag5.style.display = 'block'
    }
    if(Param6 == 'true'){
        err_tag6.style.display = 'block'
    }
    if(Param7 == 'true'){
        suc_tag7.style.display = 'block'
    }
}