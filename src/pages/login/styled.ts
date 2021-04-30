import styled from 'styled-components'

export const container = styled.div`
  flex: 1;
  margin: 0 auto;
  padding-right: 1rem;
  padding-left: 1rem;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const heading = styled.div`
  text-align: center;
  padding: 80px 45px 40px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: var(--var-color-6);
  }
  div {
    width: 60px;
    height: 3px;
    background-color: #f25d52;
    margin: 10px auto;
  }
  span {
    margin-top: 5px;
    font-size: 16px;
    color: var(--var-color-6);
    letter-spacing: 0.5px;
  }
`

export const body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  min-width: 0;
  word-wrap: break-word;
  background: var(--var-color-2);
  background-clip: border-box;
  border: 0px solid transparent;
  border-radius: 0px;
`

export const fromLogin = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
`

export const inputLogin = styled.input`
  margin-bottom: 15px;
  background-color: transparent;
  border-color: transparent;
  color: #000;
  text-align: center;
  font-size: 20px;
  padding: 8px;
  &:focus,
  &:hover {
    font-weight: 700;
  }
  &:focus {
    border-bottom: 2px solid coral;
    outline: none;
  }
`

export const loading = styled.div`
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
