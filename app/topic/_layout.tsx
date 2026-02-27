import { Stack } from 'expo-router';

export default function TopicLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerBackTitle: 'Studies',
      }}
    />
  );
}
