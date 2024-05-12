import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Music from '../component/Music';
// const handleClick = () => {

// }
export default function Login() {
  return (
      // <BrowserRouter>
      //     <Routes>
      //     {/* <Route path = "Music" element = {<Music/>}> */}
      //     </Route>
      //   </Routes>
      // </BrowserRouter>
      <>
      hello</>
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