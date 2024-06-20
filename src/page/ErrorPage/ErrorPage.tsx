import { useRouteError, Link } from "react-router-dom";
import * as S from './ErrorPageStyles'

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  // console.error(error);

  return (
    <>
      <Navbar />
      <S.Main>
        {/* <h1>Oops!</h1> */}
        <p>Sorry, an unexpected error has occurred.</p>
        {/* <p> */}
          {/* <i>{error.statusText || error.message}</i> */}
        {/* </p> */}
        <img src="../../../src/page/ErrorPage/error.jpg" alt="Error" />

        <S.LinkBackHome>
          <Link to="/">Back to Home</Link>
        </S.LinkBackHome>
      </S.Main>
      <Footer />
    </>
  )
}

export default ErrorPage

