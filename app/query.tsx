import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Stack, router } from 'expo-router';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  title: 'Query',
};

export default function QueryScreen() {
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
              Query
            </Text>
            <Text className="text-2xl font-semibold text-foreground">Ask your questions</Text>
            <Text className="text-sm text-muted-foreground">
              This space is for doubts. Later we can connect it to teachers, volunteers or an AI
              assistant so no question stays unanswered.
            </Text>
          </View>

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">Coming soon</Text>
            <Text className="text-xs text-muted-foreground">
              You will be able to type your questions here and see responses in your preferred
              language. For now, this is just placeholder content.
            </Text>
          </View>

          <Button
            variant="outline"
            className="rounded-2xl"
            onPress={() => {
              router.replace('/dashboard');
            }}>
            <Text className="font-medium">Back to dashboard</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
}

