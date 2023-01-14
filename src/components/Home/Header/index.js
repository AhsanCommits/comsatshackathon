const Header = () => {

  return (
    <section id="header" className="header">

      <div className="header__container">
        <div className="header__container--left">
          <div className="header__heading">
            <h1 className="header__heading--main" >
              <div className="header__heading--main-1">
                COMSATS
              </div>
              <div className="header__heading--main-2">
                Hackathon
              </div>
            </h1>
          </div>
          <div>
            <p className="header__text">
              COMSATS Sahiwal is hosting a hackathon for participants from all over Pakistan, with cash prizes for top teams. The event will bring together coders,
              developers, and entrepreneurs to work on innovative projects. It will be held over a period of 24-48 hours and accommodation and mentorship will be provided.
              Registration is open for all students, professionals, and enthusiasts.
            </p>
            <a href="https://www.google.com" className="header__button" target={'_blank'} rel="noreferrer">Become a member</a>
          </div>

        </div>

        <div className="header__container--right">
          <div className='header__box'>
            <img src='./images/networkGlobe.gif' alt='Network Globe' />
          </div>
        </div>
      </div>
    </section >
  )
}

export default Header;