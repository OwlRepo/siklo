"use client";
import { usePathname } from "next/navigation";
import { Maps, Channels, Settings } from "../assets/icons";
import Link from "next/link";

function MainLayout({ children }) {
  const pathname = usePathname();
  const TAB_ROUTES = [
    {
      name: "Maps",
      href: "/main/maps",
      icon: <Maps stroke={pathname === "/main/maps" ? "#055FFC" : "black"} />,
    },
    {
      name: "Channels",
      href: "/main/channels",
      icon: (
        <Channels
          stroke={pathname === "/main/channels" ? "#055FFC" : "black"}
        />
      ),
    },
    {
      name: "Settings",
      href: "/main/settings",
      icon: (
        <Settings
          stroke={pathname === "/main/settings" ? "#055FFC" : "black"}
        />
      ),
    },
  ];

  return (
    <div className="relative h-[100vh] bg-siklo-background overflow-y-auto">
      <div className="p-5 h-full">{children}</div>
      <div className="flex fixed bottom-0 w-full bg-white/90 h-[70px] justify-center space-x-14">
        {TAB_ROUTES.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            className="flex flex-col items-center justify-center"
          >
            {tab.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MainLayout;
