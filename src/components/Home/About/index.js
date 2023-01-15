import { useState } from "react";

const About = () => {

  const [color, setColor] = useState(null);


  return (
    <section id="about" className={`about about__${color}`}>
      <h1 className="about__heading">Themes</h1>

      <div className="about__cards">


        <div className="about__card about__card--blue" onMouseEnter={() => setColor('blue')} onMouseLeave={() => setColor('null')}>
          <div>
            <div className="about__card--image">
              <img src='./images/cards/educationTheme.svg' alt="" />
            </div>
          </div>

          <h3 className="about__card--heading">Education</h3>

        </div>

        <div className="about__card about__card--red" onMouseEnter={() => setColor('red')} onMouseLeave={() => setColor('null')}>
          <div>
            <div className="about__card--image">
              <img src='./images/cards/industryTheme.svg' alt="" />
            </div>
          </div>

          <h3 className="about__card--heading">Industry</h3>
        </div>



        <div className="about__card about__card--yellow" onMouseEnter={() => setColor('yellow')} onMouseLeave={() => setColor('null')}>
          <div>
            <div className="about__card--image">
              <img src='./images/cards/medicalTheme.svg' alt="" />
            </div>
          </div>

          <h3 className="about__card--heading">Health</h3>

        </div>


        <div className="about__card about__card--green" onMouseEnter={() => setColor('green')} onMouseLeave={() => setColor('null')}>
          <div>
            <div className="about__card--image">
              <img src='./images/cards/natureTheme.svg' alt="" />
            </div>
          </div>

          <h3 className="about__card--heading">Environment</h3>

        </div>

      </div>
    </section >
  )
}

export default About;