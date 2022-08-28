import React from 'react';
import '../../style/textGradient.scss';

const TextGradient = ({text, className}) => {
  return (
    <p className={'txtGrad ' + className}>{text}</p>
  )
}

export default TextGradient