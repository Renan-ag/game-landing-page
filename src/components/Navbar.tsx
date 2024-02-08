import { Link } from "react-scroll"

const Navbar = () => {
    const links = [
        { title: "Home", link: "#" },
        { title: "Blog", link: "#" },
        { title: "About", link: "#" },
    ];

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
            <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal">
                <div>
                    <ul className="flex gap-8 mr-16 text-[1.2rem]">
                        {
                            links.map((link) => (
                                <Link
                                    spy={true}
                                    smooth={true}
                                    to={link.link}
                                >
                                    <li>
                                        {link.title}
                                    </li>
                                </Link>
                            ))
                        }


                        <Link
                            spy={true}
                            smooth={true}
                            to="#"
                        >
                            <li
                                className="p-12 bg-orange-700 rounded hover:text-orange-400 transition"
                            >
                                Official website
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;