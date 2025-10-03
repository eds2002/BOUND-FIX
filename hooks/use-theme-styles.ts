import { styles } from '@/styles';
import { useColorScheme } from 'react-native';

export function useThemeStyles() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return {
    isDark,
    // Layout styles
    container: isDark ? styles.layout.containerDark : styles.layout.container,
    
    // Typography styles
    h1: isDark ? styles.typography.h1Dark : styles.typography.h1,
    h2: isDark ? styles.typography.h2Dark : styles.typography.h2,
    h3: isDark ? styles.typography.h3Dark : styles.typography.h3,
    body: isDark ? styles.typography.bodyDark : styles.typography.body,
    bodySmall: isDark ? styles.typography.bodySmallDark : styles.typography.bodySmall,
    label: isDark ? styles.typography.labelDark : styles.typography.label,
    caption: isDark ? styles.typography.captionDark : styles.typography.caption,
    
    // Component styles
    button: isDark ? styles.darkComponents.button : styles.components.button,
    buttonText: isDark ? styles.darkComponents.buttonText : styles.components.buttonText,
    buttonSecondary: isDark ? styles.darkComponents.buttonSecondary : styles.components.buttonSecondary,
    buttonSecondaryText: isDark ? styles.darkComponents.buttonSecondaryText : styles.components.buttonSecondaryText,
    card: isDark ? styles.darkComponents.card : styles.components.card,
    input: isDark ? styles.darkComponents.input : styles.components.input,
    inputFocused: isDark ? styles.darkComponents.inputFocused : styles.components.inputFocused,
    
    // FoodCard specific
    foodCard: isDark ? styles.darkComponents.foodCardUnlocked : styles.components.foodCard,
    foodCardUnlocked: isDark ? styles.darkComponents.foodCardUnlocked : styles.components.foodCardUnlocked,
    foodCardText: isDark ? styles.darkComponents.foodCardText : styles.components.foodCardText,
    foodCardTextUnlocked: isDark ? styles.darkComponents.foodCardTextUnlocked : styles.components.foodCardTextUnlocked,
    
    // Common styles (these don't change with theme)
    layout: styles.layout,
    spacing: styles.spacing,
    utility: styles.utility,
    constants: styles.constants,
  };
}
