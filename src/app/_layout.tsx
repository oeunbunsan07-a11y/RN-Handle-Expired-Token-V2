import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { configureGlobalText } from '@/configs/text-config';
import { useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import "../../global.css";
import { AuthProvider, useAuth } from '../contexts/auth-context';

// Initialize global font settings
configureGlobalText();

function App() {
  const { token }: any = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)'; // e.g., if login is under an (auth) folder

    if (!token && !inAuthGroup) {
      // Redirect to sign-in if not logged in
      router.replace('/login');
    } else if (token && inAuthGroup) {
      // Redirect to home if logged in trying to access login page
      router.replace('/(tabs)/home');
    }
  }, [token, segments]);

  return <Stack screenOptions={{
    headerShown: false,
    contentStyle: {
      backgroundColor: "white",
      padding: 16
    }
  }} />;
}

export default function RootLayout() {
  useFonts({
    k1: require("@/assets/fonts/KantumruyPro-Regular.ttf"),
    k2: require("@/assets/fonts/Siemreap-Regular.ttf"),
  });
  return (
    <AuthProvider>
      <GluestackUIProvider>
        <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
          <App />
        </SafeAreaView>
      </GluestackUIProvider>
    </AuthProvider>
  );
}
