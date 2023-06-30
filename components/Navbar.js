import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const CustomLink = React.forwardRef(({ href, ...rest }, ref) => {
  return (
    <Link href={href}>
      <a ref={ref} {...rest} />
    </Link>
  );
});

function Navbar() {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className='sticky top-0 bg-white shadow customnavbar rounded z-10'>
      <div className="justify-between px-4 mx-auto lg:w-full md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-3 md:block">
          <CustomLink href="/">
            <Image
              className="navbarBrand"
              src="/images/logo.png"
              alt="Ajay Kumar"
              height={60}
              width={60}
            />
          </CustomLink>
          {/*  <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div> */}
        </div>
        {/*  <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
          <ul className="navLinks items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {['Home', 'Categories'].map((item, index) => {
              const isActive = (item === 'Home' && router.asPath === '/') || router.asPath === `/${item}`;
              return (
                <li key={index}>
                  <Link className={` capitalize text-2xl navItem ${isActive ? 'active' : ''}`} href={item === 'Home' ? '/' : `/${item}`}>
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div> */}
        <button className="bg-purple-500 text-white py-2 px-4 text-lg rounded hidden md:inline-block">
          Cart
        </button>
      </div>
    </nav>
  );
}

export default Navbar