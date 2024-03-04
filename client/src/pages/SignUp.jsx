import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { FaUser, FaGoogle } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { Link } from "react-router-dom";
import { BlogIcon } from "../components/BlogIcon";
export const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div className="max-w-[250px] md:max-w-md p-2 flex flex-col md:items-start items-center">
        <BlogIcon />
        <p className="max-w-sm font-semibold text-stone-600">
          My personal blog. Where I share my dev journey. I would be very happy
          if you consider to check my blog ✌🏻
        </p>
      </div>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your username" />
          </div>
          <TextInput
            icon={FaUser}
            id="email1"
            type="email"
            placeholder="username"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            icon={HiMail}
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            required
            icon={MdOutlinePassword}
            placeholder="********"
          />
        </div>
        <div className="flex items-center gap-2">
          <p>
            Already have an account?{" "}
            <Link className="text-blue-500">Login</Link>{" "}
          </p>
        </div>
        <Button gradientDuoTone="purpleToBlue" type="submit">
          Signup
        </Button>
        <Button color="dark">
          <FaGoogle className="mr-2" />
          Sign up with Google
        </Button>
      </form>
    </div>
  );
};
