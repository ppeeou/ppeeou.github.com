import { keyframes } from 'styled-components'

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const rightMove = keyframes`
  from {
    right:100%;
  }

  to{
    right:0%;
  }
`