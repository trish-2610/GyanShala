import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import {
  SOCIAL_TEST_CHAPTER_ORDER,
  SOCIAL_TESTS_CLASS_10,
} from '@/lib/socialTests';
import type { SocialTopicId } from '@/lib/socialStudies';
import { getScienceTestChapter, SCIENCE_TEST_CHAPTER_ORDER } from '@/lib/scienceTests';
import type { ScienceChapterId } from '@/lib/scienceStudies';
import { Stack, router } from 'expo-router';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  title: 'Test',
};

export default function TestScreen() {
  const { t } = useTranslation();
  const [selectedSubject, setSelectedSubject] = React.useState<'social' | 'science'>(
    'social'
  );
  const [selectedSocialChapterId, setSelectedSocialChapterId] =
    React.useState<SocialTopicId>('economics');
  const [selectedScienceChapterId, setSelectedScienceChapterId] =
    React.useState<ScienceChapterId>('1');
  const [expandedAnswerIds, setExpandedAnswerIds] = React.useState<
    Record<string, boolean>
  >({});

  const chapter =
    selectedSubject === 'social'
      ? SOCIAL_TESTS_CLASS_10[selectedSocialChapterId]
      : getScienceTestChapter(selectedScienceChapterId);
  const sections = chapter.sections;

  const toggleAnswer = React.useCallback((questionId: string) => {
    setExpandedAnswerIds((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          ...SCREEN_OPTIONS,
          title: t('tabs_test'),
        }}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-background"
        bounces={false}>
        <View className="flex-1 gap-8 px-6 pb-10 pt-20">
          <View className="gap-2">
            <Text className="text-xs font-medium uppercase tracking-wide text-primary">
              {t('tabs_test')}
            </Text>
            <Text className="text-2xl font-semibold text-foreground">
              {t('test_header_title')}
            </Text>
            <Text className="text-sm text-muted-foreground">
              {t('test_header_body')}
            </Text>
          </View>

          <View className="gap-4 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Class 10 – Tests
            </Text>
            <Text className="text-sm font-semibold text-foreground">Select subject</Text>
            <View className="flex-row flex-wrap gap-2">
              <Button
                size="sm"
                variant={selectedSubject === 'social' ? 'default' : 'outline'}
                className="rounded-full px-3 py-1"
                onPress={() => setSelectedSubject('social')}>
                <Text className="text-xs font-medium">Social Science</Text>
              </Button>
              <Button
                size="sm"
                variant={selectedSubject === 'science' ? 'default' : 'outline'}
                className="rounded-full px-3 py-1"
                onPress={() => setSelectedSubject('science')}>
                <Text className="text-xs font-medium">Science</Text>
              </Button>
            </View>

            <Text className="text-sm font-semibold text-foreground">Select chapter</Text>
            <View className="flex-row flex-wrap gap-2">
              {selectedSubject === 'social'
                ? SOCIAL_TEST_CHAPTER_ORDER.map((chapterId) => {
                    const chapterLabel = SOCIAL_TESTS_CLASS_10[chapterId].label;
                    const isSelected = chapterId === selectedSocialChapterId;
                    return (
                      <Button
                        key={chapterId}
                        size="sm"
                        variant={isSelected ? 'default' : 'outline'}
                        className="rounded-full px-3 py-1"
                        onPress={() => setSelectedSocialChapterId(chapterId)}>
                        <Text className="text-xs font-medium">{chapterLabel}</Text>
                      </Button>
                    );
                  })
                : SCIENCE_TEST_CHAPTER_ORDER.map((chapterId) => {
                    const chapterLabel = getScienceTestChapter(chapterId).label;
                    const isSelected = chapterId === selectedScienceChapterId;
                    return (
                      <Button
                        key={chapterId}
                        size="sm"
                        variant={isSelected ? 'default' : 'outline'}
                        className="rounded-full px-3 py-1"
                        onPress={() => setSelectedScienceChapterId(chapterId)}>
                        <Text className="text-xs font-medium">{chapterLabel}</Text>
                      </Button>
                    );
                  })}
            </View>
            <Text className="text-xs text-muted-foreground">
              Viewing questions for: {chapter.label}
            </Text>
          </View>

          <View className="gap-4">
            {sections.map((section) => (
              <View
                key={section.id}
                className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
                <Text className="text-sm font-semibold text-foreground">
                  {section.title}
                </Text>
                <View className="gap-2">
                  {section.questions.map((q) => (
                    <Pressable
                      key={q.id}
                      disabled={!q.answer}
                      onPress={() => (q.answer ? toggleAnswer(q.id) : undefined)}
                      className="rounded-xl border border-border/60 bg-background/70 p-3">
                      <Text className="text-xs leading-5 text-muted-foreground">
                        {q.text}
                      </Text>
                      {q.answer && (
                        <Text className="mt-2 text-[11px] font-medium text-primary">
                          {expandedAnswerIds[q.id] ? 'Hide answer' : 'Show answer'}
                        </Text>
                      )}
                      {q.answer && expandedAnswerIds[q.id] && (
                        <Text className="mt-2 text-xs leading-5 text-foreground">
                          Answer: {q.answer}
                        </Text>
                      )}
                    </Pressable>
                  ))}
                </View>
              </View>
            ))}
          </View>

          <Button
            variant="outline"
            className="rounded-2xl"
            onPress={() => {
              router.replace('/(tabs)/dashboard');
            }}>
            <Text className="font-medium">{t('test_back_dashboard')}</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
}
