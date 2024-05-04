import React from 'react'
import styled from 'styled-components'
const handleClick = () => {
    const clientId = "1de09f7c61e740c9a221d4d20a9bdf91";
    const reDirectUri = "http://localhost:3000/";
    const apiUri = "https://accounts.spotify.com/authorize";
    const scope = [
        "user-read-email",
        "user-read-private",
        "user-modify-playback-state", 
        "user-read-playback-state",
        "user-read-currently-playing", 
        "user-read-recently-played",
        "user-read-playback-position",
        "user-top-read"
    ];
    window.location.href = `${apiUri}?client_id= ${clientId}&redirect_uri=${reDirectUri}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;
}
export default function Login() {
  return (
    <Container>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt = "spotify"></img>
        <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background-color: #1db954;
gap: 5rem;
img {
    height: 20vh;
}
button {
    padding : 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: #49f585;
    font-size: 1.4rem;
    cursor: pointer;
}
`;