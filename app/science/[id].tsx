import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import {
  getScienceChapterById,
  getScienceStudyContent,
  type ScienceChapterId,
} from '@/lib/scienceStudies';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const VALID_IDS: ScienceChapterId[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
];

export default function ScienceChapterScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const chapterId = (id ?? '') as ScienceChapterId;
  const chapter = React.useMemo(() => getScienceChapterById(chapterId), [chapterId]);
  const content = React.useMemo(
    () => (VALID_IDS.includes(chapterId) ? getScienceStudyContent(chapterId) : ''),
    [chapterId]
  );

  if (!chapter || !content) {
    return (
      <>
        <Stack.Screen options={{ title: 'Science' }} />
        <View className="flex-1 items-center justify-center bg-background p-6">
          <Text className="text-center text-muted-foreground">Chapter not found.</Text>
          <Button variant="outline" className="mt-4" onPress={() => router.back()}>
            <Text>Go back</Text>
          </Button>
        </View>
      </>
    );
  }

  const paragraphs = content.split(/\n\n+/).filter(Boolean);

  return (
    <>
      <Stack.Screen options={{ title: `Ch ${chapter.id}: ${chapter.title}` }} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-background"
        bounces={false}>
        <View className="gap-4 px-6 pb-10 pt-4">
          <View className="gap-1">
            <Text className="text-xs font-medium uppercase tracking-wide text-primary">
              Class 10 Science
            </Text>
            <Text className="text-xl font-semibold text-foreground">
              Chapter {chapter.id}: {chapter.title}
            </Text>
          </View>

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            {paragraphs.map((para, index) => (
              <Text key={index} className="text-sm leading-6 text-foreground" selectable>
                {para}
              </Text>
            ))}
          </View>

          <Button variant="outline" className="rounded-2xl" onPress={() => router.back()}>
            <Text className="font-medium">Back to Studies</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
}

