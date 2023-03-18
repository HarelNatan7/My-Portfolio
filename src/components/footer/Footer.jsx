import React from 'react'
import './footer.css'

import { FaFacebookF, FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo hithere'>Harel Natan
        <br />
        <h5 className='footer__sub-logo'>FullStack Developer</h5>
      </a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/harelnatan/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/HarelNatan7" target="_blank"><FaGithub /></a>
        <a href="https://www.facebook.com/profile.php?id=100004619164278" target="_blank"><BsFacebook /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;2023 Harel Natan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer