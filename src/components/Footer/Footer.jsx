import { Link } from "react-router-dom";

import * as S from './FooterStyles';

import Facebook from '../../../src/assets/img/footer/facebook.png';
import Instagram from '../../../src/assets/img/footer/instagram.png';
import Linkedin from '../../../src/assets/img/footer/linkedin.png';
import Twitter from '../../../src/assets/img/footer/twitter.png';

const Footer = () => {
  return (
    <S.Footer>
      <S.MainFooter>
        <section>
          <h2>Furniro.</h2>
          <p>400 University Drive Suite 200 Coral Gables,
            FL 33134 USA</p>
          <S.RedesSociais>
            <a href="https://www.facebook.com/?locale=pt_BR" target='_blank' >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/" target='_blank' >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://br.linkedin.com/" target='_blank' >
              <img src={Linkedin} alt="Linkedin" />
            </a>
            <a href="https://twitter.com/login" target='_blank' >
              <img src={Twitter} alt="Twitter" />
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
