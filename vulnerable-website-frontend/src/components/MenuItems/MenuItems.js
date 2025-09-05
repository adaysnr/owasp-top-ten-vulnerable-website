import Link from "next/link";

const MenuItem = ({ item, setActiveItem, setActiveMenu }) => {
  return (
    <Link
      href={"#"}
      onClick={() => {
        setActiveItem(item);
        setActiveMenu(false);
      }}
      className="px-3 py-2 rounded-md hover:bg-zinc-200 duration-200 cursor-pointer"
    >
      {item}
    </Link>
  );
};
export default MenuItem;