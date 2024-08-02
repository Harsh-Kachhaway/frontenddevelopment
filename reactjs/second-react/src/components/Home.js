import React from 'react'
import bg from'./img/bg.png'
import'./Home.css'

export default function Home(prop) {
    return (<>
        <section className="firstsection">
            <div className="leftsection"> <div>
                Hi, My name is <span className="purple">{prop.tital}</span>
            </div>
                <div>
                    and i am proffessional
                </div>
                <div>
                    <span id="element"></span>
                    <div className="btn">

                        <button className="top">Downlode Resume</button>
                        <button className="top">View Github</button>
                    </div>
                </div></div>
            <div className="rightsection">
                <img src={bg}  alt=""/>

            </div>

{/* 
            <script>
                var typed = new Typed('#element', {
                    strings: ['Web Developer', 'UI/UX Designer','Web Designer','Video Editor','Web Developer', 'UI/UX Designer','Web Designer','Video Editor'],
                typeSpeed: 100,
        });
            </script> */}
        </section></>
    )
}
