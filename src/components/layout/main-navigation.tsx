"use client";

import { cn } from "@/lib/utils";
import { Dices, PackageOpen, ScanBarcode } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  {
    label: "Jeux de société",
    mobileLabel: "Jeux",
    href: "/",
    icon: <Dices size={20} />,
  },
  {
    label: "Boîtes de rangements",
    mobileLabel: "Boîtes",
    href: "/storage",
    icon: <PackageOpen size={20} />,
  },
  {
    label: "Mode rangement",
    mobileLabel: "Rangement",
    href: "/storage-mode",
    icon: <ScanBarcode size={20} />,
  },
];

export function MainNavigation({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <div className="fixed bg-white/25 border border-white/50 backdrop-saturate-150	 backdrop-blur-sm grid place-items-center bottom-0 left-0 right-0 py-2 px-4 md:block md:static md:p-0">
      <nav
        className={cn(
          "grid grid-cols-3 w-full md:w-auto gap-x-1 md:inline-flex md:h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
          className,
        )}
        {...props}
      >
        {navigationLinks.map(({ href, label, mobileLabel, icon }) => {
          const isActive =
            href === "/"
              ? pathname === href || pathname === "/game"
              : pathname.split("/").at(1) === href.split("/").at(1);

          return (
            <Link
              key={`nav-item-${href}`}
              href={href}
              className={cn(
                "inline-flex flex-col md:flex-row gap-y-1 gap-x-2 items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-background ",
                isActive && "bg-background text-foreground shadow-sm",
              )}
            >
              {icon}
              <span className="block md:hidden text-xs">{mobileLabel}</span>
              <span className="hidden md:block">{label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
