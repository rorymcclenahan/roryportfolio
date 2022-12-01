import { Link } from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a className="min-h-screen bg-black text-white">Rory McClenahan</a>
      </Link>
      <div>
        <ul>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          <Link href="/about">
            <a className="">About</a>
          </Link>
          <Link href="/resume">
            <a className="">Resume</a>
          </Link>
        </ul>
      </div>
    </div>
  );
}
