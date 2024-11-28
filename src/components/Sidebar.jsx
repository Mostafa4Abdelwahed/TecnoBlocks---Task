import { useContext } from "react";
import Favicon from "../../public/Favicon.png";
import Logo from "/logo.png";
import { SidebarContext } from "../context/sidebarContext";

const Sidebar = () => {
  const { show, setShow } = useContext(SidebarContext);
  const links = [
    {
      title: "Dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.223a1 1 0 0 1 1.228 0l8 6.223a1 1 0 0 1 .386.79z"
          ></path>
        </svg>
      ),
      href: "/dashboard",
      arrow: true,
    },
    {
      title: "Users",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <circle
            cx={15}
            cy={6}
            r={3}
            fill="currentColor"
            opacity={0.4}
          ></circle>
          <ellipse
            cx={16}
            cy={17}
            fill="currentColor"
            opacity={0.4}
            rx={5}
            ry={3}
          ></ellipse>
          <circle cx={9.001} cy={6} r={4} fill="currentColor"></circle>
          <ellipse
            cx={9.001}
            cy={17.001}
            fill="currentColor"
            rx={7}
            ry={4}
          ></ellipse>
        </svg>
      ),
      href: "/users",
      arrow: true,
      active: true,
    },
    {
      title: "Orders",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="currentColor">
            <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125z"></path>
            <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434a9.77 9.77 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125zM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6"></path>
          </g>
        </svg>
      ),
      href: "/orders",
      arrow: true,
    },
    {
      title: "Services",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"
          ></path>
        </svg>
      ),
      href: "/services",
      arrow: true,
    },
    {
      title: "Themes",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
        >
          <defs>
            <mask id="ipSFolderCode0">
              <g fill="none" strokeLinejoin="round" strokeWidth={4}>
                <path
                  fill="#fff"
                  stroke="#fff"
                  d="M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"
                ></path>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  d="m28 22l5 5l-5 5m-8-10l-5 5l5 5"
                ></path>
              </g>
            </mask>
          </defs>
          <path
            fill="currentColor"
            d="M0 0h48v48H0z"
            mask="url(#ipSFolderCode0)"
          ></path>
        </svg>
      ),
      href: "/themes",
      arrow: true,
    },
    {
      title: "Courses",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M216 36H40a20 20 0 0 0-20 20v104a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 120H44V60h168Zm24 52a12 12 0 0 1-12 12H32a12 12 0 0 1 0-24h192a12 12 0 0 1 12 12m-132-80V88a12 12 0 0 1 18.36-10.18l32 20a12 12 0 0 1 0 20.36l-32 20A12 12 0 0 1 104 128"
          ></path>
        </svg>
      ),
      href: "/courses",
      arrow: true,
    },
    {
      title: "Portfolio",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5A2.5 2.5 0 0 0 10.5 1A2.5 2.5 0 0 0 8 3.5V5H4a2 2 0 0 0-2 2v3.8h1.5c1.5 0 2.7 1.2 2.7 2.7S5 16.2 3.5 16.2H2V20a2 2 0 0 0 2 2h3.8v-1.5c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7V22H17a2 2 0 0 0 2-2v-4h1.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"
          ></path>
        </svg>
      ),
      href: "/portfolio",
      arrow: true,
    },
    {
      title: "Jobs",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6 1a1.75 1.75 0 0 0-1.75 1.75V4H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.25V2.75A1.75 1.75 0 0 0 10 1zm4.25 3V2.75A.25.25 0 0 0 10 2.5H6a.25.25 0 0 0-.25.25V4zM3 5.5h10a.5.5 0 0 1 .5.5v1h-11V6a.5.5 0 0 1 .5-.5m-.5 3V13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8.5H9V10H7V8.5z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      href: "/jobs",
      arrow: true,
    },
  ];
  return (
    <>
      <div
        className={`shadow-lg shadow-dark-100 z-50 transition-all h-full md:h-auto ${
          show
            ? "fixed left-0 top-0 bottom-0 lg:relative w-[300px] md:w-[350px]"
            : "fixed lg:relative w-[70px]"
        } xl:p-4 border-gray-700 p-2 bg-dark-200 shadow-2xl flex-col justify-start items-start gap-5 inline-flex`}
      >
        {/* Header Logo */}
        <div className="w-full px-2.5 pt-4 justify-between items-center gap-2.5 inline-flex">
        <img
            src={show ? Logo : Favicon}
            className="w-52 md:mx-auto"
            alt="logo"
          />
          <span
            onClick={() => {
              setShow(!show);
            }}
            className="absolute cursor-pointer -right-5 top-16 text-white"
          >
            <svg
              className={`bg-dark-100 hidden md:block p-px md:p-1.5 box-content rounded ${show && "rotate-180"}`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 12 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
              ></path>
            </svg>
          </span>
        </div>
        <div className={`relative w-full my-2.5 ${!show && "hidden"}`}>
          <input
            className="bg-dark-100 w-full text-white border-[1px] pl-10 border-white/10 hover:border-gray-400 transition-colors rounded-md py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Search for..."
          />

          <div className="absolute left-0 inset-y-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <div className={`bg-gray-500 mt-2 h-px w-full ${show && "hidden"}`} />
        {/* Links Section */}
        <div className="w-full px-2.5">
          <ul className="flex gap-7 flex-col">
            {links?.map((link, key) => {
              return (
                <li key={key}>
                  <a href={link.href}>
                    <div
                      className={`${
                        link.active ? "text-primary" : "text-gray-400"
                      } transition-all flex items-center ${
                        show ? "justify-between" : "justify-center"
                      } rounded-lg`}
                    >
                      <div className="h-5 gap-1.5 flex items-center">
                        <div className="relative">{link.icon}</div>
                        <h2 className={`text-base ${!show && "hidden"}`}>{link.title}</h2>
                      </div>
                      {link.arrow && (
                        <svg className={`${!show && "hidden"}`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="0.5em"
                          height="1em"
                          viewBox="0 0 12 24"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
                          ></path>
                        </svg>
                      )}
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Navbar */}
      {/* <Navbar /> */}
    </>
  );
};

export default Sidebar;
