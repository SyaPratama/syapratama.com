import CardImage from "@/components/index/CardImage";
import HeaderProfile from "./HeaderProfile";

function Header() {
  return (
    <header className="background-grid background-grid-fade-out pt-36 pb-20 lg:pt-52 lg:pb-28">
      <div className="content-wrapper">
        <HeaderProfile />
        <CardImage />
      </div>
    </header>
  );
}

export default Header;
