import { authService } from '@/apis/auth-service';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '@/components/customs/app-text';
import { Button } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { Input, InputField } from '@/components/ui/input';
import { SafeAreaView } from '@/components/ui/safe-area-view';

const Login = () => {
    const router = useRouter();
    const { setToken }: any = useAuth();

    const [email, setEmail]: any = useState('');
    const [password, setPassword]: any = useState('');

    const onSubmit = async () => {
        const payload = {
            "email": email,
            "password": password
        };

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
                    <AppText style={{ fontSize: 20 }}>{"បង្កើតគរណីថ្មី"}</AppText>
                </View>

                {/* Card */}
                <View style={styles.card}>

                    {/* Email */}
                    <View style={styles.field}>
                        <AppText>{"អុីម៉ែល"}</AppText>
                        <Input>
                            <InputField value={email} placeholder="you@example.com" onChangeText={setEmail} />
                        </Input>
                    </View>

                    {/* Password */}
                    <View style={styles.field}>
                        <AppText>{"ពាក្យសម្ងាត់"}</AppText>
                        <Input>
                            <InputField value={password} size="5xl" placeholder="••••••••" secureTextEntry onChangeText={setPassword} />
                        </Input>
                    </View>

                    {/* Button */}
                    <Button onPress={() => onSubmit()}>
                        <AppText style={{ color: "white" }}>{"ចុះឈ្មោះ"}</AppText>
                    </Button>

                    {/* Divider */}
                    <View style={styles.dividerRow}>
                        <Divider style={{ flex: 1 }} />
                        <Divider style={{ flex: 1 }} />
                    </View>
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