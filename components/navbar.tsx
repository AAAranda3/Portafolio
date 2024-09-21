"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import React from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      {/* Left side: Brand name */}
      <NavbarContent className="basis-1/5" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="text-2xl font-bold text-inherit text-primary">Arnau Álvarez</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Right side: Navigation items and other links */}
      <NavbarContent className="hidden lg:flex gap-8" justify="end">
        <ul className="flex gap-8">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={item.href}>
              <a
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium flex items-center"
                )}
                href={item.href}  // Use #section-id here
              >
                <span className="mr-2 font-bold text-ms text-primary">
                  {index < 9 ? `0${index + 1}.` : `${index + 1}.`}
                </span>
                {item.label}
              </a>
            </NavbarItem>
          ))}
        </ul>
        <Button
          as="a"
          href="/curriculum.pdf" // This will load the PDF
          color="primary"
          variant="ghost"
          target="_blank" // Opens the PDF in a new tab
          rel="noopener noreferrer" // Security best practice when using target="_blank"
        >
          Curriculum
        </Button>

        {/* External links (GitHub, ThemeSwitch, etc.) */}
        <NavbarItem className="flex gap-4">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu toggle */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <a
                href={item.href} // Use #section-id here
                className="hover:underline"
              >
                {item.label}
              </a>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
