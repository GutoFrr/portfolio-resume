/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Container from './styles'
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai'

interface ItemProps {
  menu?: string
  menuItems?: string[]
}

const Sidebar: React.FC<ItemProps> = itemProps => {
  const [openMenu, setOpenMenu] = useState(true)
  const handleClickMenu = () => setOpenMenu(!openMenu)

  return (
    <Container>
      <div>
        <AiOutlineMenuUnfold
          className="menu-icon"
          size={30}
          onClick={handleClickMenu}
        />
      </div>

      <div className={`menu ${openMenu ? 'active' : 'inactive'}`}>
        <AiOutlineClose
          className="menu-icon-close"
          size={30}
          onClick={handleClickMenu}
        />
        <div className="menu-btns">
          <div>Home</div>
          <div>Resume</div>
          <div>Works</div>
          <div>Profile</div>
          <div>Contact</div>
        </div>
      </div>

      {/* {itemProps.menuItems && (
        <div className={`menu ${openMenu ? 'active' : 'inactive'}`}>
          <ul>
            {itemProps.menuItems.map(menuItem => (
              <li>{menuItem}</li>
            ))}
          </ul>
        </div>
      )} */}
    </Container>
  )
}

export default Sidebar
