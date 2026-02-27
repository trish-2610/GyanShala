import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  title: 'Dashboard',
};

export default function DashboardScreen() {
  const { t } = useTranslation();

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
              {t('dashboard_placeholder_title', { defaultValue: 'Dashboard' })}
            </Text>
            <Text className="text-sm text-muted-foreground">
              {t('dashboard_placeholder_body', {
                defaultValue:
                  'This screen will later show your recent activity, progress, and shortcuts to lessons. For now it uses simple placeholder cards.',
              })}
            </Text>
          </View>

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">
              {t('dashboard_placeholder_card_progress_title', { defaultValue: 'Learning progress' })}
            </Text>
            <Text className="text-xs text-muted-foreground">
              {t('dashboard_placeholder_card_progress_body', {
                defaultValue:
                  'Here you will later see how many lessons you have completed and what to revise next.',
              })}
            </Text>
          </View>

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">
              {t('dashboard_placeholder_card_languages_title', {
                defaultValue: 'Languages & classes',
              })}
            </Text>
            <Text className="text-xs text-muted-foreground">
              {t('dashboard_placeholder_card_languages_body', {
                defaultValue:
                  'Later this area will help you quickly switch languages and jump to your most used classes.',
              })}
            </Text>
          </View>

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
          </View>
        </View>
      </ScrollView>
    </>
  );
}

