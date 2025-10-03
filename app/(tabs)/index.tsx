import { StyleSheet, View } from 'react-native';

import FoodCard from '@/components/FoodCard';
import { styles as appStyles } from '@/styles';

export default function HomeScreen() {
  return (
    <View style={[appStyles.layout.container, appStyles.spacing.paddingMd]}>
      <FoodCard slug="beans" image="https://images.ctfassets.net/ruek9xr8ihvu/4j9jzebt9tm8MnjxygdbF4/93af1c940c04d64afbb284950a5de569/Black-Eyed-Peas_Edited-scaled.jpg">
        Beans
      </FoodCard>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
