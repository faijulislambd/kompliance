import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="fixed w-full z-[50]">
      <div className="header-menu-padding flex justify-between items-center absolute top-0 left-0 w-full ">
        <Logo />
        <Nav></Nav>
      </div>
    </header>
  );
};

export default Header;
