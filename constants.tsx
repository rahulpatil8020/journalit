import { SideNavItem } from "./types";
import { GoHome } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { MdExplore, MdFavorite, MdOutlineViewTimeline } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { TbTimelineEventFilled } from "react-icons/tb";
import { RiPagesFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome className="h-5 w-5" />,
  },
  {
    title: "Blogs",
    path: "/blogs",
    icon: <RiPagesFill className="h-5 w-5" />,
  },
  {
    title: "Explore",
    path: "/explore",
    icon: <MdExplore className="h-5 w-5" />,
  },
  {
    title: "Favorites",
    path: "/favorites",
    icon: <MdFavorite className="h-5 w-5" />,
  },
  {
    title: "Timeline",
    path: "/timeline",
    icon: <TbTimelineEventFilled className="h-5 w-5" />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoMdSettings className="h-5 w-5" />,
  },
];
