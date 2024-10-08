import { Tabs, Redirect } from "expo-router"
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {theme} from "@/theme"
import { useUserStore} from "@/store/userStore";

export default function Layout() {
    const hasFinishedOnboarding = useUserStore(
        (state) => state.hasFinishedOnboarding,
    );
    
    if (!hasFinishedOnboarding) {
        return <Redirect href="/onboarding" />;
    }

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}> 
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({ size, color}) => <Ionicons name="leaf-sharp" size={size} color={color} />
            }} />
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                tabBarIcon: ({ size, color }) => <AntDesign name="user" size={size} color={color} />
            }} />
        </Tabs>
    )
}