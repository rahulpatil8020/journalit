import { SideNavItem } from "./types";
import { GoHome } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import {
  MdOutlineExplore,
  MdOutlineFavoriteBorder,
  MdOutlineViewTimeline,
} from "react-icons/md";
export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <GoHome height={24} width={24} />,
  },
  {
    title: "Blogs",
    path: "/blogs",
    icon: <RiPagesLine height={24} width={24} />,
  },
  {
    title: "Explore",
    path: "/explore",
    icon: <MdOutlineExplore height={24} width={24} />,
  },
  {
    title: "Favorites",
    path: "/favorites",
    icon: <MdOutlineFavoriteBorder height={24} width={24} />,
  },
  {
    title: "Timeline",
    path: "/timeline",
    icon: <MdOutlineViewTimeline height={24} width={24} />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoSettingsOutline height={24} width={24} />,
  },
];
