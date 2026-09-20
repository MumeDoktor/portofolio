import Image from "next/image";
import type { Project } from "@/content/projects";

const sizes = {
  sm: "size-9 rounded-[0.6rem] p-1.5 text-sm",
  md: "size-12 rounded-xl p-2 text-lg sm:size-14 sm:text-xl",
  lg: "size-16 rounded-2xl p-2.5 text-2xl sm:size-20 sm:p-3 sm:text-3xl",
};

export function ProjectAvatar({ project, size = "md" }: { project: Project; size?: keyof typeof sizes }) {
  const initials = project.title
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden border border-line shadow-sm ${sizes[size]} ${
        project.avatar ? "bg-white" : "bg-surface font-serif text-accent"
      }`}
      aria-hidden
    >
      {project.avatar ? (
        <Image src={project.avatar} alt="" sizes="80px" className="size-full object-contain" />
      ) : (
        initials
      )}
    </span>
  );
}
