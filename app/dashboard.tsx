import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Stack, router } from 'expo-router';
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
              {t('dashboard_header_title')}
            </Text>
            <Text className="text-sm text-muted-foreground">
              {t('dashboard_header_body')}
            </Text>
          </View>

          <Button
            className="mt-4 rounded-2xl"
            variant="outline"
            onPress={() => {
              router.replace('/');
            }}>
            <Text className="font-medium">{t('dashboard_back_home')}</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
}

