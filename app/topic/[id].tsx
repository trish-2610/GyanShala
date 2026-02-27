import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { getTopicById, getTopicContent, type SocialTopicId } from '@/lib/socialStudies';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const VALID_IDS: SocialTopicId[] = ['economics', 'geography', 'history', 'political-science'];

export default function TopicDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const topicId = (id ?? '') as SocialTopicId;
  const topic = React.useMemo(() => getTopicById(topicId), [topicId]);
  const content = React.useMemo(
    () => (VALID_IDS.includes(topicId) ? getTopicContent(topicId) : ''),
    [topicId]
  );

  if (!topic || !content) {
    return (
      <>
        <Stack.Screen options={{ title: 'Topic' }} />
        <View className="flex-1 items-center justify-center bg-background p-6">
          <Text className="text-center text-muted-foreground">
            Topic not found.
          </Text>
          <Button
            variant="outline"
            className="mt-4"
            onPress={() => router.back()}>
            <Text>Go back</Text>
          </Button>
        </View>
      </>
    );
  }

  const paragraphs = content.split(/\n\n+/).filter(Boolean);

  return (
    <>
      <Stack.Screen
        options={{
          title: topic.title,
          headerBackVisible: true,
        }}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-background"
        bounces={false}>
        <View className="gap-4 px-6 pb-10 pt-4">
          <View className="gap-1">
            <Text className="text-xs font-medium uppercase tracking-wide text-primary">
              {topic.subject}
            </Text>
            <Text className="text-xl font-semibold text-foreground">
              {topic.title}
            </Text>
          </View>
          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            {paragraphs.map((para, index) => (
              <Text
                key={index}
                className="text-sm leading-6 text-foreground"
                selectable>
                {para}
              </Text>
            ))}
          </View>
          <Button
            className="rounded-2xl"
            onPress={() =>
              router.push({
                pathname: '/(tabs)/test',
                params: { socialChapter: topicId },
              } as any)
            }>
            <Text className="font-medium">Take chapter test</Text>
          </Button>
          <Button
            variant="outline"
            className="rounded-2xl"
            onPress={() => router.back()}>
            <Text className="font-medium">Back to Studies</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
}
