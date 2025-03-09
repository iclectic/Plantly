import { Redirect, Tabs, Link } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {theme} from "@/theme"
import { useUserStore} from "@/store/userStore";
import Feather from '@expo/vector-icons/Feather';
import { Pressable } from "react-native";

export default function Layout() {
    const hasFinishedOnboarding = useUserStore(
        (state) => state.hasFinishedOnboarding,
    );
    
    if (!hasFinishedOnboarding) {
        return <Redirect href="/onboarding" />;
    }

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}> 
            <Tabs.Screen 
               name="(home)" 
               options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({ size, color}) => (<Ionicons name="leaf-sharp" size={size} color={color} />
                ),
                headerRight: () => (
                    <Link href="/new" asChild>
                    <Pressable style={{ marginRight: 18}} hitSlop={20}>
                        <Feather name="plus-circle" size={24} color={theme.colorGreen} />
                    </Pressable>
                    </Link>
                  ),
                }} 
            />
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                tabBarIcon: ({ size, color }) => <AntDesign name="user" size={size} color={color} />
            }} />
        </Tabs>
    )
}