import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { db } from '@/lib/db';
import { users } from '@/lib/schema';
import { setCurrentUser, getCurrentUser } from '@/lib/session';
import { Stack, router } from 'expo-router';
import { eq } from 'drizzle-orm';
import * as React from 'react';
import { Alert, Platform, ScrollView, TextInput, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const SCREEN_OPTIONS = {
  // title is translated inside the screen using t()
  title: 'GyanShala',
};

type Mode = 'login' | 'signup';

type WebUser = {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: number;
};

const WEB_USERS_KEY = 'gyanshala:web-users';

function loadWebUsers(): WebUser[] {
  if (typeof window === 'undefined' || !('localStorage' in window)) return [];
  try {
    const raw = window.localStorage.getItem(WEB_USERS_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as WebUser[];
  } catch {
    return [];
  }
}

function saveWebUsers(usersList: WebUser[]) {
  if (typeof window === 'undefined' || !('localStorage' in window)) return;
  try {
    window.localStorage.setItem(WEB_USERS_KEY, JSON.stringify(usersList));
  } catch {
    // ignore
  }
}

export default function AuthScreen() {
  const { t } = useTranslation();
  const [mode, setMode] = React.useState<Mode>('login');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const existing = getCurrentUser();
    if (existing) {
      router.replace('/(tabs)/dashboard');
    }
  }, []);

  const handleSubmitNative = async () => {
    if (!email || !password || (mode === 'signup' && !name)) {
      Alert.alert('Missing details', 'Please fill all required fields.');
      return;
    }

    try {
      setLoading(true);

      if (mode === 'signup') {
        const existing = await db.select().from(users).where(eq(users.email, email.toLowerCase()));
        if (existing.length > 0) {
          Alert.alert(
            t('auth_tab_signup'),
            t('auth_button_login'),
          );
          return;
        }

        await db.insert(users).values({
          name,
          email: email.toLowerCase(),
          password,
          createdAt: new Date(),
        });

        Alert.alert(t('app_name'), t('auth_button_signup'));
        setMode('login');
        setPassword('');
        return;
      }

      const found = await db.select().from(users).where(eq(users.email, email.toLowerCase()));
      if (found.length === 0 || found[0]?.password !== password) {
        Alert.alert('Login', 'Invalid email or password.');
        return;
      }

      setCurrentUser({
        id: found[0].id,
        name: found[0].name,
        email: found[0].email,
      });

      Alert.alert(t('auth_tab_login'), t('auth_heading_login'));
      router.replace('/(tabs)/dashboard');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitWeb = async () => {
    if (!email || !password || (mode === 'signup' && !name)) {
      Alert.alert('Missing details', 'Please fill all required fields.');
      return;
    }

    try {
      setLoading(true);
      const usersList = loadWebUsers();
      const lowerEmail = email.toLowerCase();

      if (mode === 'signup') {
        const existing = usersList.find((u) => u.email === lowerEmail);
        if (existing) {
          Alert.alert(
            t('auth_tab_signup'),
            t('auth_button_login'),
          );
          return;
        }

        const newUser: WebUser = {
          id: usersList.length ? usersList[usersList.length - 1].id + 1 : 1,
          name,
          email: lowerEmail,
          password,
          createdAt: Date.now(),
        };

        saveWebUsers([...usersList, newUser]);
        Alert.alert(t('app_name'), t('auth_button_signup'));
        setMode('login');
        setPassword('');
        return;
      }

      const found = usersList.find((u) => u.email === lowerEmail && u.password === password);
      if (!found) {
        Alert.alert('Login', 'Invalid email or password.');
        return;
      }

      setCurrentUser({
        id: found.id,
        name: found.name,
        email: found.email,
      });

      Alert.alert(t('auth_tab_login'), t('auth_heading_login'));
      router.replace('/(tabs)/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (Platform.OS === 'web') {
      await handleSubmitWeb();
    } else {
      await handleSubmitNative();
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          ...SCREEN_OPTIONS,
          title: t('auth_title_login_signup'),
        }}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-background"
        keyboardShouldPersistTaps="handled">
        <View className="flex-1 gap-8 px-6 pb-10 pt-20">
          <View className="gap-2">
            <Text className="text-xs font-medium uppercase tracking-wide text-primary">
              {t('auth_brand')}
            </Text>
            <Text className="text-2xl font-semibold text-foreground">
              {mode === 'login' ? t('auth_heading_login') : t('auth_heading_signup')}
            </Text>
            <Text className="text-sm text-muted-foreground">
              {t('auth_subtitle')}
            </Text>
          </View>

          <View className="flex-row rounded-full border border-border/70 bg-card/80 p-1">
            <Button
              variant={mode === 'login' ? 'default' : 'ghost'}
              className="flex-1 rounded-full"
              onPress={mode === 'login' ? undefined : () => setMode('login')}>
              <Text className="text-sm font-medium">
                {t('auth_tab_login')}
              </Text>
            </Button>
            <Button
              variant={mode === 'signup' ? 'default' : 'ghost'}
              className="flex-1 rounded-full"
              onPress={mode === 'signup' ? undefined : () => setMode('signup')}>
              <Text className="text-sm font-medium">
                {t('auth_tab_signup')}
              </Text>
            </Button>
          </View>

          <View className="gap-4">
            {mode === 'signup' && (
              <View className="gap-1.5">
                <Text className="text-xs font-medium text-muted-foreground">
                  {t('auth_label_full_name')}
                </Text>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder={t('auth_placeholder_full_name')}
                  className="rounded-xl border border-border bg-card px-3 py-2 text-foreground"
                  placeholderTextColor="#9ca3af"
                />
              </View>
            )}

            <View className="gap-1.5">
              <Text className="text-xs font-medium text-muted-foreground">
                {t('auth_label_email')}
              </Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder={t('auth_placeholder_email')}
                className="rounded-xl border border-border bg-card px-3 py-2 text-foreground"
                placeholderTextColor="#9ca3af"
              />
            </View>

            <View className="gap-1.5">
              <Text className="text-xs font-medium text-muted-foreground">
                {t('auth_label_password')}
              </Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder={t('auth_placeholder_password')}
                className="rounded-xl border border-border bg-card px-3 py-2 text-foreground"
                placeholderTextColor="#9ca3af"
              />
            </View>
          </View>

          <Button disabled={loading} onPress={handleSubmit} className="mt-2 rounded-2xl">
            <Text className="font-medium text-primary-foreground">
              {loading
                ? t('auth_button_loading')
                : mode === 'login'
                  ? t('auth_button_login')
                  : t('auth_button_signup')}
            </Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
}

