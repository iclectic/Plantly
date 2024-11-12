import React from 'react';
import { Redirect, Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import {theme} from "@/theme"
import { useUserStore} from "@/store/userStore";
import AntDesign from '@expo/vector-icons/AntDesign';


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
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ size, color}) => (<Ionicons name="leaf-sharp" size={size} color={color} />
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