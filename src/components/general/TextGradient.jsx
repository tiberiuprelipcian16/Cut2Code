import React from 'react';
import '../../style/textGradient.css';

const TextGradient = ({text, className}) => {
  return (
    <p className={'txtGrad ' + className}>{text}</p>
  )
}

export default TextGradient