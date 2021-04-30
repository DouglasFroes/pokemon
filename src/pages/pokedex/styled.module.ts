import styled from 'styled-components'

export const Container = styled.div`
  min-height: 80vh;
`
export const Header = styled.div`
  height: 5rem;
  padding-left: 1.2rem;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid #707070;
  padding-bottom: 0.5rem;

  label {
    color: var(--var-color-6);
    font-family: Poppins;
    line-height: 1.96rem;
    font-size: 1.31rem;
    font-weight: 500;
  }
`
export const Body = styled.div`
  padding: 0 1.2rem;
  min-height: 40rem;

  table {
    margin-top: 1.7rem;
    width: 100%;
    tr {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 2fr 2fr 1fr;
      align-items: center;
      justify-content: left;
      text-align: left;
      padding: 0.5rem;

      .visible {
        display: none;
      }

      @media (max-width: 350px) {
        grid-template-columns: 1fr 1fr;
        text-align: center;

        .none {
          display: none;
        }

        .visible {
          display: block;
          font-size: 1rem;
          margin: 0.1rem;
        }

        .icon {
          flex-direction: column;
          align-items: center;
          .red-icon {
            margin-top: 1rem;
            margin-left: 0;
          }
        }
      }
    }

    th {
      color: var(--var-color-6);
      line-height: 2.2rem;
      font-size: 1.3rem;
      font-weight: 500;
    }
  }

  @media (max-width: 580px) {
    padding: 0 0.5rem;
  }
`
