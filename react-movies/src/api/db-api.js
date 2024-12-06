export async function registerUser(data) {
    const url = 'http://localhost:3001/users/register';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        return;
      }
  
      const result = await response.json();
      console.log('Success:', result);
      return result;
    } catch (error) {
      console.error('Network error:', error);
    }
  }
  
export async function loginUser(data) {
    const url = 'http://localhost:3001/users/login';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        return;
      }
  
      const result = await response.json();
      console.log('Success:', result);
      return result;
    } catch (error) {
      console.error('Network error:', error);
    }
}

  



export async function setShowPlaylist(email, playlist) {
  console.log('Payload sent to API:', email, playlist);
  
  const url = 'http://localhost:3001/users/setShowPlaylist';
  
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,         
        showPlaylist: playlist,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error:', errorData);
      return;
    }

    const result = await response.json();
    console.log('Success:', result);
    return result;
  } catch (error) {
    console.error('Network error:', error);
  }
}

export async function setMoviePlaylist(email, playlist) {
    const url = 'http://localhost:3001/users/setMoviePlaylist';
  
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,         
          moviePlaylist: playlist,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        return;
      }
  
      const result = await response.json();
      console.log('Success:', result);
      return result;
    } catch (error) {
      console.error('Network error:', error);
    }
}
  
export async function getMoviePlaylist(email) {
    const url = 'http://localhost:3001/users/getMoviePlaylist';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,         
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        return;
      }
  
      const result = await response.json();
      console.log('Success:', result);
      return result;
    } catch (error) {
      console.error('Network error:', error);
    }
  }

  export async function getShowPlaylist(email) {
    const url = 'http://localhost:3001/users/getShowPlaylist';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,         
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        return;
      }
  
      const result = await response.json();
      console.log('Success:', result);
      return result;
    } catch (error) {
      console.error('Network error:', error);
    }
}