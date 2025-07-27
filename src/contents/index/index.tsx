import BannerGradient from "./banner";
import Carousel from "./carousel";
import FaQ from "./faq";
import Footer from "./footer";
import Header from "./header";
import Projects from "./projects";
import Quote from "./quote";
import Services from "./services";

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