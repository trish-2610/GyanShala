import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Stack, router } from 'expo-router';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  title: 'Test',
};

export default function TestScreen() {
  const { t } = useTranslation();

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

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">
              {t('test_coming_soon_title')}
            </Text>
            <Text className="text-xs text-muted-foreground">
              {t('test_coming_soon_body')}
            </Text>
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
