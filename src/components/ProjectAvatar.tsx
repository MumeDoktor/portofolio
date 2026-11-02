import Image from "next/image";
import type { Project } from "@/content/projects";

const sizes = {
  sm: "size-7 rounded-md",
  md: "size-9 rounded-lg",
  lg: "size-12 rounded-xl sm:size-14",
};

/** The product's real app icon. Projects without one show nothing rather than a made-up tile. */
export function ProjectAvatar({ project, size = "md" }: { project: Project; size?: keyof typeof sizes }) {
  if (!project.avatar) return null;
  return (
    <Image
      src={project.avatar}
      alt=""
      sizes="56px"
      className={`shrink-0 border border-line bg-white object-contain ${sizes[size]}`}
    />
  );
}
