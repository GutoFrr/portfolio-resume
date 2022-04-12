import styled from 'styled-components'

const Container = styled.div`
  position: relative;

  .red-shape {
    position: absolute;
    left: -52px;
    top: 378px;
  }

  .blue-shape {
    position: absolute;
    right: 12px;
    top: 486px;
  }

  .quote-phrase {
    position: absolute;
    width: 229px;
    height: 106px;
    left: 452px;
    top: 177px;

    h6 {
      font-weight: 900;
      font-size: 16px;
      line-height: 20px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }
  }

  @media (max-width: 1440px) {
    width: 550px;
  }

  @media (max-width: 1200px) {
    width: fit-content;
    position: relative;

    .silhouette {
      width: 450px;
    }

    .red-shape {
      position: absolute;
      top: 65%;
      left: -10%;
      width: 140px;
    }

    .blue-shape {
      position: absolute;
      top: 79%;
      right: 0.001%;
      width: 140px;
    }

    .quote-phrase {
      position: absolute;
      top: 35%;
      left: 70%;

      h6 {
        font-weight: 900;
        font-size: 16px;
        line-height: 20px;
      }

      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
      }

      .quote-icon {
        width: 40px;
      }
    }
  }

  @media (max-width: 1024px) {
    width: fit-content;
    position: relative;

    .silhouette {
      width: 430px;
    }

    .red-shape {
      position: absolute;
      top: 65%;
      left: -10%;
      width: 130px;
    }

    .blue-shape {
      position: absolute;
      top: 79%;
      right: 0.001%;
      width: 130px;
    }

    .quote-phrase {
      position: absolute;
      top: 35%;
      left: 70%;
      width: 120px;

      h6 {
        font-weight: 900;
        font-size: 16px;
        line-height: 20px;
      }

      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
      }

      .quote-icon {
        width: 40px;
      }
    }
  }

  @media (max-width: 992px) {
    width: fit-content;
    position: relative;

    .silhouette {
      width: 400px;
    }

    .red-shape {
      position: absolute;
      top: 65%;
      left: -10%;
      width: 120px;
    }

    .blue-shape {
      position: absolute;
      top: 79%;
      right: 0.001%;
      width: 120px;
    }

    .quote-phrase {
      position: absolute;
      top: 35%;
      left: 85%;

      h6 {
        font-weight: 900;
        font-size: 15px;
        line-height: 18px;
      }

      p {
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
      }

      .quote-icon {
        width: 40px;
      }
    }
  }

  @media (max-width: 768px) {
    position: relative;
    width: fit-content;

    .silhouette {
      width: 330px;
    }

    .red-shape {
      width: 100px;
      position: absolute;
      top: 63%;
      left: -10%;
    }

    .blue-shape {
      width: 100px;
      position: absolute;
      top: 79%;
      right: 0.001%;
    }

    .quote-phrase {
      position: absolute;
      top: 40%;
      left: 85%;

      h6 {
        font-weight: 900;
        font-size: 12px;
        line-height: 15px;
      }

      p {
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
      }

      .quote-icon {
        width: 35px;
      }
    }
  }

  @media (max-width: 600px) {
    .quote-container {
      width: fit-content;
      position: relative;
    }

    .silhouette {
      width: 300px;
    }

    .red-shape {
      width: 70px;
      position: absolute;
      top: 63%;
      left: -10%;
    }

    .blue-shape {
      width: 70px;
      position: absolute;
      top: 80%;
      right: 5%;
    }

    .quote-phrase {
      width: 100px;
      position: absolute;
    }
  }
`

export default Container
