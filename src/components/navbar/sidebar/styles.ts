import styled from 'styled-components'

const Container = styled.div`
  .menu-icon {
    cursor: pointer;
    transition: opacity 0.3s;
    color: #515165;
    opacity: 1;
  }

  .menu-icon-close {
    cursor: pointer;
    transition: opacity 0.3s;
    color: #515165;
    opacity: 1;
    margin-left: 32vw;
    margin-top: 13px;
  }

  .menu {
    height: 100vh;
    width: 40vw;
    background: #dbe5f1;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 1;
    transition: all 0.3s;

    .menu-btns {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 7px;
      font-weight: 800;
      color: #515165;
      line-height: 15px;
      border-top: 1px solid;
      border-color: #babac8;
      text-transform: uppercase;
    }

    .menu-btns > div {
      width: 40vw;
      padding: 15px 0 15px 35px;
      cursor: pointer;
      transition: all 0.3s;
    }

    .menu-btns > div:hover {
      background: transparent;
      box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.3);
      padding-left: 50px;
    }

    &.inactive {
      left: -40vw;
      top: 0;
    }
  }
`

export default Container
