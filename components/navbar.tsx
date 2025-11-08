"use client";
import React, { useState, useEffect } from "react";
import { Logo } from "./logo";
import { Container } from "./container";
import Link from "next/link";
import { Button } from "./button";
import { BookDemoButton } from "./book-demo-button";
import { CloseIcon, HamburgerIcon } from "@/icons/general";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ModeToggle } from "./mode-toggle";
import type { Header } from "@/payload-types";

// Default items as fallback
const defaultItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

type NavbarProps = {
  data?: Header;
};

export const Navbar = ({ data }: NavbarProps) => {
  // Use Payload data or fallback to defaults
  const navLinks = data?.navLinks || defaultItems;
  const ctaText = data?.ctaButton?.text || "Book a Demo";
  const ctaHref = data?.ctaButton?.href || "/contact";

  return (
    <Container as="nav" className="">
      <DesktopNav items={navLinks} ctaText={ctaText} ctaHref={ctaHref} />
      <MobileNav items={navLinks} ctaText={ctaText} ctaHref={ctaHref} />
    </Container>
  );
};

const MobileNav = ({ items, ctaText, ctaHref }: {
  items: { label?: string | null; href?: string | null }[];
  ctaText: string;
  ctaHref: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-between p-2 md:hidden">
      <Logo />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="shadow-aceternity flex size-6 flex-col items-center justify-center rounded-md"
        aria-label="Toggle menu"
      >
        <HamburgerIcon className="size-4 shrink-0 text-gray-600" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] h-full w-full bg-white shadow-lg dark:bg-neutral-900"
          >
            <div className="absolute right-4 bottom-4">
              <ModeToggle />
            </div>

            <div className="flex items-center justify-between p-2">
              <Logo />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="shadow-aceternity flex size-6 flex-col items-center justify-center rounded-md"
                aria-label="Toggle menu"
              >
                <CloseIcon className="size-4 shrink-0 text-gray-600" />
              </button>
            </div>
            <div className="divide-divide border-divide mt-6 flex flex-col divide-y border-t">
              {items.map((item, index) => (
                <Link
                  href={item.href || "#"}
                  key={item.label || index}
                  className="px-4 py-2 font-medium text-gray-600 transition duration-200 hover:text-neutral-900 dark:text-gray-300 dark:hover:text-neutral-300"
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    key={item.label || index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}
              <div className="mt-4 p-4">
                <BookDemoButton className="w-full">
                  {ctaText}
                </BookDemoButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DesktopNav = ({
  items,
  ctaText,
  ctaHref,
}: {
  items: { label?: string | null; href?: string | null }[];
  ctaText: string;
  ctaHref: string;
}) => {
  return (
    <div className="hidden items-center justify-between px-4 py-4 md:flex">
      <Logo />
      <div className="flex items-center gap-10">
        {items.map((item, index) => (
          <Link
            className="font-medium text-gray-600 transition duration-200 hover:text-neutral-900 dark:text-gray-300 dark:hover:text-neutral-300"
            href={item.href || "#"}
            key={item.label || index}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <BookDemoButton>
          {ctaText}
        </BookDemoButton>
      </div>
    </div>
  );
};

const FloatingNav = ({
  items,
  ctaText,
  ctaHref,
}: {
  items: { label?: string | null; href?: string | null }[];
  ctaText: string;
  ctaHref: string;
}) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";

      if (scrollY > 100) {
        // Only show/hide after scrolling past 100px
        if (direction === "down") {
          setHidden(true); // Hide when scrolling down
        } else {
          setHidden(false); // Show when scrolling up
        }
      } else {
        // Always hide when at the top
        setHidden(true);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return (
    <motion.div
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="shadow-aceternity fixed inset-x-0 top-0 z-50 mx-auto hidden max-w-[calc(80rem-4rem)] items-center justify-between bg-white/80 px-2 py-2 backdrop-blur-sm md:flex xl:rounded-2xl dark:bg-neutral-900/80 dark:shadow-[0px_2px_0px_0px_var(--color-neutral-800),0px_-2px_0px_0px_var(--color-neutral-800)]"
    >
      <Logo />
      <div className="flex items-center gap-10">
        {items.map((item, index) => (
          <Link
            className="font-medium text-gray-600 transition duration-200 hover:text-neutral-900 dark:text-gray-300 dark:hover:text-neutral-300"
            href={item.href || "#"}
            key={item.label || index}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <BookDemoButton>
          {ctaText}
        </BookDemoButton>
      </div>
    </motion.div>
  );
};
