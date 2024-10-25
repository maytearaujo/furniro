import Hero from '../../components/Hero/Hero'
import BrowseTheRange from '../../components/BrowseTheRange/BrowseTheRange'
import OurProducts from '../../components/OurProducts/OurProducts'
import Inspiration from '../../components/Inspiration/Inspiration'
import FurniroFurniture from '../../components/FurniroFurniture/FurniroFurniture'
// import Carousel from '../../components/Carousel/Carousel'

// const api = 'https://run.mocky.io/v3/a4bcc170-742a-4e70-a563-0775266c9e38'

const api = 'https://furniro-lake.vercel.app/Products';


const Home = () => {
    return (
        <>
            <Hero />
            <BrowseTheRange />
            <OurProducts api={api}/>
            <Inspiration />
            <FurniroFurniture />
        </>
    )
}

export default Home
