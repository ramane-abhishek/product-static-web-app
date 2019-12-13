import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li>
    <Link
      className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
)

export default ({ children }) => (
  <div className="container font-sans w-full px-6 lg:px-16 ">
    <header className="flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center">
        <Link to="/">
          <h3>Material Handling</h3>
        </Link>
      </div>

      <label for="menu-toggle" className="pointer-cursor lg:hidden block">
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
          <ListLink to="/">Home</ListLink>
          <ListLink to="/products">Products</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </div>
    </header>
    <div className="container">{children}</div>
  </div>
)
