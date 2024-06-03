"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import JournalIt from "../public/JournalIt.png";
import { usePathname } from "next/navigation";

import { SIDENAV_ITEMS } from "@/constants";
import { SideNavItem } from "@/types";
import { IoIosArrowUp } from "react-icons/io";

const SideNav = () => {
  return (
    <div className="md:w-60 bg-white h-screen flex-1 fixed border0r border-zinc-200 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className={`flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full`}
        >
          <Image src={JournalIt} alt="logo image" width={25} height={25} />
          <span className="font-bold text-xl hidden md:flex">Journal It</span>
        </Link>
        <div className="flex flex-col space-y-2 md:px-6">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen((prev) => !prev);
  };
  return (
    <div>
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.path) ? "bg-zinc-100" : ""
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-semibold text-xl flex">{item.title}</span>
            </div>
            <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
              <IoIosArrowUp height={24} width={24} />
            </div>
          </button>
          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? "font-bold" : ""
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
            item.path === pathname ? "bg-zinc-100" : ""
          }`}
        >
          {item.icon}
          <span className="font-semibold text-xl flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};
