import { Helmet } from "react-helmet";
import favIcon from "assets/images/fav.png";
const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        {/* meta tag*/}
        <meta charset="utf-8" />
        <title>
          {" "}
          GamFi - Metaverse Web3 IGO Launchpad React JS Template
        </title>
        <meta name="description" content="" />
        <link rel="shortcut icon" type="image/x-icon" href={favIcon} />
        {/* responsive tag */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {/* Bootstrap Latest compiled and minified CSS  */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Russo+One&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/react-modal-video@1.2.9/css/modal-video.min.css"
        />
      </Helmet>
      {children}
    </>
  );
};

export default Layout;
