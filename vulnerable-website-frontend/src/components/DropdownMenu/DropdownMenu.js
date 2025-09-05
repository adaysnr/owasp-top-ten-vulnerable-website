"use client";

import { useState, useEffect, useRef } from "react";
import MenuItems from "../MenuItems/MenuItems";

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const categories = ["Kalem", "Ajanda & Defter", "Ofis Ürünleri", "Çanta"];

  return (
    <div
      ref={menuRef}
      className="p-3 w-full max-w-[250px] flex justify-between items-center relative duration-200"
    >
      {activeItem === null ? (
        <button
          onClick={() => {
            setActiveMenu(!activeMenu);
          }}
          className="cursor-pointer flex justify-center gap-2"
        >
          <span
            className="material-symbols-rounded"
            style={{ fontSize: "24px", margin: 0, padding: 0 }}
          >
            action_key
          </span>
          Tüm Kategoriler
        </button>
      ) : (
        <p>{activeItem}</p>
      )}

      {/* menu */}
      <div
        className={`${
          activeMenu ? "top-full" : "top-1/2 opacity-0 pointer-events-none"
        } w-full bg-white absolute left-0 duration-200 rounded-md`}
      >
        <ul className="p-1 flex flex-col">
          {categories.map((item, index) => {
            return (
              <MenuItems
                item={item}
                key={index}
                setActiveItem={setActiveItem}
                setActiveMenu={setActiveMenu}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
