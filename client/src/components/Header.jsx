import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  TextInput,
} from "flowbite-react";
import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlicer";
export const Header = () => {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  return (
    <Navbar className="top-0 z-10 w-full px-3 py-2 border-b-2 md:py-4 md:px-6 ">
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
        <Button
          className="hidden w-12 h-10 sm:inline "
          onClick={() => dispatch(toggleTheme())}
          color="gray"
          pill
        >
          {theme === "dark" ? <FaSun /> : <FaMoon className="" />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="font-semibold truncate">
                {currentUser.email}
              </span>
            </DropdownHeader>
            <Link to={"/dashboard?tab=profile"} as="div">
              <DropdownItem as="div">
                <span className="text-md">Profile</span>
              </DropdownItem>
            </Link>
            <DropdownDivider />
            <DropdownItem as="div">
              <span className="font-semibold text-red-500">Logout</span>
            </DropdownItem>
          </Dropdown>
        ) : (
          <Link>
            <Button gradientDuoTone="purpleToBlue" outline color="">
              Login
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as="div" active={path === "/"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link as="div" active={path === "/about"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link as="div" active={path === "/projects"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
