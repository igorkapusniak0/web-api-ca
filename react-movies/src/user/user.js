var userName = "";
var login = false

export function setlogin(data){
    if (data){
        login = data;
        
    }else{
        userName = "";
        login = false
    }
}

export function getLogin(){
    return login;
}

export function setUsername(data){
    userName = data;
    console.log("username",userName)
}

export function getUsername(){
    console.log("username",userName)
    return userName;
}



