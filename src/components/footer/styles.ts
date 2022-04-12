import styled from 'styled-components'

const Container = styled.div`
  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #73738f;
  }

  .socials {
    display: flex;
    align-items: center;
    width: 196px;
    height: 20px;
    column-gap: 20px;

    h6 {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      cursor: pointer;
    }

    .icon {
      cursor: pointer;
      transition: all 0.3s;

      :hover {
        color: #5c5c73;
      }

      :active {
        transition: 0.1s;
        color: #515165;
      }
    }
  }

  .copyright {
    width: 90px;
    height: 36px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
  }
`

export default Container
