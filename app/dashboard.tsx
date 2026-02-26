import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Stack, router } from 'expo-router';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  title: 'Dashboard',
};

export default function DashboardScreen() {

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
              GyanShala
            </Text>
            <Text className="text-2xl font-semibold text-foreground">Your learning dashboard</Text>
            <Text className="text-sm text-muted-foreground">
              Choose what you want to focus on today: studies, queries, tests, or career guidance.
            </Text>
          </View>

          {/* Quick links to main areas */}
          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">Start learning</Text>
            <Text className="text-xs text-muted-foreground">
              Choose an area below to move to detailed screens for studies, doubts, tests and career
              awareness.
            </Text>
          </View>

          <View className="gap-3">
            <View className="gap-2 rounded-2xl border border-border/70 bg-card/80 p-4">
              <Text className="text-sm font-semibold text-foreground">Studies</Text>
              <Text className="text-xs text-muted-foreground">
                Pick your class and subject, then explore topic-wise content.
              </Text>
              <Button
                size="sm"
                className="self-start rounded-full px-4 py-1.5"
                onPress={() => router.push('/studies')}>
                <Text className="text-xs font-medium text-primary-foreground">Open Studies</Text>
              </Button>
            </View>

            <View className="gap-2 rounded-2xl border border-border/70 bg-card/80 p-4">
              <Text className="text-sm font-semibold text-foreground">Query</Text>
              <Text className="text-xs text-muted-foreground">
                Ask questions and see answers in your preferred language.
              </Text>
              <Button
                size="sm"
                className="self-start rounded-full px-4 py-1.5"
                onPress={() => router.push('/query')}>
                <Text className="text-xs font-medium text-primary-foreground">Open Query</Text>
              </Button>
            </View>

            <View className="gap-2 rounded-2xl border border-border/70 bg-card/80 p-4">
              <Text className="text-sm font-semibold text-foreground">Test</Text>
              <Text className="text-xs text-muted-foreground">
                Take short quizzes and track your scores.
              </Text>
              <Button
                size="sm"
                className="self-start rounded-full px-4 py-1.5"
                onPress={() => router.push('/test')}>
                <Text className="text-xs font-medium text-primary-foreground">Open Test</Text>
              </Button>
            </View>

            <View className="gap-2 rounded-2xl border border-border/70 bg-card/80 p-4">
              <Text className="text-sm font-semibold text-foreground">Career Awareness</Text>
              <Text className="text-xs text-muted-foreground">
                Read simple guidance about careers, exams and next steps.
              </Text>
              <Button
                size="sm"
                className="self-start rounded-full px-4 py-1.5"
                onPress={() => router.push('/career')}>
                <Text className="text-xs font-medium text-primary-foreground">Open Career</Text>
              </Button>
            </View>
          </View>

          <Button
            className="mt-4 rounded-2xl"
            variant="outline"
            onPress={() => {
              router.replace('/');
            }}>
            <Text className="font-medium">Back to home</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
}

