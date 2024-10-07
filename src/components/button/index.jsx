/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import {ButtonContainer} from './styled';



const Button = ({title, variant="primary", onClick}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}

export {Button}
