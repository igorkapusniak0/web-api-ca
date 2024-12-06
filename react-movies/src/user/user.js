import { getMoviePlaylist, getShowPlaylist } from "../api/db-api";


var userName = "";
var email = "";
var showPlaylist = null;
var moviePlaylist = null;
var login = false


export function setlogin(data){
    if (data){
        login = data;
        
    }else{
        userName = "";
        email = "";
        showPlaylist = null;
        moviePlaylist = null;
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

export function setEmail(data){
    email = data;
}

export function getEmail(){
    return email;
}

export async function setMoviePlaylist() {
    const result = await getMoviePlaylist(email); 
    if (result) {
        moviePlaylist = result.data;
        console.log(moviePlaylist); 
    }
    else {
        console.log(result)
    }
}


export function getMoviePlayList(){
    return moviePlaylist;
}

export function setShowPlaylist(){
    showPlaylist = getShowPlaylist(email).data;
}

export function getShowPlayList(){
    return showPlaylist;
}

