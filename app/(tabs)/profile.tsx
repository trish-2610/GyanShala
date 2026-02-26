import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Stack, router } from 'expo-router';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  title: 'Profile',
};

export default function ProfileScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-background"
        bounces={false}>
        <View className="flex-1 gap-8 px-6 pb-10 pt-20">
          <View className="gap-2">
            <Text className="text-xs font-medium uppercase tracking-wide text-primary">
              Profile
            </Text>
            <Text className="text-2xl font-semibold text-foreground">Your learning profile</Text>
            <Text className="text-sm text-muted-foreground">
              View basic learner details and quick links to your queries and career awareness space.
            </Text>
          </View>

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">Basic details</Text>
            <Text className="text-xs text-muted-foreground">
              Name: <Text className="font-semibold text-foreground">Learner (placeholder)</Text>
            </Text>
            <Text className="text-xs text-muted-foreground">
              In a later version, this area can pull the real name and saved progress from your
              account.
            </Text>
          </View>

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">Your queries</Text>
            <Text className="text-xs text-muted-foreground">
              Go to the Queries tab to ask doubts and see answers in your preferred language.
            </Text>
            <Button
              size="sm"
              className="self-start rounded-full px-4 py-1.5"
              onPress={() => router.replace('/(tabs)/query')}>
              <Text className="text-xs font-medium text-primary-foreground">Open Query</Text>
            </Button>
          </View>

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">Career awareness</Text>
            <Text className="text-xs text-muted-foreground">
              Read simple guidance about different careers, entrance exams and next steps after
              school.
            </Text>
            <Button
              size="sm"
              variant="outline"
              className="self-start rounded-full px-4 py-1.5"
              onPress={() => router.push('/career')}>
              <Text className="text-xs font-medium">Open career awareness screen</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

