import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About Us",
      link: "/about",
    },
    {
      id: 3,
      name: "Services",
      link: "/services",
    },
    {
      id: 4,
      name: "Contacts",
      link: "/contacts",
    },
  ];

  const closeMobileMenu = () => {
    setNav(false);
  };

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 text-orange-400 bg-white fixed">
      <div>
        <h1 className="text-2xl font-semibold ml-2">Alsasha Investments Ltd</h1>
      </div>
      <ul className="hidden md:flex space-x-4">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-orange-300 hover:scale-105 duration-200"
          >
            <Link to={link} onClick={closeMobileMenu}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-orange-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-16 left-0 w-full h-screen text-orange-300 bg-white mb-2">
          {links.map(({ id, link, name }) => (
            <li key={id} className="py-2 cursor-pointer capitalize text-4xl">
              <Link to={link} onClick={closeMobileMenu}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
