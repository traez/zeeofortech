import { LuMail } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { SiStackoverflow } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import { SiBlogger } from "react-icons/si";
import { ImOffice } from "react-icons/im";

const socialLinks = [
  {
    href: "mailto:traezeokafor@gmail.com",
    title: "Mail",
    Icon: LuMail,
    size: "24px",
  },
  {
    href: "https://github.com/traez",
    title: "GitHub",
    Icon: FaGithub,
    size: "22px",
  },
  {
    href: "https://linkedin.com/in/traez",
    title: "LinkedIn",
    Icon: AiOutlineLinkedin,
    size: "26px",
  },
  {
    href: "https://leetcode.com/u/traezeeofor",
    title: "LeetCode",
    Icon: SiLeetcode,
    size: "22px",
  },
  {
    href: "https://stackoverflow.com/users/6319061/trae-zeeofor",
    title: "StackOverflow",
    Icon: SiStackoverflow,
    size: "22px",
  },
  {
    href: "https://twitter.com/trae_z",
    title: "TwitterX",
    Icon: RiTwitterXLine,
    size: "22px",
  },
  {
    href: "http://www.traedays.com",
    title: "Blogger",
    Icon: SiBlogger,
    size: "22px",
  },
  {
    href: "https://zeeofor.tech",
    title: "Company",
    Icon: ImOffice,
    size: "22px",
  },
];

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-50 bg-[#9FE2BF] text-xs text-black border-[5px] border-black p-1 shadow-md flex flex-col justify-center items-center gap-1 md:flex-row md:justify-around max-w-[1280px]">
      <div className="">
        © {new Date().getFullYear()} Zeeofor Technologies. All rights reserved.
      </div>
      <div className="flex gap-1">
        {socialLinks.map(({ href, title, Icon, size }) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            className="
              p-1 rounded
              transition-all duration-300 ease-in-out
              hover:-translate-x-0.5 hover:-translate-y-0.5
              hover:shadow-[-2px_2px_0_0_rgba(44,92,77,0.5)]
              focus:outline-none focus:ring-2 focus:ring-[#2c5c4d] focus:ring-offset-2
              active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
            "
          >
            <Icon size={size} />
          </a>
        ))}
      </div>
    </footer>
  );
}
