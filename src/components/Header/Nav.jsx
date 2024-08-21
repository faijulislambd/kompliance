import Button from "../../utils/Button/Button";

const Nav = () => {
  return (
    <div className="flex flex-col justify-center items-end">
      {/*Top Nav*/}
      <nav className="mb-8">
        <ul className="flex items-center space-x-4 font-thin">
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white"
            >
              Career
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white"
            >
              Clients
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white"
            >
              Contact
            </a>
          </li>
          <li className="text-white">|</li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white"
            >
              FR
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        {/*Bottom Nav*/}
        <nav className="flex items-center space-x-5">
          <ul className="flex space-x-11 text-2xl font-bold text-white">
            <li>
              <a
                href="http://expertise/payroll/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Payroll
              </a>
            </li>
            <li>
              <a
                href="http://expertise/hris/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                HRIS
              </a>
            </li>
            <li>
              <a
                href="http://job-offers/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Job Offers
              </a>
            </li>
            <li>
              <a
                href="http://resources/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resources
              </a>
            </li>
          </ul>
          <Button text="Tell us about your project"></Button>
        </nav>
      </nav>
    </div>
  );
};

export default Nav;
