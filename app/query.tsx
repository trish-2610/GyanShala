import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import {
  LOCATION_DATA,
  STATES,
  getExpertForLocation,
  type Expert,
} from '@/lib/locationExperts';
import { Stack, router } from 'expo-router';
import * as React from 'react';
import {
  Linking,
  Platform,
  Pressable,
  ScrollView,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Mail, Phone, MessageCircle } from 'lucide-react-native';

const SCREEN_OPTIONS = {
  title: 'Query',
};

const PICKER_STYLE = {
  color: '#111827',
  fontSize: 14,
  paddingVertical: 4,
  marginVertical: 0,
};

function openEmail(email: string) {
  Linking.openURL(`mailto:${email}`).catch(() => {});
}

function openCall(mobile: string) {
  const tel = mobile.replace(/\D/g, '');
  Linking.openURL(`tel:${tel}`).catch(() => {});
}

function openWhatsApp(mobile: string) {
  const num = mobile.replace(/\D/g, '');
  const url = `https://wa.me/${num}`;
  Linking.openURL(url).catch(() => {});
}

function ExpertCard({ expert }: { expert: Expert }) {
  return (
    <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
      <Text className="text-sm font-semibold text-foreground">Your local expert</Text>
      <Text className="text-base font-medium text-foreground">{expert.name}</Text>

      <Pressable
        onPress={() => openEmail(expert.email)}
        className="flex-row items-center gap-2 active:opacity-80">
        <Mail size={16} color="#6b7280" />
        <Text className="text-sm text-primary underline">{expert.email}</Text>
      </Pressable>

      <View className="gap-2">
        <Text className="text-sm text-muted-foreground">Mobile</Text>
        <Text className="text-sm font-medium text-foreground">{expert.mobile}</Text>
        <View className="flex-row gap-2 mt-1">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 rounded-xl flex-row items-center justify-center gap-2"
            onPress={() => openCall(expert.mobile)}>
            <Phone size={16} />
            <Text className="text-xs font-medium">Call</Text>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 rounded-xl flex-row items-center justify-center gap-2"
            onPress={() => openWhatsApp(expert.mobile)}>
            <MessageCircle size={16} />
            <Text className="text-xs font-medium">WhatsApp</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

export default function QueryScreen() {
  const [state, setState] = React.useState<string>(STATES[0]?.value ?? '');
  const stateData = state ? LOCATION_DATA[state] : null;
  const districts = stateData?.districts ?? [];
  const cities = stateData?.cities ?? [];

  const [district, setDistrict] = React.useState<string>('');
  const [city, setCity] = React.useState<string>('');

  // Initialize and sync district/city when state or district changes
  React.useEffect(() => {
    const stateInfo = state ? LOCATION_DATA[state] : null;
    const distList = stateInfo?.districts ?? [];
    if (distList.length > 0) {
      setDistrict((prev) =>
        distList.some((d) => d.value === prev) ? prev : distList[0].value
      );
    } else {
      setDistrict('');
    }
  }, [state]);
  React.useEffect(() => {
    const stateInfo = state ? LOCATION_DATA[state] : null;
    const cityList = stateInfo?.cities ?? [];
    if (cityList.length > 0) {
      setCity((prev) =>
        cityList.some((c) => c.value === prev) ? prev : cityList[0].value
      );
    } else {
      setCity('');
    }
  }, [state, district]);

  const hasSelection = !!state && !!district && !!city;
  const expert = hasSelection
    ? getExpertForLocation(state, district, city)
    : null;

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
              Query
            </Text>
            <Text className="text-2xl font-semibold text-foreground">
              Ask your questions
            </Text>
            <Text className="text-sm text-muted-foreground">
              Select your location to connect with a local expert. You can reach
              them by email, call or WhatsApp.
            </Text>
          </View>

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">
              Your location
            </Text>
            <Text className="text-xs text-muted-foreground mb-1">
              State
            </Text>
            <View className="rounded-md border border-border bg-card px-1 py-0.5 mb-3">
              <Picker
                selectedValue={state}
                onValueChange={(v) => {
                  setState(v);
                  setDistrict('');
                  setCity('');
                }}
                dropdownIconColor={
                  Platform.OS === 'android' || Platform.OS === 'ios'
                    ? '#9ca3af'
                    : undefined
                }
                style={PICKER_STYLE}>
                {STATES.map((s) => (
                  <Picker.Item
                    key={s.value}
                    label={s.label}
                    value={s.value}
                  />
                ))}
              </Picker>
            </View>

            <Text className="text-xs text-muted-foreground mb-1">
              Province / District
            </Text>
            <View className="rounded-md border border-border bg-card px-1 py-0.5 mb-3">
              <Picker
                selectedValue={district}
                onValueChange={setDistrict}
                enabled={districts.length > 0}
                dropdownIconColor={
                  Platform.OS === 'android' || Platform.OS === 'ios'
                    ? '#9ca3af'
                    : undefined
                }
                style={PICKER_STYLE}>
                {districts.map((d) => (
                  <Picker.Item
                    key={d.value}
                    label={d.label}
                    value={d.value}
                  />
                ))}
              </Picker>
            </View>

            <Text className="text-xs text-muted-foreground mb-1">
              City
            </Text>
            <View className="rounded-md border border-border bg-card px-1 py-0.5">
              <Picker
                selectedValue={city}
                onValueChange={setCity}
                enabled={cities.length > 0}
                dropdownIconColor={
                  Platform.OS === 'android' || Platform.OS === 'ios'
                    ? '#9ca3af'
                    : undefined
                }
                style={PICKER_STYLE}>
                {cities.map((c) => (
                  <Picker.Item
                    key={c.value}
                    label={c.label}
                    value={c.value}
                  />
                ))}
              </Picker>
            </View>
          </View>

          {expert && <ExpertCard expert={expert} />}

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">
              Coming soon
            </Text>
            <Text className="text-xs text-muted-foreground">
              You will be able to type your questions here and see responses in
              your preferred language. For now, use the expert above for support.
            </Text>
          </View>

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
