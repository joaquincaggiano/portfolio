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
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import LocaleSwitcher from "./locale-switcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Header");
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";

  const menuItems = [
    { title: t("home"), link: "/" },
    { title: t("projects"), link: "/projects" },
    { title: t("experience"), link: "/experience" },
    { title: t("contact"), link: "/contact" },
  ];

  return (
    <header className="px-8 sm:px-16 md:px-24 lg:px-16 pt-8">
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
              style={{ color: pathname === item.link ? "#00a8ef" : "#FFF" }}
            >
              <Link href={item.link} className="hover:text-blueLight">
                {item.title}
              </Link>
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
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={item.link}
              >
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
