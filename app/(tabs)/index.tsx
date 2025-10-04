import { View } from "react-native";

import FoodCard from "@/components/FoodCard";
import { styles as appStyles } from "@/styles";

export default function HomeScreen() {
	return (
		<View style={[appStyles.layout.container, appStyles.spacing.paddingMd]}>
			<FoodCard
				slug="beans"
				image="https://images.ctfassets.net/ruek9xr8ihvu/4j9jzebt9tm8MnjxygdbF4/93af1c940c04d64afbb284950a5de569/Black-Eyed-Peas_Edited-scaled.jpg"
			>
				Beans
			</FoodCard>
		</View>
	);
}
