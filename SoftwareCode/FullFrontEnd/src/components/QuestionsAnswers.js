import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import PassionOne from '../fonts/PassionOne.ttf';

const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: PassionOne;
    src: url(${PassionOne});
  }
  body {
    background-color:  #714C8A;
    font-family: 'Passion One', cursive;
    overflow: hidden;
    text-align: center;
    font: 50px;
  }
`;

// grid width can be changed depending on how big the other components are
export const Grid = styled.div`
  background-color: #714C8A; // purple
  width: 940px;
`;


//display: flex; stretches it out a bit vertically but then the text doesn't center align
//display: block; FIXES IT <3

//adding height stops it from stretching vertically
//but seems to put it in the top 'line' so if it's a long question it'll wrap to the line below
//so if it's a short one it leaves a gap for the line underneath
export const QuestionRow = styled.div`
  display: block;
  background-color: #DCC6E0; // lilac
  justifyContent: center;
  alignItems: center;
  margin:;
  padding: 1em;
  height:95%;
`;

export const QuestionText = styled.h2`

`;

export const Row = styled.div`
  display: flex;

  justifyContent:center;
    alignItems: center;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
`;

// button width used to be 400px but changed to percentage so it resizes

const Button = styled.button`
    font-family:'PassionOne';
    color: #714c8a;
    border: none;
    width: 50%;
    height: 200px;
    font-size: 2em;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 0px;
    outline: none;
    
    :hover {
      text-decoration: underline;
      font-size: 2.5em;
    }
`;

const Button1 = styled(Button)` 
  background: #98FB98; // green
  `;

const Button2 = styled(Button)`
  background: #89C4F4; // blue  
  `;

const Button3 = styled(Button)`
  background: #DDA0DD; // pink
  `;

const Button4 = styled(Button)`
  background: #F4A460; // orange
  `;

// button border and colour if we decide to use it
//  border: 2px solid #a90081;

// want to use this colour in background but not sure how outside of divs
//  background-color: #7E549F;

class Answers extends React.Component {
  state = {

  };

  render() {
    return (
    <React.Fragment>
    <GlobalStyle/>
    <div className="App">

      <Grid>
        <QuestionRow>
          <QuestionText>
            QUESTION QUESTION QUESTION QUESTION?
          </QuestionText>
        </QuestionRow>

        <Row>
          <Button1>ANSWER</Button1>
          <Button2>ANSWER</Button2>
        </Row>
        <Row>

          <Button3>ANSWER</Button3>
          <Button4>ANSWER</Button4>
       </Row>
      </Grid>

    </div>

    </React.Fragment>
    );
  }
}

export default Answers;