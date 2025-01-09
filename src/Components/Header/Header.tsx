import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="text-white body-font bg-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href={"/"}>
            <span className=" text-white ml-3 text-xl">Muhammad Asim khan</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-white/80" href={"/"}>Home</Link>
            <Link className="mr-5 hover:text-white/80" href={"about"}>About</Link>
            <Link className="mr-5 hover:text-white/80" href={"blog"}>Blog</Link>
          </nav>

          <button className="text-white">Button</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
