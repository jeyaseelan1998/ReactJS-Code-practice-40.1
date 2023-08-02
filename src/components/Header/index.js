import {Link} from 'react-router-dom/cjs/react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => {
  const renderPopupMenu = close => (
    <>
      <button
        type="button"
        onClick={close}
        data-testid="closeButton"
        className="close-button"
      >
        <IoMdClose className="close-icon" />
      </button>
      <ul className="nav-link-items">
        <li>
          <Link className="nav-link" to="/">
            <AiFillHome className="nav-icon" />
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            <BsInfoCircleFill className="nav-icon" />
            <p>About</p>
          </Link>
        </li>
      </ul>
    </>
  )

  return (
    <nav className="nav-bar-container">
      <Link to="/">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>

      <Popup
        modal
        trigger={
          <button
            type="button"
            className="hamburger-menu-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="hamburger-menu-icon" />
          </button>
        }
      >
        {close => renderPopupMenu(close)}
      </Popup>
    </nav>
  )
}

export default Header
