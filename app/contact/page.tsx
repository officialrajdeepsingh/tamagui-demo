"use client";

import { YStack, Text, Button } from "tamagui";
import Link from "next/link";
import { View } from "tamagui";
import { Back } from "@/components/icons/Back";

export default function About() {
  return (
    <YStack
      suppressHydrationWarning={true}
      f={1}
      ai="center"
      jc="center"
      px="$4"
      py="$10"
      space="$4"
      bg="$background"
      minHeight={300}
    >
      {/* Title */}
      <Text fontSize="$12" fontWeight="bold" textAlign="center" color="$color">
        Contact us
      </Text>
      {/* Description */}
      <Text fontSize="$5" color="$color" textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      {/* Link */}
      <View mx="auto">
        <Link href={"/"}>
          <Button icon={<Back />} size="$2" theme="blue">
            Back
          </Button>
        </Link>
      </View>
    </YStack>
  );
}
