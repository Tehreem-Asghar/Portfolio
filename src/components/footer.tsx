import React from 'react'
import '../../public/style/footer.css'
import Link from 'next/link'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


export default  function Footer() {
  return (
    <main className='footer'>
    <h3>Connect With Me</h3>
    <div className="followLink">
        <Link href="https://www.linkedin.com/in/tehreem-asghar-1003772b7/" target="_blank">
              <FaLinkedin className="icon" />
            </Link>
            <Link href="https://github.com/Tehreem-Asghar" target="_blank">
              <FaGithub className="icon" />
            </Link>
            <Link href="https://x.com/Tehreem1794730?t=rtAKTdmt8QBsRD6a56XXSQ&s=08" target="_blank">
              <FaTwitter className="icon" />
            </Link>
            <Link href="mailto:tehreemmeo818@gmail.com" target='_blank'>
          <FaEnvelope className='icon' />
        </Link>
        </div>
        <p> © 2024 Tehreem Asghar. All rights reserved. </p>
    </main>
  )
}


