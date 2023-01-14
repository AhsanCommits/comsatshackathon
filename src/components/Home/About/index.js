const About = () => {


  return (
    <section id="about" className='about'>
      <h1 className="about__heading">Hackathons</h1>

      <div className="about__cards">


        <div className="about__card about__card--blue">
          <div>
            <div className="about__card--image">
              <img src='./images/cards/androidHackathon.svg' alt="" />
            </div>
          </div>

          <h3 className="about__card--heading">App</h3>

        </div>

        <div className="about__card about__card--red">
          <div>
            <div className="about__card--image">
              <img src='./images/cards/webHackathon.svg' alt="" />
            </div>
          </div>

          <h3 className="about__card--heading">Web</h3>
        </div>



        <div className="about__card about__card--yellow">
          <div>
            <div className="about__card--image">
              <img src='./images/cards/aiHackathon.svg' alt="" />
            </div>
          </div>

          <h3 className="about__card--heading">AI</h3>

        </div>


        <div className="about__card about__card--green">
          <div>
            <div className="about__card--image">
              <img src='./images/cards/terminalHackathon.svg' alt="" />
            </div>
          </div>

          <h3 className="about__card--heading">CMD</h3>

        </div>

      </div>
    </section >
  )
}

export default About;