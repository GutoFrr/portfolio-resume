import styled from 'styled-components'

const Container = styled.div`
  padding-top: 40px;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-title {
    font-size: 20px;
    line-height: 21px;
    display: flex;
    column-gap: 5px;
    cursor: pointer;

    .tobias {
      font-weight: 900;
    }

    .beratta {
      font-weight: 400;
    }
  }

  .nav-btns {
    display: flex;
    align-items: center;
    column-gap: 41px;
    font-weight: 500;
    color: #73738f;
    line-height: 15px;

    text-transform: uppercase;
  }

  .nav-btns > div {
    cursor: pointer;
    border-radius: 7px;
    transition: all 0.3s;

    :hover {
      background: #4a4cdc;
      color: white;
      padding: 10px;
      border: 1px solid #4a4cdc;
      border-radius: 15px;
      font-weight: 900;
    }

    :active {
      transition: 0.1s;
      background: #7576e4;
    }
  }

  .home-btn {
    font-weight: 900;
    color: #4a4cdc;
  }

  .nav-contact {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #4a4cdc;
    color: white;
    box-shadow: 0px 4px 30px rgba(150, 152, 247, 0.4);
    position: relative;
    transition: all 0.3s;

    .contact-icon {
      width: 25px;
      height: 21px;
      position: absolute;
      top: 24%;
      left: 18.8%;
    }

    :hover {
      background: #5f61e0;
    }

    :active {
      transition: 0.1s;
      background: #7576e4;
    }
  }

  .nav-menu {
    display: none;
  }

  @media (max-width: 768px) {
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-title {
      margin-right: auto;
    }

    .nav-menu {
      display: flex;
      margin-right: auto;
    }

    .nav-btns {
      display: none;
    }

    .nav-contact {
      display: none;
    }
  }
`

export default Container
