import Link from "next/link";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-[#9FE2BF] text-black border-b-[5px] border-black p-1 shadow-md -mx-4 mb-4 flex flex-col justify-center items-center gap-1 md:flex-row md:justify-between">
      <Link href="/" className="text-2xl font-bold whitespace-nowrap hover:bg-[#2c5c4d] hover:text-white p-1 rounded transition duration-300">
        Zeeofor Technologies
      </Link>
      <aside className="flex flex-col justify-center items-center gap-2 sm:flex-row sm:justify-between sm:w-full md:justify-end text-base font-semibold">
        <menu className="flex flex-row gap-2">
          <Link
            href="/"
            className="hover:bg-[#2c5c4d] hover:text-white p-1 rounded transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:bg-[#2c5c4d] hover:text-white p-1 rounded transition duration-300"
          >
            About
          </Link>
          <Link
            href="/skills"
            className="hover:bg-[#2c5c4d] hover:text-white p-1 rounded transition duration-300"
          >
            Skills
          </Link>
        </menu>
        <menu className="flex flex-row gap-2">
          <Link
            href="/work"
            className="hover:bg-[#2c5c4d] hover:text-white p-1 rounded transition duration-300"
          >
            Work
          </Link>
          <Link
            href="/writings"
            className="hover:bg-[#2c5c4d] hover:text-white p-1 rounded transition duration-300"
          >
            Writings
          </Link>
          <Link
            href="/contact"
            className="hover:bg-[#2c5c4d] hover:text-white p-1 rounded transition duration-300"
          >
            Contact
          </Link>
        </menu>
      </aside>
    </nav>
  );
}
