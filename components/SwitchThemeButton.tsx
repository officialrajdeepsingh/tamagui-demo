"use client";
import { useState } from "react";
import { Button, useIsomorphicLayoutEffect } from "tamagui";
import { useThemeSetting, useRootTheme } from "@tamagui/next-theme";
import { Moon } from "@/components/icons/Moon";
import { Sun } from "@/components/icons/Sun";
import { System } from "@/components/icons/System";

export const SwitchThemeButton = () => {
  const themeSetting = useThemeSetting();
  const [theme] = useRootTheme();

  const [clientTheme, setClientTheme] = useState<string | undefined>("light");

  useIsomorphicLayoutEffect(() => {
    setClientTheme(themeSetting.forcedTheme || themeSetting.current || theme);
  }, [themeSetting.current, themeSetting.resolvedTheme]);

  return (
    <Button
      bg="transparent"
      borderColor="transparent"
      hoverStyle={{
        backgroundColor: "transparent",
        borderColor: "transparent",
      }}
      size={"$1"}
      onPress={themeSetting.toggle}
    >
      {clientTheme === "system" ? (
        <System />
      ) : clientTheme === "dark" ? (
        <Moon />
      ) : (
        <Sun />
      )}
    </Button>
  );
};
