import { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Work - Zeeofor Technologies",
  description: "Created by Trae Zeeofor",
};

export default function WorkPage() {
  return (
    <>
      <Projects/>
    </>
  );
}
