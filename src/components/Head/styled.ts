import styled from 'styled-components'

export const Container = styled.div`
  height: 86px;
  width: 100vw;
  background: var(--var-color-3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 1.1rem;

  .none {
    display: none;
  }
  @media (max-width: 750px) {
    padding: 1rem 1rem 1.1rem;
  }
  @media (max-width: 590px) {
    padding: 1rem 0.5rem 1.1rem;
  }
  @media (max-width: 280px) {
    padding: 0 0.5rem 2rem;
    height: 100px;
  }
`

export const LogoView = styled.div`
  &:focus,
  &:hover {
    filter: brightness(0.7);
  }
  img {
    width: 9.3rem;
    @media (max-width: 750px) {
      width: 7.3rem;
    }
    @media (max-width: 590px) {
      width: 5rem;
    }
  }
`

export const SearchView = styled.div`
  /* flex: 1; */
  padding: 3.31rem;
  input {
    width: 100%;
    height: 3.43rem;
    border-radius: 0.6rem;
    border-color: transparent;
    padding: 0 1.3rem;
    font-size: 1.25rem;
    font-family: Segoe-UI;
    line-height: 1.68rem;
    color: var(--var-color-6);
    font-weight: 400;

    &:focus,
    &:hover {
      outline: none;
    }

    ::placeholder {
      font-family: Segoe-UI;
      font-size: 1.25rem;
      line-height: 1.68rem;
      font-weight: 400;
    }

    @media (max-width: 750px) {
      width: auto;
      height: auto;
      padding: 0.3rem 0.8rem;
    }
    @media (max-width: 460px) {
      width: 30vw;
    }
  }

  @media (max-width: 750px) {
    padding: 1rem;
  }
`

export const LoginView = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 520px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    width: 30vw;
  }
  @media (max-width: 280px) {
    position: absolute;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    top: 60px;
    width: 100vw;
    left: -1.4rem;
    button {
      margin: 0;
      margin-top: 0;
    }
  }

  button {
    height: 2.5rem;
    width: 6.9rem;
    background: var(--var-color-5);
    border: 2px solid #100b16;
    border-radius: 0.6rem;
    margin-right: 2.7rem;
    @media (max-width: 670px) {
      height: auto;
      width: auto;
      padding: 0.3rem 0.8rem;
      margin-right: 1.7rem;
    }
    @media (max-width: 520px) {
      margin-right: 0;
      margin-top: 0.3rem;
      /* background: transparent;
      border-color: transparent; */
    }
  }
  img {
    /* height: 3.3rem; */
    width: 9.3rem;
    @media (max-width: 750px) {
      width: 7.3rem;
    }
    @media (max-width: 590px) {
      width: 5rem;
    }
  }

  button,
  img {
    &:focus,
    &:hover {
      filter: brightness(0.7);
    }
  }
`
