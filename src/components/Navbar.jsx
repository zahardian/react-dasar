import { useState } from "react";

const Navbar = () => {
  let links = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Product", href: "/product" },
    { name: "Profile", href: "/profile" },
    { name: "Api", href: "/api" },
    { name: "Todo", href: "/todo" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-purple-200 fixed w-full">
        <nav className="flex items-center px-10 py-5 justify-between">
          <div className="flex items-center gap-2">
            <ion-icon name="thunderstorm-outline"></ion-icon>
            <h1 className="font-bold text-xl">Cloud</h1>
          </div>
          <ul className="hidden md:flex gap-8 font-bold">
            {links.map((link) => (
              <ul>
                <li>
                  <a href={link.href}>{link.name}</a>
                </li>
              </ul>
            ))}
          </ul>
          <div className="hidden md:flex gap-4">
            <button className="bg-green-500 text-white font-bold px-3 py-2 rounded">
              Login
            </button>
            <button className="bg-indigo-500 text-white font-bold px-3 py-2 rounded">
              Register
            </button>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden cursor-pointer"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </nav>
        <div
          className={`mobile bg-green-200 absolute w-full text-center md:hidden ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className="gap-8 font-bold">
            {links.map((link) => (
              <ul>
                <li>
                  <a href={link.href}>{link.name}</a>
                </li>
              </ul>
            ))}
          </ul>
          <div className="gap-4">
            <button className="bg-green-500 text-white font-bold px-3 py-2 rounded">
              Login
            </button>
            <button className="bg-indigo-500 text-white font-bold px-3 py-2 rounded">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
