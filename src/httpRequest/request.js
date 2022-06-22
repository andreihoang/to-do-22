export const API_URL = 'https://polar-falls-56503.herokuapp.com';

export const httpSignIn = async (email, password) => {

    const response = await fetch(`${API_URL}/signin`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
        .then(response => response.json())
        .catch(console.log);
    
    localStorage.setItem('user', JSON.stringify(response)) 
    
    return response;
}

export const httpSignUp = async (displayName, email, password) => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: displayName,
            email: email,
            password: password,
        })
    })
      .then(response => response.json())
      .catch(console.log);
      localStorage.setItem('user', JSON.stringify(response)) 
    return response;
};