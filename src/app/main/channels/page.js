"use client";
import { CallAction, DropCall, ProfileLink } from "@/app/assets/icons";
import { MockChannelMembers, MockPicture } from "@/app/assets/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus, Search, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function Header() {
  return (
    <div className="flex items-stretch h-[60px] space-x-2">
      <div className="flex items-center justify-between px-5 bg-white text-gray-400 h-full w-full rounded-full shadow-none">
        <b className="text-sub-header-5">Search</b>
        <Search className="text-black" />
      </div>
      <Button
        variant="ghost"
        className="h-[56px] w-[56px] rounded-full bg-white"
      >
        <ProfileLink />
      </Button>
      <Button
        variant="ghost"
        className="h-[56px] w-[56px] rounded-full bg-siklo-accent text-white"
      >
        <Plus />
      </Button>
    </div>
  );
}

function Sections() {
  const [activeSectionHref, setActiveSectionHref] = useState("#all");
  const SECTIONS = [
    {
      name: "All",
      href: "#all",
    },
    {
      name: "Recent",
      href: "#recent",
    },
    {
      name: "Friends",
      href: "#friends",
    },
    {
      name: "Channels",
      href: "#channels",
    },
    {
      name: "Requests",
      href: "#requests",
    },
    {
      name: "Blocked",
      href: "#blocked",
    },
  ];
  return (
    <div className="w-full flex overflow-x-auto">
      {SECTIONS.map((section) => (
        <p
          key={section.name}
          className={cn(
            "p-3 text-sub-header-6 rounded-full font-sub-header",
            section.href === activeSectionHref
              ? "text-siklo-primary"
              : "text-black"
          )}
          onClick={() => setActiveSectionHref(section.href)}
        >
          {section.name}
        </p>
      ))}
    </div>
  );
}

const sectionDatas = [
  {
    type: "active-channel",
    title: "Ongoing Call",
    data: [
      {
        img: MockChannelMembers,
        name: "Adam",
        time: "Today, 12:30 PM",
      },
    ],
  },
  {
    type: "active",
    title: "Ongoing Call",
    data: [
      {
        img: MockPicture,
        name: "Adam",
        time: "Today, 12:30 PM",
      },
    ],
  },
  {
    type: "normal",
    title: "Recent Call",
    data: [
      {
        img: MockPicture,
        name: "Adam",
        time: "Today, 12:30 PM",
      },
    ],
  },
  {
    type: "normal",
    title: "Friends",
    data: [
      {
        img: MockPicture,
        name: "Adam",
        time: "Today, 12:30 PM",
      },
      {
        img: MockPicture,
        name: "Adam",
        time: "Today, 12:30 PM",
      },
      {
        img: MockPicture,
        name: "Adam",
        time: "Today, 12:30 PM",
      },
    ],
  },
  {
    type: "normal",
    title: "Channels",
    data: [
      {
        img: MockChannelMembers,
        name: "hashira's",
        time: "Today, 12:30 PM",
      },
      {
        img: MockChannelMembers,
        name: "Mavix, Brian, and 3 more",
        time: "Today, 12:30 PM",
      },
      {
        img: MockChannelMembers,
        name: "Moon Riders",
        time: "Today, 12:30 PM",
      },
    ],
  },
];

function SectionCards({ type = "normal", title = "sectionTitle", data }) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-3 w-full p-[8px] rounded-[8px] bg-white border-2 text-gray-400",
        (type === "active" || type === "active-channel") &&
          "border-siklo-accent text-siklo-accent"
      )}
    >
      <p
        className={cn(
          "text-sub-header-6 font-sub-header",
          (type === "active" || type === "active-channel") &&
            "text-siklo-accent"
        )}
      >
        {title}
      </p>

      {data.map((data, index) => {
        return (
          <div
            key={data.name + index}
            className="flex flex-row items-center justify-between"
          >
            <div className="flex items-center space-x-2">
              <Image
                alt="img"
                src={data.img}
                className="h-[42px] w-[42px] rounded-[8px]"
              />
              <div className="flex flex-col">
                <p className="text-[14px] text-black">{data.name}</p>
                <p className="text-[14px] text-gray-400">{data.time}</p>
              </div>
            </div>
            {type === "active" && <DropCall />}
            {type === "active-channel" && (
              <Button className="rounded-full h-[28px]">Join now</Button>
            )}
            {type === "normal" && <CallAction />}
          </div>
        );
      })}
    </div>
  );
}

export default function Channels() {
  return (
    <div className="flex flex-col items-stretch space-y-3 pb-[100px]">
      <Header />
      <Sections />
      {sectionDatas.map((data, index) => (
        <SectionCards
          key={data.title + index}
          data={data.data}
          title={data.title}
          type={data.type}
        />
      ))}
    </div>
  );
}
