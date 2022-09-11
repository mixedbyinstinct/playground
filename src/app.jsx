

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import heading from './Syne-ExtraBold.ttf';
import text from './Barlow-Regular.otf';
import buttons from './Syne-Regular.ttf';
import 'animate.css';


const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'heading';
  src: url(${heading}) format('truetype');
  font-weight: normal;
}
@font-face {
  font-family: 'text';
  src: url(${text}) format('opentype');
  font-weight: normal;
}
@font-face {
  font-family: 'buttons';
  src: url(${buttons}) format('truetype');
  font-weight: normal;
}
body {
  background-color: #ffe3b3;
  & p {
    font-family: 'text';
    color: #000d0c;
    font-size: 18px;
  }
}
`;

const Jumbotron = styled.header`
height: 7vh;
width: 100%;
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
padding: 15px;
background-color: #92de8b;
& h1 {
  font-family: 'heading';
  font-size: 32px;
  color: #000d0c;
  text-shadow: 0.5px 0.7px 6px #e6f2f1;
  animation: zoomInUp 1s;
}
filter: drop-shadow(0 3px 5px #001a17);
margin-bottom: 20vh;
`;

const Container = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
padding: 10px;
margin-top: 15vh;
& label {
  font-family: 'text';
  font-size: 14px;
  color: #000d0c;
}
& input[type="text"] {
  background-color: #fff7e8;
  font-family: 'text';
  font-size: 16px;
  height: 32px;
  color: #000d0c;
  border-radius: 6px;
  margin-top: 5vh;
  margin-bottom: 5vh;
  border: none;
  filter: drop-shadow(0 2px 4px #001a17);
}
& p {
    text-align: center;
}
`;

const Button = styled.button`
background-color: #0ab68b;
color: #000d0c;
border: none;
border-radius: 10px;
height: 40px;
font-family: 'buttons';
font-size: 18px;
text-align: center;
padding: 8px;
`;

const App = () => {
    const [vid, setVid] = useState('');
    const [show, setShow] = useState(false);
    function go() {
        axios.get("https://api.nasa.gov/planetary/apod?api-key=OS1bLo2XfPyR3ysfMWIhtpCrLDVdO3uuHK3UHO5M").then(({data}) => {
             setVid(data.url);
             setShow(true);
        });
    }
  return (
    <>
    <GlobalStyles />
    <Jumbotron>
        <h1>NASA shit</h1>
    </Jumbotron>
    <Container>
    <p>get some NASA shit</p>
    <Button onClick={go}>Search</Button>
    {show ? <><p>here:</p> <video src={vid} controls /></> : <div />}
    </Container>
    </>
  );
}

export default App;
