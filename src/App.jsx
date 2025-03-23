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

      {/* Hero Section */}
      <section id="hero">
        {/* Hero Container */}
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          {/* Content Container */}
          <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
            <h1 className="text-5xl font-bold text-center text-veryDarkViolet lg:text-left lg:text-6xl">
              {" "}
              More Than just Shorter Links
            </h1>
            <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="mx-auto lg:mx-0">
              <a
                href=""
                className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="mb-24 mx-auto md:w-180 lg:w-1/2 lg:mb-0">
            <img src="images/illustration-working.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
