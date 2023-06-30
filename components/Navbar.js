import Image from "next/image";

export default function Navbar() {
  return (
    <nav className='sticky top-0 bg-white shadow customnavbar rounded z-10'>
      <div className="justify-between px-4 mx-auto lg:w-full md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-3 md:block">
            <Image
              className="navbarBrand"
              src="/images/logo.png"
              alt="Ajay Kumar"
              height={60}
              width={60}
            />
        </div>

        <button className="bg-purple-500 text-white py-2 px-4 text-lg rounded hidden md:inline-block">
          Cart
        </button>
      </div>
    </nav>
  );
}