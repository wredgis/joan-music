
import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-gray-300 p-4 flex justify-between items-center">
      <h1 className="text-blue-500 font-bold text-2xl">Joan Music</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="/" className="hover:text-blue-500">Accueil</a></li>
          <li><a href="/musiques" className="hover:text-blue-500">Musiques</a></li>
          <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
