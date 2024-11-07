import ThemeSwitcher from "./ThemeSwitcher";


const Navbar = () => {
    return (  
        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-red-600 text-white">
        <li><a href="/">Home</a></li>
        {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
        <li><a href="/pokemon">Pokemon</a></li>
        <li>
        <ThemeSwitcher />
      </li>
      </ul>
    </div>
    <img src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg" alt="" className="h-10" />
    {/* <a className="btn btn-ghost text-xl" ></a> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href="/">Home</a></li>
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
      <li><a href="/pokemon">Pokemon</a></li>
      <li>
        <ThemeSwitcher />
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn ">Button</a>
  </div>
</div>
    );
}
 
export default Navbar;