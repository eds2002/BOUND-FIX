import { styles } from "@/styles";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Transition from "react-native-screen-transitions";

export default function FoodPage() {
    const insets = useSafeAreaInsets();
    const { id } = useLocalSearchParams();
    return (
        <Transition.MaskedView>
        <View style={[styles.layout.container, styles.spacing.paddingMd, { paddingTop: insets.top }]}>
            <Text style={styles.typography.h1}>Food Page</Text>
            <View style={styles.spacing.marginVerticalMd}>
                <Transition.View sharedBoundTag={'food-card-beans'}>
                    <Image
                        cachePolicy={'memory-disk'}
                        source={"https://images.ctfassets.net/ruek9xr8ihvu/4j9jzebt9tm8MnjxygdbF4/93af1c940c04d64afbb284950a5de569/Black-Eyed-Peas_Edited-scaled.jpg"}
                        style={[styles.components.foodCardImage, { width: 200, height: 200 }]}
                    />
                </Transition.View>
            </View>
        </View>
        </Transition.MaskedView>
    )
}