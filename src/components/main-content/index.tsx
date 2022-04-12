/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import QuoteSection from '../quote-section'
import Container from './styles'

const MainContent = () => {
  return (
    <Container>
      <div className="main-content">
        <div className="hello-title">
          <h5>Hello, I'm Tobias</h5>
          <hr />
        </div>
        <div className="employment-text">
          <h1 className="occupation">Art Director & Product Designer</h1>
          <h1 className="company">at PanoplyStore</h1>
        </div>
        <div className="btns">
          <button className="red-btn">About Me</button>
          <button className="blue-btn">Works</button>
        </div>
      </div>
      <QuoteSection />
    </Container>
  )
}

export default MainContent
