import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Stack, router } from 'expo-router';
import * as React from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import careerData from '@/assets/career_data.json';

const SCREEN_OPTIONS = {
  title: 'Career Guidance',
};

type LevelKey = 'after10th' | 'after12th';
type StreamKey = 'Science' | 'Commerce' | 'Arts' | 'Vocational';

type StudentInput = {
  class: '10' | '12';
  stream: StreamKey;
  marks?: number | null;
  interest?: string | null;
  state?: string | null;
  language?: string | null;
};

type GuidanceResult = ReturnType<typeof getCareerGuidance>;

function getCareerGuidance(student: StudentInput) {
  const level: LevelKey = String(student.class) === '10' ? 'after10th' : 'after12th';
  const data = careerData as any;

  const stream = student.stream;
  const streamOptions = data[level]?.streams?.[stream] ?? [];
  const govtJobs = data[level]?.government_jobs ?? [];
  const scholarships = data[level]?.scholarships ?? [];

  return {
    student_profile: {
      class: student.class,
      stream,
      marks: student.marks ?? null,
      interest: student.interest ?? null,
      state: student.state ?? null,
      language: student.language ?? null,
    },
    recommended_paths: streamOptions,
    government_opportunities: govtJobs,
    scholarships,
    next_steps: [
      'Choose a path that matches your interest and strengths.',
      'Research colleges or institutes in your area.',
      'Apply for scholarships early.',
      'If planning for government exams, start preparation in advance.',
    ],
  };
}

export default function CareerScreen() {
  const [studentClass, setStudentClass] = React.useState<'10' | '12'>('10');
  const [stream, setStream] = React.useState<StreamKey>('Science');
  const [marks, setMarks] = React.useState<string>('');
  const [interest, setInterest] = React.useState<string>('');
  const [state, setState] = React.useState<string>('');
  const [language, setLanguage] = React.useState<string>('');
  const [result, setResult] = React.useState<GuidanceResult | null>(null);

  const handleSubmit = () => {
    const numericMarks = marks ? Number(marks) : null;
    const guidance = getCareerGuidance({
      class: studentClass,
      stream,
      marks: Number.isNaN(numericMarks) ? null : numericMarks,
      interest: interest || null,
      state: state || null,
      language: language || null,
    });
    setResult(guidance);
  };

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-background"
        keyboardShouldPersistTaps="handled"
        bounces={false}>
        <View className="flex-1 gap-8 px-6 pb-10 pt-20">
          <View className="gap-2">
            <Text className="text-xs font-medium uppercase tracking-wide text-primary">
              Career Awareness
            </Text>
            <Text className="text-2xl font-semibold text-foreground">Find simple guidance</Text>
            <Text className="text-sm text-muted-foreground">
              Fill a few details about your class and stream. The app will suggest some possible
              study paths, government exams and scholarships using offline data.
            </Text>
          </View>

          <View className="gap-4 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">Student details</Text>

            {/* Class selection */}
            <View className="gap-2">
              <Text className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Class
              </Text>
              <View className="flex-row gap-2">
                {(['10', '12'] as const).map((cls) => {
                  const isSelected = studentClass === cls;
                  return (
                    <Button
                      key={cls}
                      size="sm"
                      variant={isSelected ? 'default' : 'outline'}
                      className="rounded-full px-4 py-1.5"
                      onPress={() => setStudentClass(cls)}>
                      <Text className="text-xs font-medium">Class {cls}</Text>
                    </Button>
                  );
                })}
              </View>
            </View>

            {/* Stream selection */}
            <View className="gap-2">
              <Text className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Stream
              </Text>
              <View className="flex-row flex-wrap gap-2">
                {(['Science', 'Commerce', 'Arts', 'Vocational'] as const).map((s) => {
                  const isSelected = stream === s;
                  return (
                    <Button
                      key={s}
                      size="sm"
                      variant={isSelected ? 'default' : 'outline'}
                      className="rounded-full px-3 py-1"
                      onPress={() => setStream(s)}>
                      <Text className="text-xs font-medium">{s}</Text>
                    </Button>
                  );
                })}
              </View>
            </View>

            {/* Marks */}
            <View className="gap-1.5">
              <Text className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Approx. percentage (optional)
              </Text>
              <TextInput
                value={marks}
                onChangeText={setMarks}
                keyboardType="numeric"
                placeholder="e.g. 72"
                className="rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground"
                placeholderTextColor="#9ca3af"
              />
            </View>

            {/* Interest */}
            <View className="gap-1.5">
              <Text className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Interest area (optional)
              </Text>
              <TextInput
                value={interest}
                onChangeText={setInterest}
                placeholder="e.g. Medical, Teaching, Business"
                className="rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground"
                placeholderTextColor="#9ca3af"
              />
            </View>

            {/* State */}
            <View className="gap-1.5">
              <Text className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                State (optional)
              </Text>
              <TextInput
                value={state}
                onChangeText={setState}
                placeholder="e.g. Uttar Pradesh"
                className="rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground"
                placeholderTextColor="#9ca3af"
              />
            </View>

            {/* Language */}
            <View className="gap-1.5">
              <Text className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Preferred language (optional)
              </Text>
              <TextInput
                value={language}
                onChangeText={setLanguage}
                placeholder="e.g. Hindi, English"
                className="rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground"
                placeholderTextColor="#9ca3af"
              />
            </View>

            <Button className="mt-2 rounded-2xl" onPress={handleSubmit}>
              <Text className="text-sm font-medium text-primary-foreground">Get guidance</Text>
            </Button>
          </View>

          {result && (
            <View className="gap-4 rounded-2xl border border-border/70 bg-card/80 p-4">
              <Text className="text-sm font-semibold text-foreground">Suggested paths</Text>

              {/* Recommended paths */}
              <View className="gap-2">
                <Text className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Study options
                </Text>
                {result.recommended_paths.length === 0 ? (
                  <Text className="text-[11px] text-muted-foreground">
                    No specific paths found for this combination yet. Try a different stream or class.
                  </Text>
                ) : (
                  result.recommended_paths.map((path: any) => {
                    const title = path.path_name ?? path.degree ?? 'Path';
                    return (
                      <View
                        key={title}
                        className="gap-1 rounded-xl border border-border/60 bg-background/80 p-3">
                        <Text className="text-xs font-semibold text-foreground">{title}</Text>
                        {path.description && (
                          <Text className="text-[11px] text-muted-foreground">
                            {path.description}
                          </Text>
                        )}
                        {path.duration && (
                          <Text className="text-[11px] text-muted-foreground">
                            Duration: {path.duration}
                          </Text>
                        )}
                      </View>
                    );
                  })
                )}
              </View>

              {/* Government opportunities */}
              <View className="gap-2">
                <Text className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Government opportunities
                </Text>
                {result.government_opportunities.map((job: any) => (
                  <View
                    key={job.job}
                    className="gap-1 rounded-xl border border-border/60 bg-background/80 p-3">
                    <Text className="text-xs font-semibold text-foreground">{job.job}</Text>
                    <Text className="text-[11px] text-muted-foreground">
                      Eligibility: {job.eligibility}
                    </Text>
                    <Text className="text-[11px] text-muted-foreground">
                      {job.description}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Scholarships */}
              <View className="gap-2">
                <Text className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Scholarships
                </Text>
                {result.scholarships.map((sch: any) => (
                  <View
                    key={sch.name}
                    className="gap-1 rounded-xl border border-border/60 bg-background/80 p-3">
                    <Text className="text-xs font-semibold text-foreground">{sch.name}</Text>
                    <Text className="text-[11px] text-muted-foreground">
                      Eligibility: {sch.eligibility}
                    </Text>
                    {sch.link && (
                      <Text className="text-[11px] text-muted-foreground">
                        Website: {sch.link}
                      </Text>
                    )}
                  </View>
                ))}
              </View>

              {/* Next steps */}
              <View className="gap-1">
                <Text className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Next steps
                </Text>
                {result.next_steps.map((step: string) => (
                  <Text key={step} className="text-[11px] text-muted-foreground">
                    • {step}
                  </Text>
                ))}
              </View>
            </View>
          )}

          <Button
            variant="outline"
            className="rounded-2xl"
            onPress={() => {
              router.replace('/(tabs)/dashboard');
            }}>
            <Text className="font-medium">Back to dashboard</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
}
