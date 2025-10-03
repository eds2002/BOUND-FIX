# Stylesheet System

This directory contains a comprehensive stylesheet system for the React Native app, providing consistent styling across all components.

## Structure

- `index.ts` - Main stylesheet with all style definitions
- `types.ts` - TypeScript type definitions for the styling system
- `README.md` - This documentation file

## Usage

### Basic Import

```typescript
import { styles } from '@/styles';

// Use styles directly
<View style={styles.layout.container}>
  <Text style={styles.typography.h1}>Hello World</Text>
</View>
```

### Theme-Aware Styling (Recommended)

```typescript
import { useThemeStyles } from '@/hooks/use-theme-styles';

function MyComponent() {
  const themeStyles = useThemeStyles();
  
  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.h1}>Hello World</Text>
      <TouchableOpacity style={themeStyles.button}>
        <Text style={themeStyles.buttonText}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}
```

## Available Style Categories

### Layout Styles
- `container` - Full height container with background
- `centered` - Centered content
- `row` - Horizontal flex layout
- `column` - Vertical flex layout
- `spaceBetween` - Space between items
- `flexGrow` - Flex grow

### Spacing Styles
- `paddingXs` through `paddingXl` - Various padding sizes
- `paddingHorizontalXs` through `paddingHorizontalXl` - Horizontal padding
- `paddingVerticalXs` through `paddingVerticalXl` - Vertical padding
- `marginXs` through `marginXl` - Various margin sizes
- `gapXs` through `gapXl` - Gap between flex items

### Typography Styles
- `h1`, `h2`, `h3` - Heading styles (with dark variants)
- `body`, `bodySmall` - Body text styles (with dark variants)
- `label` - Label text style (with dark variant)
- `caption` - Caption text style (with dark variant)

### Component Styles
- `button` - Primary button style
- `buttonSecondary` - Secondary button style
- `card` - Card container with shadow
- `input` - Input field style
- `foodCard` - Food card component styles
- All component styles have dark mode variants

### Utility Styles
- `absolute`, `relative` - Positioning
- `hidden`, `visible` - Display
- `overflowHidden` - Overflow
- `roundedSm` through `roundedFull` - Border radius
- `shadow`, `shadowLarge` - Shadow effects

## Constants

The styles system also provides constants for consistent spacing and sizing:

```typescript
import { styles } from '@/styles';

const { spacing, borderRadius, fontSizes, fontWeights } = styles.constants;

// Use in custom styles
const customStyle = StyleSheet.create({
  myComponent: {
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semibold,
  },
});
```

## Dark Mode Support

The `useThemeStyles` hook automatically provides dark mode variants of all styles based on the system color scheme. Simply use the hook and the appropriate styles will be applied automatically.

## Best Practices

1. **Use the theme hook**: Always use `useThemeStyles()` for theme-aware components
2. **Combine styles**: Use array syntax to combine multiple styles: `[styles.layout.container, styles.spacing.paddingMd]`
3. **Use constants**: Use the spacing and sizing constants for custom styles
4. **Consistent naming**: Follow the existing naming conventions when adding new styles
5. **Type safety**: Use the provided TypeScript types for better development experience

## Adding New Styles

When adding new styles to the system:

1. Add the style definition to the appropriate category in `index.ts`
2. Add a dark mode variant if needed
3. Add the style to the `useThemeStyles` hook
4. Update the TypeScript types if necessary
5. Document the new style in this README

## Migration from Inline Styles

To migrate from inline styles to the stylesheet system:

1. Replace inline styles with equivalent stylesheet styles
2. Use the `useThemeStyles` hook for theme-aware components
3. Combine multiple styles using array syntax
4. Use constants for spacing and sizing values
