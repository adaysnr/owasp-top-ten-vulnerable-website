import Logo from "@/components/Logo/Logo";
import Searchbar from "@/components/Searchbar/Searchbar";
import MenuItem from "@/components/MenuItem/MenuItem";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import LoginDropdown from "../LoginDropdown/LoginDropdown";

const Header = () => {
  return (
    <div className="m-0 p-0 flex flex-row justify-between">
      <Logo />

      <div className="flex flex-row justify-center items-center gap-24">
        <Searchbar />
        <DropdownMenu />
      </div>

      <div className="flex flex-row justify-center items-center gap-14">
        <MenuItem icon="shopping_cart">Sepetim</MenuItem>
        <LoginDropdown />
      </div>
    </div>
  );
};

export default Header;
