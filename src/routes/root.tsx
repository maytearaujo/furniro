
import * as S from './rootStyles'

const root = () => {
  return (
      <S.Nav>
        <ul>
          <li>
            <a href={`/`}>Home</a>
          </li>
          <li>
            <a href={`/shop`}>Shop</a>
          </li>          
          <li>
            <a href={`/about`}>About</a>
          </li>
          <li>
            <a href={`/contact`}>Contact</a>
          </li>
        </ul>
      </S.Nav>
  )
}

export default root