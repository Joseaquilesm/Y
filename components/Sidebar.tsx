"use client";
import React from "react";
import type { FC, SVGProps } from "react";
import Image from "next/image";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  InboxIcon,
  BookmarkIcon,
  UserIcon,
  BellIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import UserInfo from "../components/UserInfo";

const Sidebar = () => {
  return (
    <nav className="h-screen hidden sm:flex flex-col sticky top-0 xl:ml-20 ">
      <div className="relative h-full">
        <div className="mt-4 mb-8">
          <Image src={"/assets/Y-logo.svg"} alt="logo" width={48} height={48} />
        </div>
        <ul>
          <SidebarLink text="Home" Icon={HomeIcon} />
          <SidebarLink text="Explore" Icon={MagnifyingGlassIcon} />
          <SidebarLink text="Notifications" Icon={BellIcon} />
          <SidebarLink text="Messages" Icon={InboxIcon} />
          <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarLink text="Profile" Icon={UserIcon} />
          <SidebarLink text="More" Icon={EllipsisHorizontalCircleIcon} />
          <button
            className="hidden sm:inline-block border-2 bg-[#415d43] rounded-full text-white font-bold 
  py-2 px-6 md:py-3 md:px-16"
          >
            Post
          </button>
        </ul>
        <UserInfo />
      </div>
    </nav>
  );
};

type SidebarLinkProps = {
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
};

function SidebarLink({ text, Icon }: SidebarLinkProps) {
  return (
    <li className="flex items-center text-xl mb-5 ml-2 space-x-1">
      <Icon className="h-7" />
      <span className="hidden xl:block">{text}</span>
    </li>
  );
}

export default Sidebar;
