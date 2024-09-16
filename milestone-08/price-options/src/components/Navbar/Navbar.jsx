import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const routes = [
  {
    id: 1,
    path: "/home",
    name: "Home",
  },
  {
    id: 2,
    path: "/about",
    name: "About",
  },
  {
    id: 3,
    path: "/contact",
    name: "Contact",
  },
  {
    id: 4,
    path: "/services",
    name: "Services",
  },
  {
    id: 5,
    path: "/profile",
    name: "Profile",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:hidden text-2xl " onClick={() => setOpen(!open)}>
        {open ? <IoClose /> : <FiMenu></FiMenu>}
      </div>

      <ul
        className={`${
          open ? "ml-2 " : "-ml-24 "
        } md:flex gap-6 absolute bg-gray-950 px-4 py-2 rounded-md mx-2 duration-300 md:ml-0 `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
