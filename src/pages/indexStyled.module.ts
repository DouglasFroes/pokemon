import styled from 'styled-components'

export const Container = styled.div`
  /* width: 100%;
  height: 100%; */
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`

export const Main = styled.div`
  margin: 0 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--var-color-2);
`

export const Header = styled.div`
  /* height: 6rem; */
  padding-left: 4vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #707070;
  padding-top: 34.5px;
  padding-bottom: 30px;

  label {
    color: var(--var-color-6);
    line-height: 0.9rem;
    font-size: 1rem;
    font-family: Segoe-UI;
  }
  select {
    width: 12.75rem;
    height: 2.81rem;
    color: var(--var-color-6);
    font-family: Segoe-UI;
    font-size: 1.6rem;
    line-height: 1.6rem;
    padding: 0 1.6rem;
    border-radius: 0.3rem;

    &:focus,
    &:hover {
      outline: none;
    }
  }
`
export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* padding: 0 8rem; */

  @media (max-width: 870px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 510px) {
    grid-template-columns: 1fr;
  }
`
export const Footer = styled.div`
  height: 4.81rem;
  ul {
    float: right;
    padding: 0;
    margin: 0;
    li {
      margin: 1.3rem 1.3rem 0;
      float: left;
      list-style: none;
      .active {
        filter: brightness(0.5);
      }
      button {
        width: 2.5rem;
        height: 2.6rem;
        border: 2px solid #100b16;
        border-radius: 0.8rem;
        background: var(--var-color-7);
      }
      p {
        font-size: 1rem;
        span {
          font-weight: 600;
        }
      }
    }
    @media (max-width: 418px) {
      li {
        margin: 1rem 0.3rem 0;
      }
      .none {
        display: none;
      }
    }
  }
`

export const SliderFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 3.8rem;
`
