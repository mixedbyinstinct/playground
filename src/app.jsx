

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
    animation: fadeIn 1s;
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

const MessageBox = styled.header`
background-color: #0ba68b;
display: flex;
align-items: center;
justify-content: center;
color: #000d0c;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
padding: 15px;
height: 200px;
width: 75vw;
margin-top: 10vh;
& h1 {
  font-family: 'heading';
  font-size: 24px;
  animation: rotateIn 2s;
}
animation: rotateInDownLeft 1.5s;
box-shadow: 0 0 5px inset #e7f6f3, 0 0 8px #000d0c;
`;

const App = () => {
    const [what, setWhat] = useState('');
    const [show, setShow] = useState(false);
    function go() {
        axios.get("http://www.boredapi.com/api/activity").then(({data}) => {
             setWhat(data.activity);
             setShow(true);
        });
    }
  return (
    <>
    <GlobalStyles />
    <Jumbotron>
        <h1>Find Sum To Do</h1>
    </Jumbotron>
    <Container>
    <p>Ask the Bored API what to ddo</p>
    <Button onClick={go}>Yallah</Button>
    {show ?
    <MessageBox>
      <p>you should</p>
      <h1>{what}</h1>
      </MessageBox> : <div />}
    </Container>
    </>
  );
}

export default App;
