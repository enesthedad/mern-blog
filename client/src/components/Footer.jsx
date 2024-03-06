import { Footer, Label } from "flowbite-react";
import {
  FaPaintBrush,
  FaInstagram,
  FaPinterestSquare,
  FaDev,
  FaGithubSquare,
  FaFileAlt,
  FaAngellist,
} from "react-icons/fa";
import { FaSquareXTwitter, FaPerson } from "react-icons/fa6";
import logoPicture from "../imgs/logo.png";
export const FooterComponent = () => {
  const getYear = () => {
    const year = new Date().getFullYear();
    return year;
  };
  const year = getYear();
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid justify-between w-full gap-5 sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex flex-col items-start max-w-sm gap-3 p-4">
            <Footer.Brand
              href="http://enesthedad.netlify.app"
              src={logoPicture}
              alt="Blog picture"
              name=""
            />
            <Label>
              My personal blog. Where I share my dev journey. I would be very
              happy if you consider to check my blog ✌🏻
            </Label>
          </div>
          <div className="grid grid-cols-2 gap-8 p-4 sm:grid-cols-3 sm:mt-4 sm:gap-6">
            <div>
              <Footer.Title title="about me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  className="flex "
                  href="http://enesthedad.netlify.app"
                  target="_blank"
                >
                  <div className="flex gap-1">
                    <FaPerson />
                    Who am i
                  </div>
                </Footer.Link>
                <Footer.Link
                  href="http://enesthedad.netlify.app/resume"
                  target="_blank"
                >
                  <div className="flex gap-1">
                    <FaFileAlt />
                    Resume
                  </div>
                </Footer.Link>
                <Footer.Link
                  href="http://enesthedad.netlify.app/resume"
                  target="_blank"
                >
                  <div className="flex gap-1">
                    <FaAngellist />
                    Portfolio
                  </div>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  target="_blank"
                  href="https://github.com/enesthedad"
                >
                  <div className="flex items-center gap-1 ">
                    <FaGithubSquare />
                    Github
                  </div>
                </Footer.Link>
                <Footer.Link
                  target="_blank"
                  href="https://twitter.com/enesthedad"
                >
                  <div className="flex items-center gap-1 ">
                    <FaSquareXTwitter />
                    Twitter
                  </div>
                </Footer.Link>
                <Footer.Link target="_blank" href="https://dev.to/enesthedad">
                  <div className="flex items-center gap-1 ">
                    <FaDev />
                    Dev
                  </div>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Art" />
              <Footer.LinkGroup col>
                <Footer.Link target="_blank" href="#">
                  <div className="flex items-center gap-1 ">
                    <FaPinterestSquare /> Pinterest
                  </div>
                </Footer.Link>
                <Footer.Link target="_blank" href="#">
                  <div className="flex items-center gap-1 ">
                    <FaInstagram />
                    Instagram
                  </div>
                </Footer.Link>
                <Footer.Link target="_blank" href="#">
                  <div className="flex items-center gap-1 ">
                    <FaPaintBrush />
                    Arts
                  </div>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="flex items-center justify-center w-full">
          <Label>
            ©{year} developed and designed with ❤️ by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="http://github.com/enesthedad"
            >
              enesthedad
            </a>
          </Label>
        </div>
      </div>
    </Footer>
  );
};
