import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"



const Navbar = () => {
    const [click, setClick] = useState(false);

    const links = [
        { title: "Home", link: "#" },
        { title: "Blog", link: "#" },
        { title: "About", link: "#" },
    ];

    const handleClick = () => setClick(!click);

    const hamburguerContent = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900">
            <ul className="text-center">
                {
                    links.map((link) => (
                        <Link
                            spy={true}
                            smooth={true}
                            to={link.link}
                        >
                            <li
                                className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded
                                hover:text-orange-400 transition border-b-2"
                            >
                                {link.title}
                            </li>
                        </Link>
                    ))
                }

                <li
                    className="my-4 py-4 bg-orange-800 hover:rounded hover:text-orange-400 transition border-b-2"
                >
                    Official website
                </li>
            </ul>
        </div>
    </>

    return (
        <nav className="h-10vh flex justify-between z-50 text-white px-20 py-4 flex-1 bg-slate-900">
            <div className="flex items-center flex-1">
                <span className="text-2xl font-bold">
                    Drakantos
                </span>
            </div>

            <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                <div>
                    <ul className="flex items-center gap-8 mr-16 text-[1.2rem]">
                        {
                            links.map((link) => (
                                <Link
                                    spy={true}
                                    smooth={true}
                                    to={link.link}
                                    className="cursor-pointer"
                                >
                                    <li className="hover:text-orange-400 hover:border-orange-400  border-b-2 border-slate-900 transition">
                                        {link.title}
                                    </li>
                                </Link>
                            ))
                        }


                        <Link
                            spy={true}
                            smooth={true}
                            to="#"
                            className="cursor-pointer"
                        >
                            <li
                                className="p-2 bg-orange-700 border-0 rounded hover:text-orange-400 transition"
                            >
                                <span className="text-[1rem]">
                                    Official website
                                </span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div>
                {click && hamburguerContent}
            </div>

            <button
                className="block border-0 sm:hidden transition"
                onClick={handleClick}
            >
                {click ? <FaTimes /> : <CiMenuFries />}
            </button>
        </nav >
    );
}

export default Navbar;