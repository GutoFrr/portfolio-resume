import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .main-content {
    width: 424px;
    margin-block: 120px 312px;
    display: flex;
    flex-direction: column;
  }

  .hello-title {
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    h5 {
      font-weight: 900;
      font-size: 14px;
      line-height: 15px;
      color: #4a4cdc;
      text-transform: uppercase;
    }

    hr {
      width: 100px;
      border: 1px solid #4a4cdc;
      margin-left: 13px;
    }
  }

  .employment-text {
    width: 420px;
    height: 168px;
    margin-bottom: 50px;
  }

  .occupation {
    font-weight: 900;
    font-size: 48px;
    line-height: 56px;
  }

  .company {
    font-weight: 400;
    font-size: 48px;
    line-height: 56px;
  }

  .btns {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 24px;
  }

  .red-btn {
    width: 142px;
    height: 56px;
    border-radius: 8px;
    border: none;
    background: #c34373;
    text-transform: uppercase;
    color: white;
    font-family: 'Darker Grotesque' sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 15px;
    cursor: pointer;
    box-shadow: 0px 16px 48px rgba(242, 141, 179, 0.5);
    transition: 0.3s;

    :hover {
      box-shadow: 0px 16px 48px rgba(242, 141, 179, 0.8);
      background: #c95681;
    }

    :active {
      background: #cf6a90;
    }
  }

  .blue-btn {
    width: 142px;
    height: 56px;
    border-radius: 8px;
    border: none;
    background: #4a4cdc;
    text-transform: uppercase;
    color: white;
    font-family: 'Darker Grotesque' sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 15px;
    cursor: pointer;
    box-shadow: 0px 16px 48px rgba(150, 152, 247, 0.5);
    transition: 0.3s;

    :hover {
      background: #5f61e0;
      box-shadow: 0px 16px 48px rgba(150, 152, 247, 0.8);
    }

    :active {
      background: #7576e4;
    }
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .main-content {
      align-items: center;
      text-align: center;
      margin-bottom: 60px;
      width: fit-content;
      height: fit-content;
    }

    .employment-text {
      height: fit-content;
      width: fit-content;
    }

    .red-btn {
      width: 170px;
    }

    .blue-btn {
      width: 170px;
    }
  }

  @media (max-width: 768px) {
    .main-content {
      width: fit-content;
      margin-top: 80px;
      height: fit-content;
      text-align: center;
    }

    .employment-text {
      width: 400px;
    }

    .btns {
      flex-flow: column wrap;
      row-gap: 24px;
    }

    .red-btn {
      width: 300px;
    }

    .blue-btn {
      width: 300px;
    }
  }
`

export default Container
