import React from 'react'
import "../../style/transparent.scss";

const TransparentButton = ({className, text}) => {
  return (
    <div className='flex22 buttTransparent'>
        <p className={className}>{text}</p>
    </div>
  )
}

export default TransparentButton