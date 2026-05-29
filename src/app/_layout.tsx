// app/_layout.tsx
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import "../../global.css";
import { AuthProvider, useAuth } from '../contexts/auth-context';

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
      router.replace('/');
    }
  }, [token, segments]);

  return <Stack />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <GluestackUIProvider>
        <App />
      </GluestackUIProvider>
    </AuthProvider>
  );
}
