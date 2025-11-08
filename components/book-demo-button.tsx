"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CalModal } from "./cal-modal";

interface BookDemoButtonProps {
  variant?: "primary" | "secondary" | "brand";
  className?: string;
  children?: React.ReactNode;
  calLink?: string;
  namespace?: string;
}

export function BookDemoButton({
  variant = "primary",
  className,
  children = "Book a Demo",
  calLink = "anis-nanai-ibmriq/satsu-discovery-meeting",
  namespace = "satsu-discovery-meeting",
}: BookDemoButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={cn(
          "block rounded-xl px-6 py-2 text-center text-sm font-medium transition duration-150 active:scale-[0.98] sm:text-base",
          variant === "primary"
            ? "bg-charcoal-900 text-white dark:bg-white dark:text-black"
            : variant === "brand"
              ? "bg-brand text-white"
              : "border-divide border bg-white text-black transition duration-200 hover:bg-gray-300 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-800",
          className,
        )}
      >
        {children}
      </button>

      <CalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        calLink={calLink}
        namespace={namespace}
      />
    </>
  );
}
