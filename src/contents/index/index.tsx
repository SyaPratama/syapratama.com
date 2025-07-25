import Carousel from "./carousel";
import Header from "./header";
import Projects from "./projects";
import QnA from "./qna";
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
            <QnA/>
        </>
    );
}

export default IndexContents;