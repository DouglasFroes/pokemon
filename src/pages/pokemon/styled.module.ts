import styled from 'styled-components'

export const Container = styled.div`
  min-height: 80vh;
`

export const Main = styled.div`
  margin: 0 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--var-color-2);
`

export const Header = styled.div`
  height: 5rem;
  padding-left: 3.37rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #707070;
  h3 {
    color: #100b16;
    font-family: Poppins;
  }
  ul {
    margin-top: 1rem;
    li {
      list-style: none;
      float: left;
      margin-right: 0.3rem;

      div {
        width: 3.25rem;
        height: 1.87rem;
        border-radius: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        label {
          font-family: Poppins;
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 1.12rem;
        }
      }
    }
  }
`
export const Body = styled.div`
  padding: 1.2rem;
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 1100px) {
    grid-template-columns: 0.5fr 1fr;
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 13vw;
      height: 9rem;
      opacity: 0.5;
    }
  }
  @media (max-width: 518px) {
    padding: 0;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
      margin: auto;
      opacity: 1;
    }
  }

  div {
    padding: 0 1rem;
    * {
      color: #100b16;
      font-family: Poppins;
    }
    .height {
      margin-top: 1rem;
      display: flex;
      p {
        margin-right: 1rem;
      }
    }
    .kills {
      z-index: 1;
      margin-top: 0.5rem;
      ul {
        li {
          list-style: none;
          float: left;
          margin-right: 0.3rem;
        }
      }
    }
  }
`
