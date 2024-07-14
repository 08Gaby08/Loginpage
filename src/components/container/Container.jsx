import React from 'react';
import { css } from '@emotion/react';
import { container, heading } from './styled-container'

export default function Container({title}){
    return (
      <div css={container}>
            <h1 css={heading}>{title}</h1>
            ...
      </div>
    )
}