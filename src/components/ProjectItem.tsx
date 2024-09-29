import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";

interface ProjectItemProps {
  name: string;
  screenshot: string;
  sourceCode: string;
  website: string;
  relevance: string;
}

export default function ProjectItem({
  name,
  screenshot,
  sourceCode,
  website,
  relevance,
}: ProjectItemProps) {
  return (
    <div className="bg-white border-2 border-black rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={screenshot}
          alt={`Screenshot of ${name}`}
          fill
          sizes="(min-width: 400px) 100vw"
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-sm mb-4 h-24 overflow-y-auto">
          {relevance.length > 300
            ? `${relevance.substring(0, 300)}...`
            : relevance}
        </p>
        <div className="flex justify-between items-center">
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#2c5c4d] hover:text-[#9FE2BF] transition-colors duration-300"
          >
            <FaGithub size="20" />
            <span>SourceCode</span>
          </a>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#2c5c4d] hover:text-[#9FE2BF] transition-colors duration-300"
          >
            <FaGlobe size="20" />
            <span>Website</span>
          </a>
        </div>
      </div>
    </div>
  );
}
