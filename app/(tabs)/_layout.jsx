import { Colors } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:Colors.purple_bg
    }}>
        <Tabs.Screen name = "mytrip"
        options={{
          tabBarLabel: 'My Trip',
          tabBarIcon:({color})=> <Ionicons name="location-sharp" 
          size={24} color={color} />
        }}
        />
        <Tabs.Screen name = "discover"
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon:({color})=> <Ionicons name="globe-sharp" 
          size={24} color={color} /> 
        }}/>
        <Tabs.Screen name = "profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon:({color})=> <Ionicons name="person-circle-sharp" 
          size={24} color={color} />
        }}/>
    </Tabs>
  )
}