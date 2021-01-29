import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import cityImage from '../assets/cityImage.jpg';


const Styles = styled.div ``;

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
