import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-[#6b4c3b] text-[#fff8dc] px-6 py-4 flex items-center justify-between shadow-md">
      <a href="#top" className="text-xl font-bold">浜町公園ガイド</a>
      <nav>
        <ul className="flex space-x-4 text-sm">
          <li>
            <a
              href="#map"
              className="hover:text-[#deb887] transition-colors duration-200"
            >
              マップ
            </a>
          </li>
          <li>
            <a
              href="#info"
              className="hover:text-[#deb887] transition-colors duration-200"
            >
              施設案内
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
