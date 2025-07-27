import Copyright from "./Copyright";
import Social from "./Social";

function Footer() {
  return (
    <section className="w-full background-grid background-grid-fade-in py-14">
      <div className="content-wrapper">
        <div className="w-full flex flex-col items-center">
          <Social />
          <Copyright />
        </div>
      </div>
    </section>
  );
}

export default Footer;
