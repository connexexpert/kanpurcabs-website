import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  white?: boolean;
}

export default function Breadcrumbs({
  items,
  className,
  white = false,
}: BreadcrumbsProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `https://kanpurcabs.com${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={cn("flex items-center text-sm", className)}
      >
        <ol className="flex items-center space-x-2">
          <li>
            <Link
              href="/"
              className={cn(
                "flex items-center transition-colors",
                white
                  ? "text-white/80 hover:text-white"
                  : "text-slate-500 hover:text-blue-800",
              )}
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight
                className={cn(
                  "h-4 w-4",
                  white ? "text-white/50" : "text-slate-400",
                )}
              />
              {item.href && index !== items.length - 1 ? (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    white
                      ? "text-white/80 hover:text-white"
                      : "text-slate-500 hover:text-blue-800",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    "font-medium",
                    white ? "text-white" : "text-slate-900",
                  )}
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
