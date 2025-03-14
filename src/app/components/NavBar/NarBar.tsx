"use client"; 

import Link from "next/link";
//our nav bar
//I havent made the burger element yet
//just a basic nav 

export default function Navbar() {

  return (
    <nav className="navbar">
      {/* Logo or Brand Name */}
      <div className="logo">
        <h1>Home Page</h1>
      </div>
      <ul className="nav-links desktop">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Hubs">All Hubs</Link>
        </li>
        <li>
          <Link href="/AboutUs">About us</Link>
        </li>
        <li>
          <Link href="/Rules">Community Rules</Link>
        </li>
      </ul>
    </nav>
  );
}