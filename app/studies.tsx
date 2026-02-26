import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Stack, router } from 'expo-router';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  title: 'Studies',
};

type SubjectKey = 'english' | 'hindi' | 'maths' | 'science' | 'social';

const CLASSES = ['6', '7', '8', '9', '10'];

const SUBJECT_TOPICS: Record<
  SubjectKey,
  { titleKey: string; bodyKey: string }[]
> = {
  english: [
    {
      titleKey: 'studies_english_topic1_title',
      bodyKey: 'studies_english_topic1_body',
    },
    {
      titleKey: 'studies_english_topic2_title',
      bodyKey: 'studies_english_topic2_body',
    },
    {
      titleKey: 'studies_english_topic3_title',
      bodyKey: 'studies_english_topic3_body',
    },
    {
      titleKey: 'studies_english_topic4_title',
      bodyKey: 'studies_english_topic4_body',
    },
  ],
  hindi: [
    {
      titleKey: 'studies_hindi_topic1_title',
      bodyKey: 'studies_hindi_topic1_body',
    },
    {
      titleKey: 'studies_hindi_topic2_title',
      bodyKey: 'studies_hindi_topic2_body',
    },
    {
      titleKey: 'studies_hindi_topic3_title',
      bodyKey: 'studies_hindi_topic3_body',
    },
    {
      titleKey: 'studies_hindi_topic4_title',
      bodyKey: 'studies_hindi_topic4_body',
    },
  ],
  maths: [
    {
      titleKey: 'studies_maths_topic1_title',
      bodyKey: 'studies_maths_topic1_body',
    },
    {
      titleKey: 'studies_maths_topic2_title',
      bodyKey: 'studies_maths_topic2_body',
    },
    {
      titleKey: 'studies_maths_topic3_title',
      bodyKey: 'studies_maths_topic3_body',
    },
    {
      titleKey: 'studies_maths_topic4_title',
      bodyKey: 'studies_maths_topic4_body',
    },
  ],
  science: [
    {
      titleKey: 'studies_science_topic1_title',
      bodyKey: 'studies_science_topic1_body',
    },
    {
      titleKey: 'studies_science_topic2_title',
      bodyKey: 'studies_science_topic2_body',
    },
    {
      titleKey: 'studies_science_topic3_title',
      bodyKey: 'studies_science_topic3_body',
    },
    {
      titleKey: 'studies_science_topic4_title',
      bodyKey: 'studies_science_topic4_body',
    },
  ],
  social: [
    {
      titleKey: 'studies_social_topic1_title',
      bodyKey: 'studies_social_topic1_body',
    },
    {
      titleKey: 'studies_social_topic2_title',
      bodyKey: 'studies_social_topic2_body',
    },
    {
      titleKey: 'studies_social_topic3_title',
      bodyKey: 'studies_social_topic3_body',
    },
    {
      titleKey: 'studies_social_topic4_title',
      bodyKey: 'studies_social_topic4_body',
    },
  ],
};

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
                {SUBJECT_TOPICS[selectedSubject].map((topic) => (
                  <View
                    key={topic.titleKey}
                    className="gap-1 rounded-xl border border-border/60 bg-background/80 p-3">
                    <Text className="text-xs font-semibold text-foreground">
                      {t(topic.titleKey)}
                    </Text>
                    <Text className="text-[11px] text-muted-foreground">
                      {t(topic.bodyKey)}
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
