import React from 'react'

export default function Midpart() {
  return (
    <>
     <main>
        <section class="firstsection">
            <div class="leftsection"> <div>
                Hi, My name us <span class="purple">Harsh</span>
            </div>
            <div>
                and i am proffessional
            </div>
            <div>
            <span id="element"></span>
            <div class="btn">

            <button class="top">Downlode Resume</button>
            <button class="top">View Github</button>
        </div>
            </div></div>
            <div class="rightsection">
                <img src="/img/bg.png" alt=""/>
                
            </div>


            <script>
                var typed = new Typed('#element', {
                  strings: ['Web Developer', 'UI/UX Designer','Web Designer','Video Editor','Web Developer', 'UI/UX Designer','Web Designer','Video Editor'],
                  typeSpeed: 100,
                });
              </script>
        </section>
        <hr/>
        <section class="secondsection">
            <h1>Work Experience</h1>
            <div class="box">
                <div class="horozontal">
                    <div class="start"></div>
                    <div class="verticle">
                        <div class="title">HTML Developer</div>
                        <div class="dec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsa quo, a provident, cum reiciendis, consequuntur alias pariatur iste laboriosam dolorum quibusdam neque repellat!</div>
                    </div>
                    <div class="verticle">
                        <div class="title">CSS Developer</div>
                        <div class="dec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsa quo, a provident, cum reiciendis, consequuntur alias pariatur iste laboriosam dolorum quibusdam neque repellat!</div>
                    </div>
                    <div class="verticle">
                        <div class="title">JS Developer</div>
                        <div class="dec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsa quo, a provident, cum reiciendis, consequuntur alias pariatur iste laboriosam dolorum quibusdam neque repellat!</div>
                    </div>
                    <div class="verticle">
                        <div class="title">ReactJS Developer</div>
                        <div class="dec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsa quo, a provident, cum reiciendis, consequuntur alias pariatur iste laboriosam dolorum quibusdam neque repellat!</div>
                    </div>
                    <div class="verticle">
                        <div class="title">Redux Developer</div>
                        <div class="dec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsa quo, a provident, cum reiciendis, consequuntur alias pariatur iste laboriosam dolorum quibusdam neque repellat!</div>
                    </div>
                   
                </div>
            </div>
        </section>
    </main>
    </>
  )
}
