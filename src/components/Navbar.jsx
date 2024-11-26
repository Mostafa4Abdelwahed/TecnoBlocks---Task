import Container from "./Container";

const Navbar = ({ setShow }) => {
  return (
    <div className="bg-dark-200 md:pl-[320px] lg:pl-[18rem]">
      <Container className="flex bg-dark-200 flex-wrap gap-3 md:gap-7 justify-between items-center py-5 px-4">
        <div className="flex items-center justify-between md:w-auto w-full">
          <h1 className="text-2xl font-medium text-white">Users</h1>
          <div
            onClick={() => setShow((prev) => !prev)}
            className="bg-dark-100 text-white block md:hidden border-[1px] border-white/20 p-1 rounded-md cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </div>
        </div>
        {/* Search Box */}
        <div className="relative grow">
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
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <button className="bg-primary grow lg:grow-0 text-white rounded-md block px-2.5 md:w-[200px] py-2.5">
          Add User
        </button>
      </Container>
    </div>
  );
};

export default Navbar;
