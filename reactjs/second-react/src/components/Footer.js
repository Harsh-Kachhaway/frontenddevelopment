import React from 'react'
import'./Footer.css'

export default function Footer(prop) {
  return (
    <>
     <footer><div className="footer">
        <div className="footer-first">
            <h1>
                {prop.tital}'s Developer Portfolio
            </h1>
        </div>
        <div className="footernonlogo">
        <div className="footer-second">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contact Me</a></li>
            </ul>
        </div>
        <div className="footer-second">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contact Me</a></li>
            </ul>
        </div>
        <div className="footer-second">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contact Me</a></li>
            </ul>
        </div>
    </div>
    </div>
    </footer>
    </>
  )
}
