import BannerGradient from "./BannerGradient";
import Carousel from "./Carousel";
import FaQ from "./Faq";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Project";
import Quote from "./Quote";
import Services from "./Service";

function IndexContents(){
    return (
        <>
            <Header/>
            <Quote/>
            <Carousel/>
            <Services/>
            <Projects/>
            <FaQ/>
            <BannerGradient/>
            <Footer/>
        </>
    );
}

export default IndexContents;