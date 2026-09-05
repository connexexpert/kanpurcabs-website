import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-3 mb-10 md:mb-14",
        {
          "items-start text-left": align === "left",
          "items-center text-center": align === "center",
          "items-end text-right": align === "right",
        },
        className,
      )}
    >
      {subtitle && (
        <span className="text-accent-500 font-bold uppercase tracking-wider text-sm">
          {subtitle}
        </span>
      )}

      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 tracking-tight">
        {title}
      </h2>

      {/* Decorative line */}
      <div
        className={cn(
          "w-20 h-1 bg-accent-500 rounded-full mt-2 mb-4",
          align === "left" && "mr-auto",
          align === "center" && "mx-auto",
          align === "right" && "ml-auto",
        )}
      ></div>

      {description && (
        <p className="text-gray-600 max-w-2xl mt-2 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
