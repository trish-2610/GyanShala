import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { i18n } from '@/lib/i18n';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { View, type ViewProps } from 'react-native';

const LANGUAGE_CODES = [
  { code: 'en', labelKey: 'language_english' },
  { code: 'hi', labelKey: 'language_hindi' },
  { code: 'bn', labelKey: 'language_bengali' },
] as const;

type LanguageSwitcherProps = ViewProps & {
  compact?: boolean;
};

export function LanguageSwitcher({ compact = false, className, ...props }: LanguageSwitcherProps) {
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = React.useState<string>(i18n.language || 'en');

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  return (
    <View
      className={[
        'flex-row items-center gap-2 rounded-full border border-border/70 bg-card/80 px-2 py-1',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}>
      {!compact && (
        <Text className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
          {t('language_toggle_label')}
        </Text>
      )}
      <View className="flex-row gap-1">
        {LANGUAGE_CODES.map(({ code, labelKey }) => (
          <Button
            key={code}
            variant={currentLang === code ? 'default' : 'ghost'}
            className="h-7 rounded-full px-2"
            onPress={() => handleChangeLanguage(code)}>
            <Text className="text-[11px] font-medium">{t(labelKey as any)}</Text>
          </Button>
        ))}
      </View>
    </View>
  );
}

