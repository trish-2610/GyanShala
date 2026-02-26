import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { LanguageDropdown } from '@/components/LanguageDropdown';
import { clearCurrentUser, getCurrentUser } from '@/lib/session';
import { Stack, router } from 'expo-router';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  title: 'Profile',
};

export default function ProfileScreen() {
  const user = getCurrentUser();
  const { t } = useTranslation();

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
              {t('tabs_profile')}
            </Text>
            <Text className="text-2xl font-semibold text-foreground">
              {t('profile_title', { defaultValue: 'Your learning profile' })}
            </Text>
            <Text className="text-sm text-muted-foreground">
              {t('profile_subtitle', {
                defaultValue:
                  'View basic learner details and quick links to your queries and career awareness space.',
              })}
            </Text>
          </View>

          {/* Settings: language selection */}
          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">
              {t('profile_language_title', { defaultValue: 'App language' })}
            </Text>
            <Text className="text-xs text-muted-foreground">
              {t('profile_language_body', {
                defaultValue:
                  'Choose which language is used for buttons, labels, and other text in the app.',
              })}
            </Text>
            <LanguageDropdown />
          </View>

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">
              {t('profile_basic_details_title', { defaultValue: 'Basic details' })}
            </Text>
            <Text className="text-xs text-muted-foreground">
              {t('profile_name_label', { defaultValue: 'Name:' })}{' '}
              <Text className="font-semibold text-foreground">
                {user?.name ?? t('profile_name_fallback', { defaultValue: 'Learner' })}
              </Text>
            </Text>
            <Text className="text-xs text-muted-foreground">
              {t('profile_email_label', { defaultValue: 'Email:' })}{' '}
              <Text className="font-semibold text-foreground">
                {user?.email ?? t('profile_email_fallback', { defaultValue: 'Not set' })}
              </Text>
            </Text>
            <Text className="text-xs text-muted-foreground">
              {t('profile_session_info', {
                defaultValue: 'These details are kept only while the app is open in this session.',
              })}
            </Text>
          </View>

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">
              {t('profile_queries_title', { defaultValue: 'Your queries' })}
            </Text>
            <Text className="text-xs text-muted-foreground">
              {t('profile_queries_body', {
                defaultValue:
                  'Go to the Queries tab to ask doubts and see answers in your preferred language.',
              })}
            </Text>
            <Button
              size="sm"
              className="self-start rounded-full px-4 py-1.5"
              onPress={() => router.replace('/(tabs)/query')}>
              <Text className="text-xs font-medium text-primary-foreground">
                {t('profile_queries_button', { defaultValue: 'Open Query' })}
              </Text>
            </Button>
          </View>

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">
              {t('profile_career_title', { defaultValue: 'Career awareness' })}
            </Text>
            <Text className="text-xs text-muted-foreground">
              {t('profile_career_body', {
                defaultValue:
                  'Open a simple tool that suggests possible study paths, exams and scholarships using offline career data.',
              })}
            </Text>
            <Button
              size="sm"
              variant="outline"
              className="self-start rounded-full px-4 py-1.5"
              onPress={() => router.push('/career')}>
              <Text className="text-xs font-medium">
                {t('profile_career_button', { defaultValue: 'Open career guidance' })}
              </Text>
            </Button>
          </View>

          <View className="gap-3 rounded-2xl border border-destructive/60 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-destructive">
              {t('profile_logout_title', { defaultValue: 'Logout' })}
            </Text>
            <Text className="text-xs text-muted-foreground">
              {t('profile_logout_body', {
                defaultValue: 'End this learning session and go back to the login screen.',
              })}
            </Text>
            <Button
              size="sm"
              variant="outline"
              className="self-start rounded-full px-4 py-1.5 border-destructive/70"
              onPress={() => {
                clearCurrentUser();
                router.replace('/auth');
              }}>
              <Text className="text-xs font-medium text-destructive">
                {t('profile_logout_button', { defaultValue: 'Logout' })}
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

