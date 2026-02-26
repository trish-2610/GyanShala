import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Stack, router } from 'expo-router';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  title: 'Studies',
};

type SubjectKey = 'english' | 'hindi' | 'maths' | 'science' | 'social';

const CLASSES = ['6', '7', '8', '9', '10'];

const SUBJECTS: { key: SubjectKey; label: string }[] = [
  { key: 'english', label: 'English' },
  { key: 'hindi', label: 'Hindi' },
  { key: 'maths', label: 'Maths' },
  { key: 'science', label: 'Science' },
  { key: 'social', label: 'Social' },
];

const SUBJECT_TOPICS: Record<
  SubjectKey,
  { title: string; description: string }[]
> = {
  english: [
    {
      title: 'Reading Comprehension',
      description: 'Practise reading short passages and answering simple questions in English.',
    },
    {
      title: 'Grammar Basics',
      description: 'Revision of nouns, verbs, tenses and simple sentence formation.',
    },
    {
      title: 'Vocabulary Builder',
      description: 'Learn new everyday words with meanings and example sentences.',
    },
    {
      title: 'Writing Practice',
      description: 'Short paragraph and letter-writing practice using guided examples.',
    },
  ],
  hindi: [
    {
      title: 'पाठ समझ',
      description: 'छोटे-छोटे गद्यांश पढ़ना और उनसे जुड़े सरल प्रश्नों के उत्तर देना.',
    },
    {
      title: 'व्याकरण मूल बातें',
      description: 'संज्ञा, क्रिया, लिंग और वचन जैसे महत्वपूर्ण व्याकरण के नियमों की दोहराई.',
    },
    {
      title: 'शब्द भंडार',
      description: 'नए हिंदी शब्दों का अभ्यास उनके अर्थ और वाक्यों के साथ.',
    },
    {
      title: 'लेखन अभ्यास',
      description: 'संक्षिप्त अनुच्छेद और पत्र-लेखन के लिए अभ्यास प्रश्न.',
    },
  ],
  maths: [
    {
      title: 'Numbers & Operations',
      description: 'Addition, subtraction, multiplication and division with easy examples.',
    },
    {
      title: 'Fractions & Decimals',
      description: 'Understanding parts of a whole using day-to-day situations.',
    },
    {
      title: 'Geometry Basics',
      description: 'Introduction to shapes, angles and simple constructions.',
    },
    {
      title: 'Word Problems',
      description: 'Practice story-based sums related to money, time and distance.',
    },
  ],
  science: [
    {
      title: 'Plants & Animals',
      description: 'Overview of local plants, crops and common animals around the village.',
    },
    {
      title: 'Human Body',
      description: 'Basic information about body parts, health and hygiene.',
    },
    {
      title: 'Water & Air',
      description: 'Simple explanation of water cycle, air and their importance.',
    },
    {
      title: 'Energy & Light',
      description: 'Everyday examples of energy, light and simple machines.',
    },
  ],
  social: [
    {
      title: 'My Community',
      description: 'Understanding family, neighbours and roles in the local community.',
    },
    {
      title: 'Our Country',
      description: 'Intro to India, states, important symbols and festivals.',
    },
    {
      title: 'History Stories',
      description: 'Short stories about freedom fighters and important events.',
    },
    {
      title: 'Maps & Directions',
      description: 'Reading simple maps and learning directions using village examples.',
    },
  ],
};

export default function StudiesScreen() {
  const [selectedClass, setSelectedClass] = React.useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = React.useState<SubjectKey | null>(null);

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
              Studies
            </Text>
            <Text className="text-2xl font-semibold text-foreground">
              Choose your class and subject
            </Text>
            <Text className="text-sm text-muted-foreground">
              Pick a class, then select a subject to view topic-wise placeholder content. Later we
              can link each topic to detailed lessons.
            </Text>
          </View>

          <View className="gap-4 rounded-2xl border border-border/70 bg-card/80 p-4">
            {/* Class selection */}
            <View className="gap-2">
              <Text className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Select Class
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
                      <Text className="text-xs font-medium">Class {cls}</Text>
                    </Button>
                  );
                })}
              </View>
            </View>

            {/* Subjects */}
            {selectedClass && (
              <View className="gap-2">
                <Text className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Select Subject
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  {SUBJECTS.map((subject) => {
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
                  Topics for Class {selectedClass} –{' '}
                  {SUBJECTS.find((s) => s.key === selectedSubject)?.label}
                </Text>
                {SUBJECT_TOPICS[selectedSubject].map((topic) => (
                  <View
                    key={topic.title}
                    className="gap-1 rounded-xl border border-border/60 bg-background/80 p-3">
                    <Text className="text-xs font-semibold text-foreground">{topic.title}</Text>
                    <Text className="text-[11px] text-muted-foreground">{topic.description}</Text>
                  </View>
                ))}
              </View>
            )}
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

