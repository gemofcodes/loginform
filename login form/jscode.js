function validate()
{
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    var email= document.getElementById("email").value;
    if(username=="Misthi" || email=="testemail@gmail.com" && password=="password")
    {
        alert("login successfully");
        return false;
    }
    else
    {
        alert("login failed");
    }

}