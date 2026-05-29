import { authService } from '@/apis/auth-service';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '@/components/customs/app-text';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { Input, InputField } from '@/components/ui/input';
import { Pressable } from '@/components/ui/pressable';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { Text } from '@/components/ui/text';

const Login = () => {
  const router = useRouter();
  const { setToken }: any = useAuth();

  const [email, setEmail] : any = useState('');
  const [password, setPassword] : any = useState('');

  const onSubmit = async () => {
    const payload = {
      "email" : email,
      "password" : password
    };

    alert(JSON.stringify(payload))
    try {
      const res = await authService.login(payload);
      const token = res?.access_token;
      if (token) {
        // Save it the global state too, in order to redirect to / when login success.
        await setToken(token);
        
        router.replace("/(tabs)/home")
      } else {
        alert('No access token returned');
      }
    } catch (error) {
      console.log(error);
      alert('Login failed');
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Heading>Welcome Back</Heading>
          <AppText>Sign in to continue</AppText>
        </View>

        {/* Card */}
        <View style={styles.card}>

          {/* Email */}
          <View style={styles.field}>
            <Text style={styles.label}>EMAIL</Text>
            <Input>
              <InputField value={email} placeholder="you@example.com" onChangeText={setEmail} />
            </Input>
          </View>

          {/* Password */}
          <View style={styles.field}>
            <AppText>PASSWORD</AppText>
            <Input>
              <InputField value={password} size="5xl" placeholder="••••••••" secureTextEntry onChangeText={setPassword} />
            </Input>
          </View>

          {/* Forgot */}
          <Pressable>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </Pressable>

          {/* Button */}
          <Button onPress={() => onSubmit()}>
            <ButtonText>Login</ButtonText>
          </Button>

          {/* Divider */}
          <View style={styles.dividerRow}>
            <Divider style={{ flex: 1 }} />
            <Text style={styles.or}>OR CONTINUE WITH</Text>
            <Divider style={{ flex: 1 }} />
          </View>

          {/* Social */}
          <View style={styles.socialRow}>
            <Button variant="outline" style={styles.socialBtn}>
              <ButtonText>Google</ButtonText>
            </Button>

            <Button variant="outline" style={styles.socialBtn}>
              <ButtonText>Facebook</ButtonText>
            </Button>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>Don't have an account?</Text>
          <Pressable onPress={() => router.push("/register")}>
            <Text style={styles.signup}> Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
  },

  header: {
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    gap: 15,
  },

  field: {
    gap: 6,
  },

  label: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6b7280',
  },

  forgot: {
    textAlign: 'right',
    fontSize: 12,
    color: '#2563eb',
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },

  or: {
    fontSize: 11,
    color: '#9ca3af',
  },

  socialRow: {
    flexDirection: 'row',
    gap: 10,
  },

  socialBtn: {
    flex: 1,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  signup: {
    color: '#2563eb',
    fontWeight: '600',
  },
});

export default Login;