import React from "react";
import type { Page } from "@/payload-types";
import { cn } from "@/lib/utils";

type SpacerBlock = Extract<
  NonNullable<Page["layout"]>[number],
  { blockType: "spacer" }
>;

export const Spacer: React.FC<SpacerBlock> = ({ height = 'medium' }) => {
  const heightClass =
    height === 'small' ? 'h-8' :
    height === 'large' ? 'h-24' :
    height === 'xl' ? 'h-40' :
    'h-16'; // medium

  return <div className={cn("w-full", heightClass)} />;
};
