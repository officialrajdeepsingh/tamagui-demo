"use client";
import { Hero } from "@/components/Hero";
import { YStack } from "tamagui";

export default function Home() {
  return (
    <YStack alignSelf="center">
      <Hero />
    </YStack>
  );
}
