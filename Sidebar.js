import React from "react";
import "./Sidebar.css";
import "./SidebarOption.js";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import Button from "@mui/material/Button";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={Grid3x3Icon} text="Explore" />
      <SidebarOption Icon={MailOutlineIcon} text="Notifications" />
      <SidebarOption Icon={Diversity1Icon} text="Messages" />
      <SidebarOption Icon={FeaturedPlayListOutlinedIcon} text="Bookmarks" />
      <SidebarOption Icon={NotificationsIcon} text="Lists" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      {/* Sidebar Option */}
      {/* Sidebar Option */}
      {/* Sidebar Option */}
      {/* Sidebar Option */}
      {/* Sidebar Option */}
      {/* Sidebar Option */}
      {/* Sidebar Option */}
      {/* Sidebar Option */}

      {/* Button->Tweet */}

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
