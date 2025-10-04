import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "@/util/Stack";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Transition from "react-native-screen-transitions";
import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
	anchor: "(tabs)",
};

export default function RootLayout() {
	const colorScheme = useColorScheme();

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<GestureHandlerRootView>
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					<Stack.Screen
						name="food-page"
						options={{
							title: "Food Page",
							...Transition.presets.SharedIGImage(),
						}}
					/>
				</Stack>
				<StatusBar style="auto" />
			</GestureHandlerRootView>
		</ThemeProvider>
	);
}
