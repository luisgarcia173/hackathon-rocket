import React from 'react'
import { Wrapper } from './styles';

function Avatar({ type, src, size, alt }) {
  return (
    <Wrapper type={type} size={size}>
      <img src={src} alt={alt} />
    </Wrapper>
  )
}

Avatar.defaultProps = {
  size: null,
  alt: "Sem Alt",
  type: 'rounded',
};

export default Avatar;