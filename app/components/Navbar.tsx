import Link from "next/link";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1>Simple Shop</h1>
      </div>

      <div className="nav-links">
        <Link href={"/"}>Home</Link>
        <Link href={"/cart"}>Cart (0)</Link>
      </div>
    </nav>
  );
}
