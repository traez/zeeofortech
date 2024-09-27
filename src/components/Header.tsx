"use client";
import Link from "next/link";
import { LuMail } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SiLeetcode, SiStackoverflow } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-[#9FE2BF] text-black border-b-[5px] border-black p-1 shadow-md -mx-4 mb-4 flex flex-col justify-center items-center gap-1 md:flex-row md:justify-between">
      <Link
        href="/"
        className="text-2xl font-bold whitespace-nowrap hover:bg-[#2c5c4d] hover:text-white p-1 rounded transition duration-300"
      >
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
            href="https://dev.to/trae_z"
            target="_blank"
            className="hover:bg-[#2c5c4d] hover:text-white p-1 rounded transition duration-300"
          >
            Writings
          </Link>
          <section className="relative group">
            <button className="hover:bg-[#2c5c4d] hover:text-white p-1 rounded transition duration-300">
              Contact
            </button>
            <article className="absolute right-0 mt-2 w-48 bg-[#9FE2BF] border-[2px] border-black rounded-md shadow-lg py-1 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a
                href="mailto:traezeokafor@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <LuMail size="18px" />
                <span>Mail</span>
              </a>
              <a
                href="https://github.com/traez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaGithub size="18px" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/traez/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <AiOutlineLinkedin size="18px" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://leetcode.com/u/traezeeofor/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <SiLeetcode size="18px" />
                <span>LeetCode</span>
              </a>
              <a
                href="https://stackoverflow.com/users/6319061/trae-zeeofor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <SiStackoverflow size="18px" />
                <span>StackOverflow</span>
              </a>
              <a
                href="https://twitter.com/trae_z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <RiTwitterXLine size="18px" />
                <span>Twitter</span>
              </a>
            </article>
          </section>
        </menu>
      </aside>
    </nav>
  );
}
