import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { getCurrentUser } from '@/lib/session';
import { i18n } from '@/lib/i18n';
import { Stack, router } from 'expo-router';
import { BookOpen, HelpCircle, ListChecks, User, GraduationCap } from 'lucide-react-native';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  title: 'Dashboard',
};

// Placeholder progress (would come from real progress API later)
const PLACEHOLDER_LESSONS_COMPLETED = 12;
const PLACEHOLDER_TOTAL_LESSONS = 24;
const PLACEHOLDER_NEXT_SUBJECT = 'Mathematics';

const LANGUAGE_LABELS: Record<string, string> = {
  en: 'language_english',
  hi: 'language_hindi',
  bn: 'language_bengali',
};

export default function DashboardScreen() {
  const { t } = useTranslation();
  const user = getCurrentUser();
  const langCode = i18n.language || 'en';
  const languageLabelKey = LANGUAGE_LABELS[langCode] ?? 'language_english';
  const progressPercent = Math.round(
    (PLACEHOLDER_LESSONS_COMPLETED / PLACEHOLDER_TOTAL_LESSONS) * 100
  );

  return (
    <>
      <Stack.Screen
        options={{
          ...SCREEN_OPTIONS,
          title: t('tabs_dashboard'),
        }}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-background"
        bounces={false}>
        <View className="flex-1 gap-8 px-6 pb-10 pt-20">
          <View className="gap-2">
            <Text className="text-xs font-medium uppercase tracking-wide text-primary">
              {t('app_name')}
            </Text>
            <Text className="text-2xl font-semibold text-foreground">
              {t('dashboard_header_title', { defaultValue: 'Your learning dashboard' })}
            </Text>
            {user?.name && (
              <Text className="text-sm text-muted-foreground">
                {t('dashboard_welcome', {
                  defaultValue: 'Hello, {{name}}',
                  name: user.name,
                })}
              </Text>
            )}
            <Text className="text-sm text-muted-foreground">
              {t('dashboard_header_body', {
                defaultValue:
                  'Use the tabs below to move between your dashboard, studies, queries, tests and career awareness.',
              })}
            </Text>
          </View>

          {/* Learning progress */}
          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">
              {t('dashboard_placeholder_card_progress_title', {
                defaultValue: 'Learning progress',
              })}
            </Text>
            <Text className="text-base font-medium text-foreground">
              {t('dashboard_progress_lessons', {
                defaultValue: '{{count}} lessons completed',
                count: PLACEHOLDER_LESSONS_COMPLETED,
              })}
            </Text>
            <Progress value={progressPercent} className="h-2" />
            <Text className="text-xs text-muted-foreground">
              {t('dashboard_progress_next', {
                defaultValue: 'Next: {{subject}}',
                subject: PLACEHOLDER_NEXT_SUBJECT,
              })}
            </Text>
          </View>

          {/* Languages & classes */}
          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">
              {t('dashboard_placeholder_card_languages_title', {
                defaultValue: 'Languages & classes',
              })}
            </Text>
            <Text className="text-xs text-muted-foreground">
              {t('dashboard_language_current', {
                defaultValue: 'Current language: {{language}}',
                language: t(languageLabelKey),
              })}
            </Text>
            <View className="flex-row flex-wrap gap-2 pt-1">
              <Button
                size="sm"
                variant="outline"
                className="rounded-xl"
                onPress={() => router.replace('/(tabs)/profile')}>
                <Text className="text-xs font-medium">
                  {t('dashboard_change_language', { defaultValue: 'Change language' })}
                </Text>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="rounded-xl"
                onPress={() => router.replace('/(tabs)/studies')}>
                <Text className="text-xs font-medium">
                  {t('dashboard_browse_studies', { defaultValue: 'Browse studies' })}
                </Text>
              </Button>
            </View>
          </View>

          {/* Quick actions */}
          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">
              {t('dashboard_placeholder_card_actions_title', {
                defaultValue: 'Quick actions',
              })}
            </Text>
            <Text className="text-xs text-muted-foreground">
              {t('dashboard_placeholder_card_actions_body', {
                defaultValue:
                  'Shortcuts to continue your last lesson, open tests, or ask a new query will appear here.',
              })}
            </Text>
            <View className="gap-2 pt-2">
              <Button
                className="w-full flex-row items-center justify-start gap-3 rounded-xl py-3"
                onPress={() => router.replace('/(tabs)/studies')}>
                <BookOpen size={20} color="#fff" />
                <Text className="font-medium text-primary-foreground">
                  {t('dashboard_action_studies', { defaultValue: 'Open studies' })}
                </Text>
              </Button>
              <Button
                className="w-full flex-row items-center justify-start gap-3 rounded-xl py-3"
                onPress={() => router.replace('/(tabs)/query')}>
                <HelpCircle size={20} color="#fff" />
                <Text className="font-medium text-primary-foreground">
                  {t('dashboard_action_query', { defaultValue: 'Ask a query' })}
                </Text>
              </Button>
              <Button
                className="w-full flex-row items-center justify-start gap-3 rounded-xl py-3"
                onPress={() => router.replace('/(tabs)/test')}>
                <ListChecks size={20} color="#fff" />
                <Text className="font-medium text-primary-foreground">
                  {t('dashboard_action_test', { defaultValue: 'Take a test' })}
                </Text>
              </Button>
              <Button
                variant="outline"
                className="w-full flex-row items-center justify-start gap-3 rounded-xl py-3"
                onPress={() => router.push('/career')}>
                <GraduationCap size={20} />
                <Text className="font-medium">
                  {t('dashboard_action_career', { defaultValue: 'Career guidance' })}
                </Text>
              </Button>
              <Button
                variant="outline"
                className="w-full flex-row items-center justify-start gap-3 rounded-xl py-3"
                onPress={() => router.replace('/(tabs)/profile')}>
                <User size={20} />
                <Text className="font-medium">
                  {t('dashboard_action_profile', { defaultValue: 'Profile' })}
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
