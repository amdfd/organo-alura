import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='icons'>
      <img src='/images/fb.png' alt='Facebook' />
      <img src='/images/tw.png' alt='Twitter' />
      <img src='/images/ig.png' alt='Instagram' />
      </div>
      <div className='logo'>
        <img src='/images/logo.png' alt='Logotipo Organo' />
      </div>
      <div className='copyright'>
        <p>Desenvolvido por Alura</p>
      </div>
    </footer>
  )
}

export default Footer