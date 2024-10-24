import { Link } from "react-router-dom"

import * as S from './FooterStyles'

const Footer = () => {
  return (
    <S.Footer>
      <S.MainFooter>
        <section>
          <h2>Funiro.</h2>
          <p>400 University Drive Suite 200 Coral Gables,
            FL 33134 USA</p>
          <S.RedesSociais>
            <a href="https://www.facebook.com/?locale=pt_BR" target='_blank' >
              <img src="../../../public/assets/img/footer/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/" target='_blank' >
              <img src="../../../public/assets/img/footer/instagram.png" alt="Instagram" />
            </a>
            <a href="https://br.linkedin.com/" target='_blank' >
              <img src="../../../public/assets/img/footer/linkedin.png" alt="Linkedin" />
            </a>
            <a href="https://twitter.com/login" target='_blank' >
              <img src="../../../public/assets/img/footer/twitter.png" alt="Twitter" />
            </a>
          </S.RedesSociais>
        </section>

        <S.NavFooter>
          <section>
            <h3>Links</h3>
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/shop`}>Shop</Link>
              </li>
              <li>
                <Link to={`#`}>About</Link>
              </li>
              <li>
                <Link to={`/contact`}>Contact</Link>
              </li>
            </ul>
          </section>

          <section>
            <h3>Help</h3>
            <ul>
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </section>
        </S.NavFooter>

        <section>
          <h3>Newsletter</h3>
          <form>
            <label>Enter Your Email Address</label>
            <input type="text" />
            <button>SUBSCRIBE</button>
          </form>
        </section>


      </S.MainFooter>

      <div>
        <p>2023 furino. All rights reverved</p>
      </div>
    </S.Footer>
  )
}

export default Footer
