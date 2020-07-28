import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function _Menu({ className }) {
  return (
    <div className={className}>
      <Link to="/login">Login</Link>
      <Link to="/home">Home</Link>
      <Link to="/program-details">Program Details</Link>
    </div>
  );
}

const Menu = styled(_Menu)`
  display: flex;

  > * {
    margin-right: 10px;
  }
`;

export default Menu;