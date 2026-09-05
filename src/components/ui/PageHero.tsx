import Breadcrumbs, { BreadcrumbItem } from "./Breadcrumbs";
import { cn } from "@/lib/utils";

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  className,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        "relative bg-blue-900 overflow-hidden py-16 md:py-24",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-10 pattern-dots" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-900/50" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex justify-center">
            <Breadcrumbs items={breadcrumbs} white />
          </div>
        )}
      </div>
    </div>
  );
}
