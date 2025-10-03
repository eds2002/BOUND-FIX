import { Colors } from '@/constants/theme';
import { Platform, StyleSheet } from 'react-native';

// Base dimensions and spacing
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 999,
};

export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const fontWeights = {
  normal: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

// Layout styles
export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  containerDark: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexShrink: {
    flexShrink: 1,
  },
});

// Padding and margin styles
export const spacingStyles = StyleSheet.create({
  // Padding
  paddingXs: { padding: spacing.xs },
  paddingSm: { padding: spacing.sm },
  paddingMd: { padding: spacing.md },
  paddingLg: { padding: spacing.lg },
  paddingXl: { padding: spacing.xl },
  
  // Padding horizontal
  paddingHorizontalXs: { paddingHorizontal: spacing.xs },
  paddingHorizontalSm: { paddingHorizontal: spacing.sm },
  paddingHorizontalMd: { paddingHorizontal: spacing.md },
  paddingHorizontalLg: { paddingHorizontal: spacing.lg },
  paddingHorizontalXl: { paddingHorizontal: spacing.xl },
  
  // Padding vertical
  paddingVerticalXs: { paddingVertical: spacing.xs },
  paddingVerticalSm: { paddingVertical: spacing.sm },
  paddingVerticalMd: { paddingVertical: spacing.md },
  paddingVerticalLg: { paddingVertical: spacing.lg },
  paddingVerticalXl: { paddingVertical: spacing.xl },
  
  // Margin
  marginXs: { margin: spacing.xs },
  marginSm: { margin: spacing.sm },
  marginMd: { margin: spacing.md },
  marginLg: { margin: spacing.lg },
  marginXl: { margin: spacing.xl },
  
  // Margin horizontal
  marginHorizontalXs: { marginHorizontal: spacing.xs },
  marginHorizontalSm: { marginHorizontal: spacing.sm },
  marginHorizontalMd: { marginHorizontal: spacing.md },
  marginHorizontalLg: { marginHorizontal: spacing.lg },
  marginHorizontalXl: { marginHorizontal: spacing.xl },
  
  // Margin vertical
  marginVerticalXs: { marginVertical: spacing.xs },
  marginVerticalSm: { marginVertical: spacing.sm },
  marginVerticalMd: { marginVertical: spacing.md },
  marginVerticalLg: { marginVertical: spacing.lg },
  marginVerticalXl: { marginVertical: spacing.xl },
  
  // Gap
  gapXs: { gap: spacing.xs },
  gapSm: { gap: spacing.sm },
  gapMd: { gap: spacing.md },
  gapLg: { gap: spacing.lg },
  gapXl: { gap: spacing.xl },
});

// Typography styles
export const typographyStyles = StyleSheet.create({
  // Headings
  h1: {
    fontSize: fontSizes.xxxl,
    fontWeight: fontWeights.bold,
    color: Colors.light.text,
    marginBottom: spacing.md,
  },
  h1Dark: {
    fontSize: fontSizes.xxxl,
    fontWeight: fontWeights.bold,
    color: Colors.dark.text,
    marginBottom: spacing.md,
  },
  h2: {
    fontSize: fontSizes.xxl,
    fontWeight: fontWeights.bold,
    color: Colors.light.text,
    marginBottom: spacing.sm,
  },
  h2Dark: {
    fontSize: fontSizes.xxl,
    fontWeight: fontWeights.bold,
    color: Colors.dark.text,
    marginBottom: spacing.sm,
  },
  h3: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.semibold,
    color: Colors.light.text,
    marginBottom: spacing.sm,
  },
  h3Dark: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.semibold,
    color: Colors.dark.text,
    marginBottom: spacing.sm,
  },
  
  // Body text
  body: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.normal,
    color: Colors.light.text,
    lineHeight: fontSizes.md * 1.5,
  },
  bodyDark: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.normal,
    color: Colors.dark.text,
    lineHeight: fontSizes.md * 1.5,
  },
  bodySmall: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    color: Colors.light.text,
    lineHeight: fontSizes.sm * 1.4,
  },
  bodySmallDark: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    color: Colors.dark.text,
    lineHeight: fontSizes.sm * 1.4,
  },
  
  // Labels
  label: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    color: Colors.light.text,
  },
  labelDark: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    color: Colors.dark.text,
  },
  
  // Caption
  caption: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    color: Colors.light.icon,
  },
  captionDark: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    color: Colors.dark.icon,
  },
});

// Component-specific styles
export const componentStyles = StyleSheet.create({
  // FoodCard styles
  foodCard: {
    height: '100%',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: borderRadius.md,
    paddingBottom: spacing.sm,
    backgroundColor: 'transparent',
  },
  foodCardUnlocked: {
    height: '100%',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: borderRadius.md,
    paddingBottom: spacing.sm,
    backgroundColor: Colors.light.tint,
  },
  foodCardImageContainer: {
    padding: spacing.sm,
  },
  foodCardImage: {
    borderRadius: borderRadius.full,
    width: '100%',
    aspectRatio: 1,
  },
  foodCardText: {
    marginHorizontal: spacing.xs,
    textAlign: 'center',
    fontSize: fontSizes.sm,
    color: Colors.light.text,
  },
  foodCardTextUnlocked: {
    marginHorizontal: spacing.xs,
    textAlign: 'center',
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.semibold,
    color: Colors.light.tint,
  },
  
  // Button styles
  button: {
    backgroundColor: Colors.light.tint,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.light.background,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium,
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.light.tint,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSecondaryText: {
    color: Colors.light.tint,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium,
  },
  
  // Card styles
  card: {
    backgroundColor: Colors.light.background,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    ...(Platform.OS === 'ios' && {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
    }),
  },
  
  // Input styles
  input: {
    borderWidth: 1,
    borderColor: Colors.light.icon,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: fontSizes.md,
    color: Colors.light.text,
    backgroundColor: Colors.light.background,
  },
  inputFocused: {
    borderColor: Colors.light.tint,
  },
});

// Dark mode component styles
export const darkComponentStyles = StyleSheet.create({
  // FoodCard dark styles
  foodCardUnlocked: {
    height: '100%',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: borderRadius.md,
    paddingBottom: spacing.sm,
    backgroundColor: Colors.dark.tint,
  },
  foodCardText: {
    marginHorizontal: spacing.xs,
    textAlign: 'center',
    fontSize: fontSizes.sm,
    color: Colors.dark.text,
  },
  foodCardTextUnlocked: {
    marginHorizontal: spacing.xs,
    textAlign: 'center',
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.semibold,
    color: Colors.dark.tint,
  },
  
  // Button dark styles
  button: {
    backgroundColor: Colors.dark.tint,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.dark.background,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium,
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.dark.tint,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSecondaryText: {
    color: Colors.dark.tint,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium,
  },
  
  // Card dark styles
  card: {
    backgroundColor: Colors.dark.background,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  // Input dark styles
  input: {
    borderWidth: 1,
    borderColor: Colors.dark.icon,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: fontSizes.md,
    color: Colors.dark.text,
    backgroundColor: Colors.dark.background,
  },
  inputFocused: {
    borderColor: Colors.dark.tint,
  },
});

// Utility styles
export const utilityStyles = StyleSheet.create({
  // Position
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
  
  // Display
  hidden: {
    display: 'none',
  },
  visible: {
    display: 'flex',
  },
  
  // Overflow
  overflowHidden: {
    overflow: 'hidden',
  },
  
  // Border radius
  roundedSm: {
    borderRadius: borderRadius.sm,
  },
  roundedMd: {
    borderRadius: borderRadius.md,
  },
  roundedLg: {
    borderRadius: borderRadius.lg,
  },
  roundedXl: {
    borderRadius: borderRadius.xl,
  },
  roundedFull: {
    borderRadius: borderRadius.full,
  },
  
  // Shadow
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  shadowLarge: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.27,
    elevation: 10,
  },
});

// Export all styles as a single object for easy access
export const styles = {
  layout: layoutStyles,
  spacing: spacingStyles,
  typography: typographyStyles,
  components: componentStyles,
  darkComponents: darkComponentStyles,
  utility: utilityStyles,
  constants: {
    spacing,
    borderRadius,
    fontSizes,
    fontWeights,
  },
};
