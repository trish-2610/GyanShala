import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { router } from 'expo-router';
import { BookOpenIcon, Globe2Icon, SparklesIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';

export default function HomeScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { t } = useTranslation();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-background"
      bounces={false}>
      <View className="flex-1 gap-10 px-6 pb-12 pt-24">
          {/* Top bar with chip + language toggle */}
          <View className="flex-row items-center justify-between gap-4">
            <View className="self-start rounded-full bg-primary/10 px-3 py-1">
              <Text className="text-xs font-medium text-primary">{t('tagline_chip')}</Text>
            </View>

            <LanguageSwitcher />
          </View>

          {/* Hero */}
          <View className="gap-3">
            <Text className="text-4xl font-extrabold text-foreground">GyanShala</Text>
            <Text className="text-3xl font-semibold text-foreground">{t('hero_title')}</Text>
            <Text className="text-base text-muted-foreground">{t('hero_body')}</Text>
          </View>

          {/* Primary actions */}
          <View className="flex-row gap-3">
            <Button
              className="flex-1"
              onPress={() => {
                router.push('/auth');
              }}>
              <Text className="font-medium text-primary-foreground">{t('primary_start')}</Text>
            </Button>
            <Button
              className="flex-1"
              variant="outline"
              onPress={() => {
                router.push('/dashboard');
              }}>
              <Text className="font-medium">{t('primary_browse')}</Text>
            </Button>
          </View>

          {/* Key highlights */}
          <View className="gap-4 rounded-3xl border border-border/60 bg-card/80 p-4">
            <View className="flex-row items-center gap-3">
              <View className="rounded-full bg-primary/10 p-2">
                <Icon as={SparklesIcon} className="text-primary" />
              </View>
              <Text className="text-base font-semibold text-foreground">
                {t('feature_low_connectivity_title')}
              </Text>
            </View>
            <Text className="text-sm text-muted-foreground">
              {t('feature_low_connectivity_body')}
            </Text>
          </View>

          {/* Feature cards */}
          <View className="flex-row gap-3">
            <View className="flex-1 gap-3 rounded-2xl border border-border/60 bg-card/80 p-3">
              <View className="rounded-full bg-primary/10 p-2 self-start">
                <Icon as={Globe2Icon} className="text-primary" />
              </View>
              <Text className="text-sm font-semibold text-foreground">
                {t('feature_multilang_title')}
              </Text>
              <Text className="text-xs text-muted-foreground">
                {t('feature_multilang_body')}
              </Text>
            </View>

            <View className="flex-1 gap-3 rounded-2xl border border-border/60 bg-card/80 p-3">
              <View className="rounded-full bg-primary/10 p-2 self-start">
                <Icon as={BookOpenIcon} className="text-primary" />
              </View>
              <Text className="text-sm font-semibold text-foreground">
                {t('feature_ai_title')}
              </Text>
              <Text className="text-xs text-muted-foreground">
                {t('feature_ai_body')}
              </Text>
            </View>
          </View>

          {/* Language chips */}
          <View className="gap-3">
            <Text className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {t('supported_languages_heading')}
            </Text>
            <View className="flex-row flex-wrap gap-2">
              <View className="rounded-full border border-border/70 bg-background/80 px-3 py-1">
                <Text className="text-xs text-foreground">
                  {t('supported_languages_list')}
                </Text>
              </View>
            </View>
          </View>

          {/* How it helps */}
          <View className="gap-4 rounded-3xl border border-border/60 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">
              {t('how_it_helps_title')}
            </Text>
            <Text className="text-xs text-muted-foreground">{t('how_it_helps_body')}</Text>
            <View className="gap-2">
              <Text className="text-xs text-muted-foreground">
                • {t('how_it_helps_point_teachers')}
              </Text>
              <Text className="text-xs text-muted-foreground">
                • {t('how_it_helps_point_students')}
              </Text>
              <Text className="text-xs text-muted-foreground">
                • {t('how_it_helps_point_community')}
              </Text>
            </View>
          </View>

          {/* Audience cards */}
          <View className="gap-3">
            <Text className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {t('made_for_heading')}
            </Text>
            <View className="gap-2">
              <View className="gap-2 rounded-2xl border border-border/60 bg-card/80 p-3">
                <Text className="text-xs font-semibold text-foreground">
                  {t('made_for_rural_schools_title')}
                </Text>
                <Text className="text-xs text-muted-foreground">
                  {t('made_for_rural_schools_body')}
                </Text>
              </View>
              <View className="gap-2 rounded-2xl border border-border/60 bg-card/80 p-3">
                <Text className="text-xs font-semibold text-foreground">
                  {t('made_for_ngos_title')}
                </Text>
                <Text className="text-xs text-muted-foreground">
                  {t('made_for_ngos_body')}
                </Text>
              </View>
              <View className="gap-2 rounded-2xl border border-border/60 bg-card/80 p-3">
                <Text className="text-xs font-semibold text-foreground">
                  {t('made_for_parents_title')}
                </Text>
                <Text className="text-xs text-muted-foreground">
                  {t('made_for_parents_body')}
                </Text>
              </View>
            </View>
          </View>

          {/* Footer note */}
          <View className="gap-1">
            <Text className="text-[11px] font-medium text-muted-foreground">
              {t('footer_note_line1')}
            </Text>
            <Text className="text-[11px] text-muted-foreground">
              {t('footer_note_line2')}
            </Text>
          </View>
        </View>
      </ScrollView>
  );
}
