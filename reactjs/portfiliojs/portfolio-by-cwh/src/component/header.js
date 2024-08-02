import React from 'react'

export default function header() {
  return (
    <>
     <nav>
        <div className="left">Harsh's Portfolio</div>
        <div className="right">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contact Me</a></li>
            </ul>
        </div>
    </nav>
    </>
  )
}
