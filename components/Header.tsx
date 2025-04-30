"use client";

import { XStack, Text } from "tamagui";
import Link from "next/link";
import { SwitchThemeButton } from "./SwitchThemeButton";

export function Header() {
  return (
    <XStack
      suppressHydrationWarning={true}
      mx={"auto"}
      px="$4"
      py="$3"
      jc="center"
      ai="center"
      space="$5"
    >
      {/* Logo */}
      <Link suppressHydrationWarning={true} href={"/"}>
        <Text fontSize="$6" fontWeight="bold">
          My Logo
        </Text>
      </Link>

      {/* Nav Links */}
      <XStack space="$4" ai="center">
        <Link href="/">
          <Text
            fontSize="$4"
            hoverStyle={{
              color: "green",
            }}
            cursor="pointer"
            color="$color"
          >
            Home
          </Text>
        </Link>
        <Link href="/about">
          <Text fontSize="$4" cursor="pointer" color="$color">
            About
          </Text>
        </Link>
        <Link href="/contact">
          <Text fontSize="$4" cursor="pointer" color="$color">
            Contact
          </Text>
        </Link>
      </XStack>
      <SwitchThemeButton />
    </XStack>
  );
}
