import { CgMail } from "react-icons/cg";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-50 bg-[#9FE2BF] text-xs text-black border-t-[5px] border-black p-1 shadow-md -mx-4 mt-4 flex flex-col justify-center items-center gap-1 md:flex-row md:justify-around">
      <div className="">
        © {new Date().getFullYear()} Zeeofor Technologies. All rights reserved.
      </div>
      <div className="flex gap-[1px]">
        <a
          href="mailto:traezeokafor@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Mail"
          className="hover:bg-[#2c5c4d] p-1 rounded transition duration-300"
        >
          <CgMail size="26px"/>
        </a>
        <a
          href="https://github.com/zeeofor"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#2c5c4d] p-1 rounded transition duration-300"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/zeeofor"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#2c5c4d] p-1 rounded transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/zeeofor"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#2c5c4d] p-1 rounded transition duration-300"
        >
          LeetCode
        </a>
        <a
          href="https://twitter.com/zeeofor"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#2c5c4d] p-1 rounded transition duration-300"
        >
          StackOverFlow
        </a>
        <a
          href="https://twitter.com/zeeofor"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#2c5c4d] p-1 rounded transition duration-300"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}
