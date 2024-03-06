import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { HiMail, HiInformationCircle } from "react-icons/hi";
import { FaGoogle } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { BlogIcon } from "../components/BlogIcon";
import { useState } from "react";
export const Login = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error);
      setLoading(false);
    }
  };
  console.log(formData);
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <div className="max-w-[250px] md:max-w-md p-2 flex flex-col md:items-start items-center">
        <BlogIcon />
        <p className="max-w-sm font-semibold text-stone-600">
          My personal blog. Where I share my dev journey. I would be very happy
          if you consider to check my blog ✌🏻
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-md gap-4 text-sm"
      >
        <div>
          <div className="flex flex-col items-center justify-between gap-2 mb-1 md:flex-row">
            <Label htmlFor="email" value="Your email" />
            <TextInput
              icon={HiMail}
              id="email"
              type="email"
              placeholder="user@gmail.com"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-between gap-2 mb-1 md:flex-row ">
            <Label htmlFor="password" value="Your password" />
            <TextInput
              id="password"
              type="password"
              icon={MdOutlinePassword}
              placeholder="********"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign up
            </Link>{" "}
          </p>
        </div>
        <Button gradientDuoTone="purpleToBlue" type="submit" disabled={loading}>
          {loading ? (
            <>
              <Spinner size="sm" />
              <span>loading....</span>
            </>
          ) : (
            `Signup`
          )}
        </Button>
        <Button color="dark">
          <FaGoogle className="mr-2" />
          Sign up with Google
        </Button>
        {errorMessage ? (
          <div>
            <Alert color="failure" icon={HiInformationCircle}>
              {errorMessage}
            </Alert>
          </div>
        ) : null}
      </form>
    </div>
  );
};
