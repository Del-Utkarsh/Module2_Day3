function checkForm(){
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    if(username.length>0 && password.length>0)
    {
        if(username.length>5 && password.length>7)
        {
            alert("Login Successful.")
        }
        else if(username=="Admin" && password=="Admin123"){
            alert("Admin login successful.")
        }
        else{
            alert("Invalid Credentials. Try again.")
        }
    }
    else{
        alert("Invalid Credentials.")
    }
}