"use client";

import { Home, TestTube } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const links = [
  { Icon: Home, label: "Home", href: "/" },
  { Icon: TestTube, label: "Test", href: "/test" },
];

export default function Menu() {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col gap-1">
      {links.map(({ Icon, label, href }, index) => {
        const isCurrentPath = pathname === href;
        return (
          <li key={index}>
            <Link
              className={cn(
                "flex items-center gap-2 rounded-lg px-4 py-2",
                isCurrentPath && "bg-black text-white",
                !isCurrentPath && "text-black hover:bg-black/10",
              )}
              href={href}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
