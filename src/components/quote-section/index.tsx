/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Container from './styles'

import silhouette from '../../../public/images/silhouette/silhouette.png'
import redShape from '../../../public/images/silhouette/red-shape.png'
import blueShape from '../../../public/images/silhouette/blue-shape.png'
import quoteIcon from '../../../public/images/silhouette/quote-icon.png'

const QuoteSection = () => {
  return (
    <Container>
      <div className="quote-container">
        <div className="quote-images">
          <img
            src={silhouette}
            alt="Silhueta em formato humano"
            className="silhouette"
          />
          <img
            src={redShape}
            alt="semi-elipse vermelha"
            className="red-shape"
          />
          <img src={blueShape} alt="semi-elipse azul" className="blue-shape" />
        </div>
      </div>
      <div className="quote-phrase">
        <img src={quoteIcon} alt="Ícone de aspas" className="quote-icon" />
        <h6>Have no fear of perfection –</h6>
        <p>you'll never reacht it</p>
      </div>
    </Container>
  )
}

export default QuoteSection
