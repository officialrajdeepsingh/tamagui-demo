"use client";

import { ReactNode } from "react";
import "@tamagui/core/reset.css";
import { TamaguiProvider } from "tamagui";
import { NextThemeProvider } from "@tamagui/next-theme";
import tamaguiConfig from "@/tamagui.config";

export const TamagUIProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemeProvider skipNextHead>
      <TamaguiProvider config={tamaguiConfig} disableRootThemeClass>
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  );
};
