import Link from "next/link"

const Navbar = () => (
  <div>
    <Link href="/">
      <a>Home page</a>
    </Link>
    <Link href="/about">
      <a>About page</a>
    </Link>
    <Link href="/contact">
      <a>Contact page</a>
    </Link>
  </div>
);

export default Navbar;
