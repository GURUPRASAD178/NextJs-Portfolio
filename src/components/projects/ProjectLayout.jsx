import Image from "next/image";

const ProjectLayout = ({ name, description, date, demoLink, imageUrl }) => {
  return (
    <a
      href={demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="custom-bg block w-[70%] h-[100%] mx-auto bg-white/30 dark:bg-zinc-800/60 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:scale-95 transition-transform duration-300"
    >
      <div className="relative w-full h-40 sm:h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-2 border-b border-green-400 dark:border-green-300">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted">{description}</p>
        <p className="text-xs text-muted mt-1">{new Date(date).toDateString()}</p>
      </div>
    </a>
  );
};

export default ProjectLayout;
