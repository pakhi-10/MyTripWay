import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  
  useFonts({
    sans_reg: require('../assets/fonts/GoogleSans-Regular.ttf'),
    sans_bold: require('../assets/fonts/GoogleSans-Bold.ttf'),
    sans_boldItalic: require('../assets/fonts/GoogleSans-BoldItalic.ttf'),
    sans_italic: require('../assets/fonts/GoogleSans-Italic.ttf'),
  })

  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name = "index"/>
    </Stack>
  ); 
}
 