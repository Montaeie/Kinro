"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export interface BookerProps {
  calLink?: string;
  namespace?: string;
}

export function CalBooker({
  calLink = "anis-nanai-ibmriq/satsu-discovery-meeting",
  namespace = "satsu-discovery-meeting",
}: BookerProps) {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: currentTheme === "dark" ? "dark" : "light",
        styles: {
          branding: {
            brandColor: currentTheme === "dark" ? "#ffffff" : "#000000",
          },
        },
      });
    })();
  }, [namespace, currentTheme]);

  return (
    <Cal
      namespace={namespace}
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{
        layout: "month_view",
        theme: currentTheme === "dark" ? "dark" : "light",
        "hide-branding": "true", // Retire la mention "Powered by Cal.com"
      }}
    />
  );
}
