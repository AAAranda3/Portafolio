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

import { Button } from "@nextui-org/react";

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
          <a className="flex justify-start items-center gap-1" href="#about">
            <p className="text-2xl font-bold text-inherit text-primary">
              Arnau Álvarez
            </p>
          </a>
        </NavbarBrand>
      </NavbarContent>

      {/* Right side: Navigation items and other links */}
      <NavbarContent className="hidden lg:flex gap-8" justify="end">
        <ul className="flex gap-8">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={item.href}>
              <a
                className={clsx(
                  "flex items-center transition-transform duration-300 ease-in-out", // Smooth transition for scaling
                  "hover:scale-110" // Scaling effect on hover
                )}
                href={item.href}
              >
                <span className="mr-2 font-bold text-ms text-primary">
                  {index < 9 ? `0${index + 1}.` : `${index + 1}.`}
                </span>
                {item.label}
              </a>
            </NavbarItem>
          ))}
        </ul>

        {/* Curriculum Button */}
        <Button
          as="a"
          href="/curriculum.pdf"
          color="primary"
          variant="ghost"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curriculum
        </Button>

        {/* External links (GitHub, ThemeSwitch, etc.) */}
        <NavbarItem className="flex gap-4">
          <a aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </a>
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
              <a href={item.href} className="hover:underline">
                {item.label}
              </a>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
