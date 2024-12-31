import { json } from "react-router-dom";

export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const setMoviePlaylist = async (username, moviePlaylist) => {
    const token = localStorage.getItem('authToken'); 
    const response = await fetch('http://localhost:8080/api/users/setFavourites?action=movies', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'post',
        body: JSON.stringify({username: username, moviePlaylist: moviePlaylist})
    });
    return response.json();
}

export const getMoviePlayList = async (username) => {
    const token = localStorage.getItem('authToken');
    const response = await fetch('http://localhost:8080/api/users/getFavourites?action=movies', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'post',
        body: JSON.stringify({username: username})
    });
    return response.json();
}

export const setShowsPlaylist = async (username, showPlaylist) => {
    const token = localStorage.getItem('authToken');
    const response = await fetch('http://localhost:8080/api/users/setFavourites?action=shows', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'post',
        body: JSON.stringify({username: username, showPlaylist: showPlaylist})
    });
    return response.json();
}

export const getShowPlayList = async (username) => {
    const token = localStorage.getItem('authToken');
    const response = await fetch('http://localhost:8080/api/users/getFavourites?action=shows', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'post',
        body: JSON.stringify({username: username})
    });
    return response.json();
}