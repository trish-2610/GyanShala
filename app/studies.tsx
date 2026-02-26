import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { SOCIAL_TOPICS_CLASS_10 } from '@/lib/socialStudies';
import { SCIENCE_CHAPTERS_CLASS_10 } from '@/lib/scienceStudies';
import { Stack, router } from 'expo-router';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, View } from 'react-native';

type SubjectKey = 'english' | 'hindi' | 'maths' | 'science' | 'social';

const CLASSES = ['6', '7', '8', '9', '10'];

const SCREEN_OPTIONS = {
  title: 'Studies',
};

type TopicConfig =
  | { type: 'i18n'; titleKey: string; bodyKey: string }
  | { type: 'static'; title: string; body: string };

const SUBJECT_TOPICS: Record<SubjectKey, TopicConfig[]> = {
  english: [
    {
      type: 'i18n',
      titleKey: 'studies_english_topic1_title',
      bodyKey: 'studies_english_topic1_body',
    },
    {
      type: 'i18n',
      titleKey: 'studies_english_topic2_title',
      bodyKey: 'studies_english_topic2_body',
    },
    {
      type: 'i18n',
      titleKey: 'studies_english_topic3_title',
      bodyKey: 'studies_english_topic3_body',
    },
    {
      type: 'i18n',
      titleKey: 'studies_english_topic4_title',
      bodyKey: 'studies_english_topic4_body',
    },
  ],
  hindi: [
    {
      type: 'i18n',
      titleKey: 'studies_hindi_topic1_title',
      bodyKey: 'studies_hindi_topic1_body',
    },
    {
      type: 'i18n',
      titleKey: 'studies_hindi_topic2_title',
      bodyKey: 'studies_hindi_topic2_body',
    },
    {
      type: 'i18n',
      titleKey: 'studies_hindi_topic3_title',
      bodyKey: 'studies_hindi_topic3_body',
    },
    {
      type: 'i18n',
      titleKey: 'studies_hindi_topic4_title',
      bodyKey: 'studies_hindi_topic4_body',
    },
  ],
  maths: [
    {
      type: 'i18n',
      titleKey: 'studies_maths_topic1_title',
      bodyKey: 'studies_maths_topic1_body',
    },
    {
      type: 'i18n',
      titleKey: 'studies_maths_topic2_title',
      bodyKey: 'studies_maths_topic2_body',
    },
    {
      type: 'i18n',
      titleKey: 'studies_maths_topic3_title',
      bodyKey: 'studies_maths_topic3_body',
    },
    {
      type: 'i18n',
      titleKey: 'studies_maths_topic4_title',
      bodyKey: 'studies_maths_topic4_body',
    },
  ],
  science: [
    {
      type: 'i18n',
      titleKey: 'studies_science_topic1_title',
      bodyKey: 'studies_science_topic1_body',
    },
    {
      type: 'i18n',
      titleKey: 'studies_science_topic2_title',
      bodyKey: 'studies_science_topic2_body',
    },
    {
      type: 'i18n',
      titleKey: 'studies_science_topic3_title',
      bodyKey: 'studies_science_topic3_body',
    },
    {
      type: 'i18n',
      titleKey: 'studies_science_topic4_title',
      bodyKey: 'studies_science_topic4_body',
    },
  ],
  social: [
    {
      type: 'i18n',
      titleKey: 'studies_social_topic1_title',
      bodyKey: 'studies_social_topic1_body',
    },
    {
      type: 'i18n',
      titleKey: 'studies_social_topic2_title',
      bodyKey: 'studies_social_topic2_body',
    },
    {
      type: 'i18n',
      titleKey: 'studies_social_topic3_title',
      bodyKey: 'studies_social_topic3_body',
    },
    {
      type: 'i18n',
      titleKey: 'studies_social_topic4_title',
      bodyKey: 'studies_social_topic4_body',
    },
  ],
};

/** For Class 10 Social we show Economics, Geography, History, Political Science; tap opens full study content. */

export default function StudiesScreen() {
  const { t } = useTranslation();
  const [selectedClass, setSelectedClass] = React.useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = React.useState<SubjectKey | null>(null);

  const subjects: { key: SubjectKey; label: string }[] = React.useMemo(
    () => [
      { key: 'english', label: t('studies_subject_english') },
      { key: 'hindi', label: t('studies_subject_hindi') },
      { key: 'maths', label: t('studies_subject_maths') },
      { key: 'science', label: t('studies_subject_science') },
      { key: 'social', label: t('studies_subject_social') },
    ],
    [t]
  );

  return (
    <>
      <Stack.Screen
        options={{
          ...SCREEN_OPTIONS,
          title: t('tabs_studies'),
        }}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-background"
        bounces={false}>
        <View className="flex-1 gap-8 px-6 pb-10 pt-20">
          <View className="gap-2">
            <Text className="text-xs font-medium uppercase tracking-wide text-primary">
              {t('tabs_studies')}
            </Text>
            <Text className="text-2xl font-semibold text-foreground">
              {t('studies_header_title')}
            </Text>
            <Text className="text-sm text-muted-foreground">
              {t('studies_header_body')}
            </Text>
          </View>

          <View className="gap-4 rounded-2xl border border-border/70 bg-card/80 p-4">
            {/* Class selection */}
            <View className="gap-2">
              <Text className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                {t('studies_select_class')}
              </Text>
              <View className="flex-row flex-wrap gap-2">
                {CLASSES.map((cls) => {
                  const isSelected = selectedClass === cls;
                  return (
                    <Button
                      key={cls}
                      size="sm"
                      variant={isSelected ? 'default' : 'outline'}
                      className="rounded-full px-3 py-1"
                      onPress={() => {
                        setSelectedClass(cls);
                        setSelectedSubject(null);
                      }}>
                      <Text className="text-xs font-medium">
                        {t('studies_class_label', { class: cls })}
                      </Text>
                    </Button>
                  );
                })}
              </View>
            </View>

            {/* Subjects */}
            {selectedClass && (
              <View className="gap-2">
                <Text className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {t('studies_select_subject')}
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  {subjects.map((subject) => {
                    const isSelected = selectedSubject === subject.key;
                    return (
                      <Button
                        key={subject.key}
                        size="sm"
                        variant={isSelected ? 'default' : 'outline'}
                        className="rounded-full px-3 py-1"
                        onPress={() => setSelectedSubject(subject.key)}>
                        <Text className="text-xs font-medium">{subject.label}</Text>
                      </Button>
                    );
                  })}
                </View>
              </View>
            )}

            {/* Topics */}
            {selectedClass && selectedSubject && (
              <View className="gap-3">
                <Text className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {t('studies_topics_heading', {
                    class: selectedClass,
                    subject:
                      subjects.find((s) => s.key === selectedSubject)?.label ??
                      t('studies_subject_fallback'),
                  })}
                </Text>
                {selectedClass === '10' && selectedSubject === 'social'
                  ? SOCIAL_TOPICS_CLASS_10.map((topic) => (
                      <Pressable
                        key={topic.id}
                        onPress={() =>
                          // expo-router typed routes may not include dynamic paths at build-time here,
                          // so we navigate using the concrete path string.
                          router.push((`/topic/${topic.id}` as unknown) as any)
                        }
                        className="gap-1 rounded-xl border border-border/60 bg-background/80 p-3 active:opacity-80">
                        <Text className="text-xs font-semibold text-foreground">
                          {topic.subject} – {topic.title}
                        </Text>
                        <Text className="text-[11px] text-muted-foreground">
                          {topic.summary}
                        </Text>
                      </Pressable>
                    ))
                  : selectedClass === '10' && selectedSubject === 'science'
                    ? SCIENCE_CHAPTERS_CLASS_10.map((chapter) => (
                        <Pressable
                          key={chapter.id}
                          onPress={() =>
                            router.push((`/science/${chapter.id}` as unknown) as any)
                          }
                          className="gap-1 rounded-xl border border-border/60 bg-background/80 p-3 active:opacity-80">
                          <Text className="text-xs font-semibold text-foreground">
                            Chapter {chapter.id}: {chapter.title}
                          </Text>
                          <Text className="text-[11px] text-muted-foreground">
                            {chapter.summary}
                          </Text>
                        </Pressable>
                      ))
                  : SUBJECT_TOPICS[selectedSubject].map((topic, index) => (
                      <View
                        key={
                          topic.type === 'i18n'
                            ? `${topic.titleKey}-${topic.bodyKey}`
                            : `static-${index}`
                        }
                        className="gap-1 rounded-xl border border-border/60 bg-background/80 p-3">
                        <Text className="text-xs font-semibold text-foreground">
                          {topic.type === 'i18n' ? t(topic.titleKey) : topic.title}
                        </Text>
                        <Text className="text-[11px] text-muted-foreground">
                          {topic.type === 'i18n' ? t(topic.bodyKey) : topic.body}
                        </Text>
                      </View>
                    ))}
              </View>
            )}
          </View>

          <Button
            variant="outline"
            className="rounded-2xl"
            onPress={() => {
              router.replace('/(tabs)/dashboard');
            }}>
            <Text className="font-medium">{t('studies_back_dashboard')}</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
}
