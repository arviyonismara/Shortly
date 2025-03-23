import "./App.css";

function App() {
  return (
    <>
      {/* Nav Container */}
      <nav className="relative container mx-auto p-6">
        {/* Flex Container For All Items */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20">
            {/* Logo */}
            <img src="images/logo.svg" alt="" />
            {/* Left Menu */}
            <div className="hidden space-x-8 font-bold lg:flex">
              <a
                href=""
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Features
              </a>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
            <a href="" className="hover:text-veryDarkViolet">
              Login
            </a>
            <a
              href=""
              className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
            >
              Sign Up
            </a>
          </div>

          {/* Todo Hamburger Menu */}
        </div>

        {/* Todo Mobile Menu */}
      </nav>
    </>
  );
}

export default App;
