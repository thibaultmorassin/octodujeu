"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  {
    label: "Jeux de société",
    href: "/",
  },
  {
    label: "Boîtes de angements",
    href: "/rangements",
  },
];

export function MainNavigation({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className,
      )}
      {...props}
    >
      {navigationLinks.map(({ href, label }) => {
        const isActive =
          href === "/"
            ? pathname === href || pathname === "/game"
            : pathname.startsWith(href);

        return (
          <Link
            key={`nav-item-${href}`}
            href={href}
            className={cn(
              "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              isActive && "bg-background text-foreground shadow-sm",
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
