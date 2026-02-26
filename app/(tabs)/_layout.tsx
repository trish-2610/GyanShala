import { Tabs } from 'expo-router';
import { useColorScheme } from 'nativewind';
import {
  BookOpenIcon,
  HelpCircleIcon,
  ListChecksIcon,
  LayoutDashboardIcon,
  UserIcon,
} from 'lucide-react-native';

export default function TabsLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Tabs
      initialRouteName="dashboard"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isDark ? '#38bdf8' : '#2563eb',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: {
          backgroundColor: isDark ? '#020617' : '#ffffff',
          borderTopColor: isDark ? '#1f2937' : '#e5e7eb',
        },
        tabBarLabelStyle: {
          fontSize: 11,
        },
      }}>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <LayoutDashboardIcon color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="studies"
        options={{
          title: 'Studies',
          tabBarIcon: ({ color, size }) => <BookOpenIcon color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="query"
        options={{
          title: 'Query',
          tabBarIcon: ({ color, size }) => <HelpCircleIcon color={color} size={size} />,
          href: null,
        }}
      />

      <Tabs.Screen
        name="test"
        options={{
          title: 'Test',
          tabBarIcon: ({ color, size }) => <ListChecksIcon color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <UserIcon color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}

