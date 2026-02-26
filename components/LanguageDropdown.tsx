import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { i18n } from '@/lib/i18n';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Picker } from '@react-native-picker/picker';
import { Platform, View, type ViewProps } from 'react-native';

type LanguageDropdownProps = ViewProps & {
  showLabel?: boolean;
};

export function LanguageDropdown({
  showLabel = true,
  className,
  ...props
}: LanguageDropdownProps) {
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = React.useState<string>(i18n.language || 'en');

  const handleChangeLanguage = (lang: string) => {
    if (!lang) return;
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  return (
    <View className={cn('gap-1', className)} {...props}>
      {showLabel && (
        <Text className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
          {t('language_toggle_label')}
        </Text>
      )}
      <View className="rounded-md border border-border bg-card px-1 py-0.5">
        <Picker
          selectedValue={currentLang}
          onValueChange={handleChangeLanguage}
          dropdownIconColor={
            Platform.OS === 'android' || Platform.OS === 'ios' ? '#9ca3af' : undefined
          }
          style={{
            color: '#111827',
            fontSize: 13,
            paddingVertical: 0,
            marginVertical: 0,
          }}>
          <Picker.Item label={t('language_english')} value="en" />
          <Picker.Item label={t('language_hindi')} value="hi" />
          <Picker.Item label={t('language_bengali')} value="bn" />
        </Picker>
      </View>
    </View>
  );
}

