import * as S from './HeroStyles'

import ImageBackgroundDivHero from '../../../src/assets/img/Hero/Hero.png'

const Hero = () => {
  const estilo = {
    // backgroundImage: `url(${ImageBackgroundDivHero})`,
    // backgroundSize: 'cover',
    // height: '200px',
    // width: '200px'

    // width: '100%',
    // height: '90vh',
    // display: 'flex',
    // justifyContent: 'end',
    // alignItems: 'center',
    // paddingRight: '2rem',

    /* background-image: url('/src/assets/img/home/Hero.png'); */
    // background-image: url('.././../../src/assets/img/home/Hero/Hero.png');
    backgroundImage: `url(${ImageBackgroundDivHero})`,
    // backgroundRepeat:' no-repeat',
    // backgroundSize: '100% 100%'

};
// return <div style={estilo}></div>;

  return (
    <S.DivHero style={estilo}>
      <S.DivNewArrival>
        <S.FirstParagrafo>New Arrival</S.FirstParagrafo>
        <S.TituloHero>Discover Our <br />New Collection</S.TituloHero>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button>BUY NOW</button>
      </S.DivNewArrival>
    </S.DivHero>
  )
}

export default Hero

