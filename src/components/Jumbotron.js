import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import cityImage from '../assets/cityImage.jpg';


const Styles = styled.div `
  .jumbotron {
    background: url(${cityImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>Here's a little bit about me...</p>
      </Container>
    </Jumbo>
  </Styles>
)
