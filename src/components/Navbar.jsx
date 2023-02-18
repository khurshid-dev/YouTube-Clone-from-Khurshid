import Logo from "../assets//logo2.png";
import { Link } from "react-router-dom";
import { SearchBar } from ".";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center xs:flex-col xs:gap-3 p-4 bg-primary">
      <Link to={"/"}>
        <img data-aos="zoom-out-down" data-aos-duration="1000" src={Logo} alt="logo" className="h-[30px] w-auto" />
      </Link>
      <SearchBar />
      <div className="block basis-1/12 ss:hidden"></div>
    </div>
  );
};

export default Navbar;
