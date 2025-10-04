import { Image } from "expo-image";
import { router } from "expo-router";
import { View } from "react-native";
import Transition from "react-native-screen-transitions";
import { borderRadius, styles } from "@/styles";

interface FoodCardProps {
	children: React.ReactNode;
	unlocked?: boolean;
	slug: string;
	image: string;
}

export default function FoodCard({ unlocked = false, image }: FoodCardProps) {
	return (
		<View
			style={
				unlocked
					? styles.components.foodCardUnlocked
					: styles.components.foodCard
			}
		>
			<View>
				<Transition.Pressable
					sharedBoundTag={"food-card-beans"}
					style={{
						borderRadius: borderRadius.full,
						width: "100%",
						aspectRatio: 1,
					}}
					onPress={() => {
						router.push({
							pathname: `/food-page`,
							params: { id: "beans" },
						});
					}}
				>
					<Image
						cachePolicy={"memory-disk"}
						source={image}
						style={styles.components.foodCardImage}
					/>
				</Transition.Pressable>
			</View>
		</View>
	);
}
