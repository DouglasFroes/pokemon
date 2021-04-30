import styled from 'styled-components'

export const Container = styled.div`
  z-index: 9999;
  position: absolute;
  width: 70px;
  height: 70px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 10px solid transparent;
  border-top-color: #000000;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
  @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(1turn);
    }
  }
`
