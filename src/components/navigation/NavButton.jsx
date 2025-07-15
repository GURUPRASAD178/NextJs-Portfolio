import {
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const getIcon = (icon) => {
  const iconProps =
    "w-full h-auto text-green-300 drop-shadow-[0_0_3px_#86efac]";
  const stroke = 2.5; // Thicker stroke

  switch (icon) {
    case "home":
      return <Home className={iconProps} strokeWidth={stroke} />;
    case "about":
      return <User className={iconProps} strokeWidth={stroke} />;
    case "projects":
      return <Palette className={iconProps} strokeWidth={stroke} />;
    case "contact":
      return <Phone className={iconProps} strokeWidth={stroke} />;
    case "github":
      return <Github className={iconProps} strokeWidth={stroke} />;
    case "linkedin":
      return <Linkedin className={iconProps} strokeWidth={stroke} />;
    case "twitter":
      return <Twitter className={iconProps} strokeWidth={stroke} />;
    case "resume":
      return <NotebookText className={iconProps} strokeWidth={stroke} />;
    default:
      return <Home className={iconProps} strokeWidth={stroke} />;
  }
};


const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const NavLink = motion(Link);

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50 text-green-500"
            style={{ transform: `translate(${x}, ${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground  rounded-full flex items-center justify-center
        custom-bg text-white-500
        "
              aria-label={label}
              name={label}
              prefetch={false}
              scroll={false}
            >
              <span className="relative  w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
                {getIcon(icon)}

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="w-fit cursor-pointer z-50">
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground  rounded-full flex items-center justify-center
        custom-bg text-green-500
        "
              aria-label={label}
              name={label}
              prefetch={false}
              scroll={false}
            >
              <span className="relative  w-10 h-10  xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
                {getIcon(icon)}

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                    labelDirection === "left" ? "right-full left-auto" : ""
                  )}
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
