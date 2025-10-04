import { Image } from "expo-image";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Transition from "react-native-screen-transitions";
import { styles } from "@/styles";

export default function FoodPage() {
	const insets = useSafeAreaInsets();

	return (
		<Transition.MaskedView style={{ backgroundColor: "red" }}>
			<View
				style={[
					styles.layout.container,
					styles.spacing.paddingMd,
					{ paddingTop: insets.top },
				]}
			>
				<Text style={styles.typography.h1}>Food Page</Text>
				<View style={styles.spacing.marginVerticalMd}>
					<Transition.View
						sharedBoundTag={"food-card-beans"}
						style={{ width: 200, height: 200 }}
					>
						<Image
							cachePolicy={"memory-disk"}
							source={
								"https://images.ctfassets.net/ruek9xr8ihvu/4j9jzebt9tm8MnjxygdbF4/93af1c940c04d64afbb284950a5de569/Black-Eyed-Peas_Edited-scaled.jpg"
							}
							style={[styles.components.foodCardImage]}
						/>
					</Transition.View>
				</View>
			</View>
		</Transition.MaskedView>
	);
}
