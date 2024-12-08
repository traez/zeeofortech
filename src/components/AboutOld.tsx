"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-between gap-4">
      <div className="cursor-pointer relative h-[298px] w-[224px] sm:h-[373px] sm:w-[280px] shadow-[8px_8px_0_0_rgba(0,0,0,0.4)] rounded-2xl">
        <Image
          src={`/profile-potrait.jpg`}
          alt=""
          fill
          sizes="(min-width: 400px) 100vw"
          className="rounded-2xl"
        />
      </div>
      <article className="p-6 mx-4 text-lg bg-[#9FE2BF] text-gray-800 rounded-lg border-[5px] border-black">
        <h1 className="text-2xl font-bold mb-4">Hi there, welcome!</h1>
        <p className="mb-4">
          I&apos;m <span className="font-semibold">Tochukwu R. Ezeokafor</span>,
          though I&apos;m better known online by my pseudonym,{" "}
          <span className="italic text-blue-600">Trae Zeeofor</span>.
        </p>
        <p className="mb-4">
          I’m a{" "}
          <span className="line-through">Sales and Property Management professional</span> turned <span className="font-bold text-blue-600 dark:text-blue-400">Fullstack Software Developer</span>
          . Yes, I currently{" "}
          <span className="italic">“code, therefore I am”</span>.{" "}
          <span role="img" aria-label="wink" className="inline-block">
            😋
          </span>
        </p>
        <p className="mb-4">
          Operating under the brand{" "}
          <span className="font-semibold text-indigo-700">
            Zeeofor Technologies
          </span>{" "}
          out of <span className="font-medium">Abuja, Nigeria</span>, I’m
          dedicated to using code to solve{" "}
          <span className="font-medium">real-world problems</span>—whether
          locally or remotely.
        </p>
        <p className="mb-4">
          When I’m not bonding with my son, you’ll probably find me programming
          and collaborating with others, primarily using the{" "}
          <span className="font-semibold text-green-600">Tailwind CSS</span>,{" "}
          <span className="font-semibold text-blue-500">TypeScript</span>,{" "}
          <span className="font-semibold text-[#7e7c58]">Next.js</span>, and{" "}
          <span className="font-semibold text-yellow-600">PostgreSQL</span> stack.
        </p>
        <p className="mb-4">
          For me,{" "}
          <span className="font-semibold italic">upskilling never stops</span>,
          so I’m currently expanding my knowledge by learning about <span className="font-semibold italic">other related technologies</span>.</p>
        <p className="mt-6">
          <span className="font-semibold">
            If you’re as passionate about turning ideas into solutions as I am,
          </span>{" "}
          let’s <span className="text-indigo-600 font-bold">connect</span> and{" "}
          <span className="font-semibold text-green-700">
            build something amazing together!
          </span>
        </p>
      </article>
    </section>
  );
}
