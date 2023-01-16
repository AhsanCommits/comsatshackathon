import '../../../styles/Home/footer.scss';

const Footer = () => {
  return (
    <section className="footer">
      <div>
        <img src='./images/dsclogo.png' className='footer__img' alt='DevHack' />
        <a href='mailto: droidthought@gmail.com' className='footer__contact'>Contact Us</a>
      </div>

      <div className='footer__credits'>
        All rights reserved by <span className='footer__credits--text'>DevHack</span>
      </div>
    </section>
  )
}

export default Footer;