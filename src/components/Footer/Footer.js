import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="w-100 h-[20vh] flex flex-col justify-center items-center bg-slate-600">
      <div className="w-1/3 flex flex-col justify-center items-center rounded-full border-white border-2">
        <div className="flex justify-between items-center w-60">
          <p
            onClick={() => navigate("/")}
            className="cursor-pointer text-white"
          >
            Home
          </p>
          <p
            onClick={() => navigate("/about")}
            className="cursor-pointer text-white"
          >
            About us
          </p>
          <p
            onClick={() => navigate("/cart")}
            className="cursor-pointer text-white"
          >
            About us
          </p>
        </div>
        <p className="w-60 flex justify-center items-center text-white">
          © iShop
        </p>
        <div className="font-bold text-medium pb-2 flex w-20 justify-evenly">
          <a
            href="https://www.github.com/aldinhalilovic"
            target="_blank"
            rel="noreferrer"
          >
            <GoMarkGithub />
          </a>
          <a
            href="https://www.instagram.com/hallilovic.a/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
