import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { HiMail, HiInformationCircle } from "react-icons/hi";
import { FaGoogle } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { BlogIcon } from "../components/BlogIcon";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginError } from "../redux/user/userSlice";
import { OAuth } from "../components/OAuth";
export const Login = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(loginError("Please fill out all fields"));
    }
    try {
      dispatch(loginStart());
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        dispatch(loginError(data.error));
      }

      if (res.ok) {
        dispatch(loginSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(loginError(error.message));
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
              <span>Loading....</span>
            </>
          ) : (
            `Signup`
          )}
        </Button>
        <OAuth />
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
