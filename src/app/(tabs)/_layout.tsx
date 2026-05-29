import AppText from '@/components/customs/app-text';
import {
    Ionicons
} from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,

                tabBarActiveTintColor: '#2563EB',
                tabBarInactiveTintColor: '#94A3B8',

                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 1,
                    right: 1,
                    elevation: 0,

                    backgroundColor: '#FFFFFF',
                    borderRadius: 24,

                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 10,

                    borderTopWidth: 0,

                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.08,
                    shadowRadius: 20,
                },

                sceneStyle: {
                    backgroundColor: "white"
                },

                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: ({ color }) => (
                        <AppText
                            style={{
                                color,
                                fontSize: 12,
                                marginBottom: 4,
                            }}
                        >
                            ទំព័រដើម
                        </AppText>
                    ),
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="friend"
                options={{
                    tabBarLabel: ({ color }) => (
                        <AppText
                            style={{
                                color,
                                fontSize: 12,
                                marginBottom: 4,
                            }}
                        >
                            ប្រតិទិន
                        </AppText>
                    ),

                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? 'people' : 'people-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="notification"
                options={{
                    tabBarLabel: ({ color }) => (
                        <AppText
                            style={{
                                color,
                                fontSize: 12,
                                marginBottom: 4,
                            }}
                        >
                            ប្រូហ្វាល់
                        </AppText>
                    ),
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? 'notifications' : 'notifications-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="reel"
                options={{
                    tabBarLabel: ({ color }) => (
                        <AppText
                            style={{
                                color,
                                fontSize: 12,
                                marginBottom: 4,
                            }}
                        >
                            REEL
                        </AppText>
                    ),
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? 'videocam' : 'videocam-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}