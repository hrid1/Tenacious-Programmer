import { FaBeer, FaHamburger } from "react-icons/fa";
import Link from "../Link/Link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Not found", path: "*" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <section>
      <div
        onClick={() => setOpen(!open)}
        className="text-xl cursor-pointer inline-block md:hidden"
      >
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <ul className={`w-24 md:w-full rounded  md:flex gap-4 font-medium bg-slate-900 absolute md:static -left-28 transition-transform ${open && 'left-0'}`}>
        {navItems.map((item) => (
          <Link key={item.id} routes={item}></Link>
        ))}
      </ul>
    </section>
  );
};

export default Navbar;
