"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { useTranslations } from "next-intl";
import { useSelectedLayoutSegment } from "next/navigation";
import LocaleSwitcher from "./locale-switcher";
import { Link } from "@/i18n/routing";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Header");
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";

  const menuItems = [
    { title: t("home"), link: "/" },
    { title: t("projects"), link: "/projects" },
    { title: t("experience"), link: "/experience" },
  ];

  return (
    <header className="px-8 sm:px-16 md:px-24 lg:px-16 pt-8 mb-8">
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-transparent"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="hidden md:flex">
            <span className="font-bold text-xl">
              <span className="text-blueLight">{"<J"}</span>oaquín{" "}
              <span className="text-blueLight">{"/>"}</span>
            </span>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem
              key={`${item}-${index}`}
              className={`font-medium ${
                pathname === item.link ? "text-blueLight" : "text-white"
              } hover:text-blueLight`}
            >
              <Link href={item.link}>{item.title}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Switcher */}
        <NavbarContent justify="end">
          <NavbarItem>
            <LocaleSwitcher />
          </NavbarItem>
        </NavbarContent>

        {/* Items menu hamburguesa */}
        <NavbarMenu className="bg-gradient-to-br from-black to-zinc-700 mt-10">
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className={`font-medium ${
                pathname === item.link ? "text-blueLight" : "text-white"
              } hover:text-blueLight`}
            >
              <Link href={item.link}>
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default Header;
