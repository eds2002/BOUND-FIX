import { styles } from '@/styles';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity as TouchableScale, View } from 'react-native';
import Transition from 'react-native-screen-transitions';

interface FoodCardProps {
  children: React.ReactNode;
  unlocked?: boolean;
  slug: string;
  image: string;
}

const AnimatedImage = Transition.createTransitionAwareComponent(Image);

export default function FoodCard({ children, unlocked = false, image, slug }: FoodCardProps) {
  const router = useRouter();
  return (
    <TouchableScale
      style={unlocked ? styles.components.foodCardUnlocked : styles.components.foodCard}
      onPress={() => {
        router.push({
          pathname: `/food-page`,
          params: { id: "beans" },
        });
      }}>
      <View style={styles.components.foodCardImageContainer}>
        <Transition.View sharedBoundTag={'food-card-beans'}>
          <Image
            cachePolicy={'memory-disk'}
            source={image}
            style={styles.components.foodCardImage}
          />
        </Transition.View>
      </View>
      <Text
        numberOfLines={1}
        style={unlocked ? styles.components.foodCardTextUnlocked : styles.components.foodCardText}>
        {children}
      </Text>
    </TouchableScale>
  );
}
