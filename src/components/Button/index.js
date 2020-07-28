import React from 'react';
import styled from 'styled-components';

function _Button({ className, ...props }) {
  return <button className={className} {...props} />
}

const Button = styled(_Button)``;

export default Button;