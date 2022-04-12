/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Container from './styles'
import { FaInstagram, FaDribbble, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <div className="socials">
          <h6>Let's connect</h6>
          <FaInstagram className="icon" />
          <FaDribbble className="icon" />
          <FaTwitter className="icon" />
        </div>
        <div className="copyright">All rights reserved JVM 2022</div>
      </div>
    </Container>
  )
}

export default Footer
