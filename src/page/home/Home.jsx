import Hero from '../../components/Hero/Hero'
import BrowseTheRange from '../../components/BrowseTheRange/BrowseTheRange'
// import OurProducts from '../../components/OurProducts/OurProducts'
// import Inspiration from '../../components/Inspiration/Inspiration'
// import FurniroFurniture from '../../components/FurniroFurniture/FurniroFurniture'

const api = 'https://furniro-json-git-main-mayte-araujos-projects.vercel.app/Products';


const Home = () => {
    return (
        <>
            <Hero />
            <BrowseTheRange />
            {/* <OurProducts api={api}/> */}
            {/* <Inspiration /> */}
            {/* <FurniroFurniture /> */}
        </>
    )
}

export default Home