"use client";

import { YStack, Text, Button, XStack, Avatar } from "tamagui";

export function Hero() {
  return (
    <YStack
      f={1}
      px="$4"
      py="$10"
      ai="center"
      jc="center"
      space="$4"
      bg="$background"
      minHeight={400}
    >
      {/* Title */}
      <Text fontSize="$9" fontWeight="bold" textAlign="center" color="$color">
        Welcome to Our Website
      </Text>

      {/* Description */}
      <Text fontSize="$5" color="$color" textAlign="center" maxWidth={600}>
        Discover our amazing tools and services designed to help you build
        better, faster, and smarter.
      </Text>

      <XStack alignItems="center" mx="auto" gap="$1">
        <Avatar circular size="$4">
          <Avatar.Image
            accessibilityLabel="Cam"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
          />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
        <Avatar circular size="$4">
          <Avatar.Image
            accessibilityLabel="Cam"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?&w=150&h=150&dpr=2&q=80"
          />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
        <Avatar circular size="$4">
          <Avatar.Image
            accessibilityLabel="Nate Wienert"
            src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
          />
          <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
        </Avatar>
      </XStack>

      {/* Buttons */}
      <XStack space="$4" mt="$4" mx="auto" jc="center">
        <Button size="$4" theme="blue">
          Get Started
        </Button>
        <Button themeInverse size="$4" theme="accent">
          Learn More
        </Button>
      </XStack>
    </YStack>
  );
}
