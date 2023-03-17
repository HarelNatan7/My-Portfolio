import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/harelnatan/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/HarelNatan7" target="_blank"><FaGithub /></a>
            <a href="https://www.facebook.com/profile.php?id=100004619164278" target="_blank"><BsFacebook /></a>
        </div>
    )
}

export default HeaderSocial