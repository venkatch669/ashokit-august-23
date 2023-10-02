import React from 'react';
import logo from './logo.svg';
import './index.css';

function Header(props:any) {
  return (
    <h1> {props.courseTitle}</h1>
  );
}

export default Header;

