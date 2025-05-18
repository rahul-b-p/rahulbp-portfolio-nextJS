import { ProjectCardProps } from "@/interfaces/portfolio";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div key={project.id} className="group relative overflow-hidden">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        width={300}
        height={200}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link target="_blank" href={project.link}>
          <div className="text-white text-center p-4">
            <h3 className="text-lg font-medium">{project.title}</h3>
            <p className="text-sm text-gray-300">{project.category}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
