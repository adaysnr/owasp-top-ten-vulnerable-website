"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const LoginDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        className="flex items-center gap-2 cursor-pointer"
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => {
          router.push("/login");
        }}
      >
        <span className="material-symbols-rounded">account_circle</span>
        <span>Giriş Yap</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg p-4 flex justify-center items-center flex-col gap-2"
          onMouseLeave={() => setIsOpen(false)}
        >
          <p className="text-gray-700 text-md mb-2">Ya da</p>
          <button
            className="w-full text-center hover:bg-gray-100 p-2 rounded-md text-[#1E3A8A] cursor-pointer"
            onClick={() => {
              router.push("/register");
            }}
          >
            Kayıt Ol
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
