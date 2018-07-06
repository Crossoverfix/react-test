import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
        <div>
            <SayFullName name="Fedya" surname="Maximov" link="vk.com" />
            <SayFullName name="Fedya" surname="Maximov" link="vk.com" />
            <SayFullName name="Fedya" surname="Maximov" link="vk.com" />
        </div>
    );
  }
}
function SayFullName(props) {
    return(
        <div>
            <h1>Моё имя - {props.name} Моя фамилия - {props.surname}</h1>
            <a href={props.link}>Сылка на мой профиль</a>
        </div>
    )
}
export default App;
