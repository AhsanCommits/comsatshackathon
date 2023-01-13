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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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