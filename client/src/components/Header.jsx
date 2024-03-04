import { Button, Navbar, TextInput } from "flowbite-react";
import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
export const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2  flex py-2 px-3 md:py-4 md:px-6 ">
      <Logo />
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={IoIosSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="bg-stone-300 lg:hidden" pill>
        <IoIosSearch className="text-[20px] text-stone-800" />
      </Button>
      <div className="flex gap-3 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline " color="gray" pill>
          <FaMoon className="" />
        </Button>
        <Link>
          <Button gradientDuoTone="purpleToBlue" outline color="">
            Login
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
