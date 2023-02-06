import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useMenuContext } from "../(context)/MenuContext";

const Menu = () => {
  const { showHomeMenu, setShowHomeMenu } = useMenuContext();
  return (
    <>
      {/* {showHomeMenu ? ( */}
        <div
          className={`fixed z-50 ease-in-out duration-300 ${
            showHomeMenu ? "" : "translate-x-full"
          } h-screen w-screen bg-neutral-900 text-white flex flex-col justify-between p-4`}
        >
          <div className="flex justify-between items-center">
            <p className="text-xl">ZipoAid Mining</p>
            <AiOutlineClose
              onClick={() => {setShowHomeMenu(!showHomeMenu)
            console.log('menu home', showHomeMenu);
            
            }}
              className="text-xl cursor-pointer"
            />
          </div>
          <div className="p-4 flex flex-col gap-3 items-center">
            <Link className="text-3xl" href={"/"}>
              Home
            </Link>
            <Link className="text-3xl" href={"/signin"}>
              Sign In
            </Link>
            <Link className="text-3xl" href={"/plans"}>
              Plans
            </Link>
            <Link className="text-3xl" href={"/about"}>
              About
            </Link>
          </div>
          <p className="text-xs">ZipoAid Mining</p>
        </div>
      {/* ) : null} */}
    </>
  );
};

export default Menu;
