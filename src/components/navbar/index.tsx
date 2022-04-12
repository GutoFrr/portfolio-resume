import React from 'react'
import Container from './styles'
import { MdMarkEmailUnread } from 'react-icons/md'
import Sidebar from './sidebar'

const Navbar = () => {
  return (
    <Container>
      <div className="navbar">
        <div className="nav-menu">
          <Sidebar />
        </div>
        <div className="nav-title">
          <h3 className="tobias">Tobias </h3>
          <h3 className="beratta">Beratta</h3>
        </div>
        <div className="nav-btns">
          <div className="home-btn">Home</div>
          <div>Resume</div>
          <div>Works</div>
          <div>Profile</div>
          <div>Contact</div>
        </div>
        <div className="nav-contact">
          <MdMarkEmailUnread className="contact-icon" />
        </div>
      </div>
    </Container>
  )
}

export default Navbar
