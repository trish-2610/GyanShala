import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Stack, router } from 'expo-router';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  title: 'Test',
};

type Question = {
  id: string;
  text: string;
};

type QuestionSection = {
  id: string;
  title: string;
  questions: Question[];
};

type ChapterKey = 'history_nationalism' | 'polity_power_sharing';

const CLASS_10_SOCIAL_CHAPTERS: { key: ChapterKey; label: string }[] = [
  {
    key: 'history_nationalism',
    label: 'History – The Rise of Nationalism in Europe',
  },
  {
    key: 'polity_power_sharing',
    label: 'Political Science – Power-Sharing',
  },
];

const CLASS_10_SOCIAL_TESTS: Record<ChapterKey, QuestionSection[]> = {
  history_nationalism: [
    {
      id: 'history-sec-a',
      title: 'Section A – Very Short Answer (1 mark each)',
      questions: [
        { id: 'h-q1', text: 'Q1. Define nationalism.' },
        { id: 'h-q2', text: 'Q2. Name two Italian leaders of unification.' },
        { id: 'h-q3', text: 'Q3. Who was called the “Iron Chancellor” of Germany?' },
        { id: 'h-q4', text: 'Q4. What was the German Confederation?' },
        { id: 'h-q5', text: 'Q5. Name one cause of the revolutions of 1848.' },
        {
          id: 'h-q6',
          text:
            'Q6. What is a food chain in history context? (Trick question: skip or mark NA)',
        },
        { id: 'h-q7', text: 'Q7. Name one multi-ethnic empire in 19th century Europe.' },
        { id: 'h-q8', text: 'Q8. Who founded Young Italy?' },
        {
          id: 'h-q9',
          text: 'Q9. Which war helped Prussia unify Germany in 1870–71?',
        },
        {
          id: 'h-q10',
          text: 'Q10. Name one tool that helped spread nationalist ideas.',
        },
      ],
    },
    {
      id: 'history-sec-b',
      title: 'Section B – Short Answer (2–3 marks each)',
      questions: [
        {
          id: 'h-q11',
          text:
            'Q11. Differentiate between unification of Italy and Germany in brief.',
        },
        {
          id: 'h-q12',
          text:
            'Q12. Explain the role of Giuseppe Garibaldi in Italian unification.',
        },
        {
          id: 'h-q13',
          text:
            'Q13. Mention two ways in which the French Revolution influenced nationalism in Europe.',
        },
        {
          id: 'h-q14',
          text:
            'Q14. Name and describe one challenge faced by multi-ethnic empires due to nationalism.',
        },
        {
          id: 'h-q15',
          text:
            'Q15. Explain the significance of newspapers and print culture in spreading nationalist ideas.',
        },
        {
          id: 'h-q16',
          text:
            'Q16. Give two positive and one negative impact of nationalism in Europe.',
        },
      ],
    },
    {
      id: 'history-sec-c',
      title: 'Section C – Medium Answer (3–5 marks each)',
      questions: [
        {
          id: 'h-q17',
          text:
            'Q17. Describe the process of Italian unification, mentioning leaders and steps.',
        },
        {
          id: 'h-q18',
          text:
            'Q18. Describe the process of German unification with the role of Bismarck.',
        },
        {
          id: 'h-q19',
          text:
            'Q19. Explain the revolutions of 1848 and their outcomes.',
        },
        {
          id: 'h-q20',
          text:
            'Q20. Explain how nationalism challenged monarchies in 19th century Europe.',
        },
      ],
    },
    {
      id: 'history-sec-d',
      title: 'Section D – Long Answer (5–6 marks each)',
      questions: [
        {
          id: 'h-q21',
          text:
            'Q21. Explain the impact of nationalism on Europe, including positive and negative effects.',
        },
        {
          id: 'h-q22',
          text:
            'Q22. Compare and contrast the unification of Italy and Germany, mentioning leaders, methods and challenges.',
        },
        {
          id: 'h-q23',
          text:
            'Q23. Explain the role of liberal ideas and revolutions in spreading nationalism across Europe.',
        },
      ],
    },
    {
      id: 'history-sec-e',
      title: 'Section E – Case-Based Questions',
      questions: [
        {
          id: 'h-q24',
          text:
            'Q24. A group of people in Austria-Hungary demanded autonomy for their ethnic group. Answer:\n' +
            'a) Which concept explains their demand?\n' +
            'b) Name the empire they were challenging.\n' +
            'c) What was a common cause of such movements in Europe?\n' +
            'd) Give one method they used to achieve their goals.',
        },
        {
          id: 'h-q25',
          text:
            'Q25. Napoleon’s conquests spread ideas of liberty, equality and fraternity across Europe. Answer:\n' +
            'a) Which revolutionary event inspired Napoleon?\n' +
            'b) How did these ideas influence nationalism in other countries?\n' +
            'c) Name one European country where these ideas inspired a nationalist movement.\n' +
            'd) Name one tool that helped spread these ideas.',
        },
      ],
    },
    {
      id: 'history-sec-f',
      title: 'Section F – Assertion and Reason',
      questions: [
        {
          id: 'h-q26',
          text:
            'Q26. Assertion: Giuseppe Mazzini formed Young Italy to unite Italy.\n' +
            'Reason: Mazzini believed in spreading nationalism through ideas and youth movements.\n' +
            'Options: A. Both correct, reason correct explanation\n' +
            'B. Both correct, reason not explanation\n' +
            'C. Assertion correct, reason wrong\n' +
            'D. Assertion wrong, reason correct',
        },
        {
          id: 'h-q27',
          text:
            'Q27. Assertion: Revolutions of 1848 were successful in all countries.\n' +
            'Reason: People demanded constitutional government and national unity.\n' +
            'Options: A. Both correct, reason correct explanation\n' +
            'B. Both correct, reason not explanation\n' +
            'C. Assertion correct, reason wrong\n' +
            'D. Assertion wrong, reason correct',
        },
      ],
    },
    {
      id: 'history-sec-g',
      title: 'Section G – Diagram / Flowchart-Based',
      questions: [
        {
          id: 'h-q28',
          text:
            'Q28. Draw and label:\n' +
            'a) Timeline of Italian unification\n' +
            'b) Timeline of German unification\n' +
            'c) Map showing Italy and Germany before and after unification\n' +
            'd) Flowchart of revolutions of 1848 across Europe',
        },
      ],
    },
  ],
  polity_power_sharing: [
    {
      id: 'polity-sec-a',
      title: 'Section A – Very Short Answer (1 mark each)',
      questions: [
        { id: 'p-q1', text: 'Q1. Define power-sharing.' },
        {
          id: 'p-q2',
          text:
            'Q2. Name the three organs of government in horizontal power-sharing.',
        },
        {
          id: 'p-q3',
          text:
            'Q3. Name the two main levels of government in vertical power-sharing in India.',
        },
        {
          id: 'p-q4',
          text:
            'Q4. Give one example of power-sharing among social groups in India.',
        },
        {
          id: 'p-q5',
          text:
            'Q5. What is the main purpose of power-sharing in a democracy?',
        },
        {
          id: 'p-q6',
          text:
            'Q6. Which country’s linguistic division is an example of power-sharing?',
        },
        {
          id: 'p-q7',
          text:
            'Q7. Name one minority community that benefits from power-sharing in India.',
        },
        {
          id: 'p-q8',
          text:
            'Q8. What is the system of local self-government in villages called?',
        },
        {
          id: 'p-q9',
          text:
            'Q9. Who implements laws in India’s government system?',
        },
        {
          id: 'p-q10',
          text: 'Q10. Which organ of government interprets laws?',
        },
      ],
    },
    {
      id: 'polity-sec-b',
      title: 'Section B – Short Answer (2–3 marks each)',
      questions: [
        {
          id: 'p-q11',
          text:
            'Q11. Explain horizontal power-sharing with an example from India.',
        },
        {
          id: 'p-q12',
          text:
            'Q12. Explain vertical power-sharing with an example from India.',
        },
        {
          id: 'p-q13',
          text:
            'Q13. Mention two advantages of power-sharing in a democracy.',
        },
        {
          id: 'p-q14',
          text:
            'Q14. Describe how SC/ST representation ensures power-sharing in India.',
        },
        {
          id: 'p-q15',
          text:
            'Q15. Give an example of power-sharing in Belgium.',
        },
        {
          id: 'p-q16',
          text:
            'Q16. Explain the role of local governments in India.',
        },
      ],
    },
    {
      id: 'polity-sec-c',
      title: 'Section C – Medium Answer (3–5 marks each)',
      questions: [
        {
          id: 'p-q17',
          text:
            'Q17. Explain how horizontal and vertical power-sharing together strengthen Indian democracy.',
        },
        {
          id: 'p-q18',
          text:
            'Q18. Describe the power-sharing among social groups in India, giving at least two examples.',
        },
        {
          id: 'p-q19',
          text:
            'Q19. Explain the case of Sri Lanka to show what can happen if power-sharing is ignored.',
        },
        {
          id: 'p-q20',
          text:
            'Q20. Explain how power-sharing reduces conflicts in a diverse society.',
        },
      ],
    },
    {
      id: 'polity-sec-d',
      title: 'Section D – Long Answer (5–6 marks each)',
      questions: [
        {
          id: 'p-q21',
          text:
            'Q21. Describe different types of power-sharing with examples.',
        },
        {
          id: 'p-q22',
          text:
            'Q22. Explain in detail the advantages of power-sharing in a democracy.',
        },
        {
          id: 'p-q23',
          text:
            'Q23. Describe how power-sharing works in India at horizontal, vertical and social levels.',
        },
      ],
    },
    {
      id: 'polity-sec-e',
      title: 'Section E – Case-Based Questions',
      questions: [
        {
          id: 'p-q24',
          text:
            'Q24. A country has multiple linguistic communities. The government divides power between regions so that each language group has representation in local administration. Answer:\n' +
            'a) Which type of power-sharing is shown here?\n' +
            'b) Give one benefit of this system.\n' +
            'c) Name a European country where this example applies.\n' +
            'd) How does this system prevent conflict?',
        },
        {
          id: 'p-q25',
          text:
            'Q25. In India, local Panchayats reserve one-third of seats for women. SC/ST communities have reserved seats in legislatures. Answer:\n' +
            'a) Which type of power-sharing is being practiced?\n' +
            'b) How does it promote equality?\n' +
            'c) Which organ ensures laws are implemented fairly?\n' +
            'd) How does it strengthen democracy?',
        },
      ],
    },
    {
      id: 'polity-sec-f',
      title: 'Section F – Assertion and Reason',
      questions: [
        {
          id: 'p-q26',
          text:
            'Q26. Assertion: Vertical power-sharing brings government closer to people.\n' +
            'Reason: It divides power between Union, State and Local governments.\n' +
            'Options: A. Both correct, reason correct explanation\n' +
            'B. Both correct, reason not explanation\n' +
            'C. Assertion correct, reason wrong\n' +
            'D. Assertion wrong, reason correct',
        },
        {
          id: 'p-q27',
          text:
            'Q27. Assertion: Power-sharing is unnecessary in homogeneous societies.\n' +
            'Reason: Only diverse societies need mechanisms to prevent conflict.\n' +
            'Options: A. Both correct, reason correct explanation\n' +
            'B. Both correct, reason not explanation\n' +
            'C. Assertion correct, reason wrong\n' +
            'D. Assertion wrong, reason correct',
        },
      ],
    },
    {
      id: 'polity-sec-g',
      title: 'Section G – Diagram / Flowchart-Based',
      questions: [
        {
          id: 'p-q28',
          text:
            'Q28. Draw and label:\n' +
            'a) Horizontal power-sharing (Legislature, Executive, Judiciary)\n' +
            'b) Vertical power-sharing (Union, State, Local)\n' +
            'c) Power-sharing among social groups (SC/ST/women representation)\n' +
            'd) Flowchart showing advantages of power-sharing',
        },
      ],
    },
  ],
};

export default function TestScreen() {
  const { t } = useTranslation();
  const [selectedChapterKey, setSelectedChapterKey] =
    React.useState<ChapterKey>('history_nationalism');

  const sections = CLASS_10_SOCIAL_TESTS[selectedChapterKey];
  const selectedChapterLabel =
    CLASS_10_SOCIAL_CHAPTERS.find((c) => c.key === selectedChapterKey)?.label ??
    '';

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
              Class 10 – Social Science
            </Text>
            <Text className="text-sm font-semibold text-foreground">
              Select chapter
            </Text>
            <View className="flex-row flex-wrap gap-2">
              {CLASS_10_SOCIAL_CHAPTERS.map((chapter) => {
                const isSelected = chapter.key === selectedChapterKey;
                return (
                  <Button
                    key={chapter.key}
                    size="sm"
                    variant={isSelected ? 'default' : 'outline'}
                    className="rounded-full px-3 py-1"
                    onPress={() => setSelectedChapterKey(chapter.key)}>
                    <Text className="text-xs font-medium">{chapter.label}</Text>
                  </Button>
                );
              })}
            </View>
            <Text className="text-xs text-muted-foreground">
              Viewing questions for: {selectedChapterLabel}
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
                    <Text
                      key={q.id}
                      className="text-xs leading-5 text-muted-foreground">
                      {q.text}
                    </Text>
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
