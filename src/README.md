# BarRanker React Native Project Structure

## Overview
This is a React Native project with a well-organized folder structure for scalability and maintainability.

## Folder Structure

### `/src/components/`
Reusable UI components that can be used across different screens.

### `/src/screens/`
Individual screen components that represent full pages in the app.

### `/src/navigation/`
Navigation configuration including stack and tab navigators.

### `/src/services/`
API calls, external service integrations, and data fetching logic.

### `/src/utils/`
Helper functions, utility methods, and common calculations.

### `/src/hooks/`
Custom React hooks for shared logic between components.

### `/src/types/`
TypeScript type definitions and interfaces.

### `/src/constants/`
App-wide constants including colors, strings, and configuration values.

### `/src/store/`
State management (Redux, Zustand, etc.) and global state.

### `/src/assets/`
Static assets like images, icons, and fonts.

## Current Features

### Navigation
- Bottom tab navigation with 4 tabs: Home, Search, Profile, Settings
- Stack navigation ready for future features
- Type-safe navigation with TypeScript

### Screens
- **HomeScreen**: Main screen with map placeholder for future Maps API integration
- **SearchScreen**: Placeholder for search functionality
- **ProfileScreen**: Placeholder for user profile
- **SettingsScreen**: Placeholder for app settings

### Styling
- Consistent color scheme defined in `constants/colors.ts`
- Centralized strings in `constants/strings.ts`
- Responsive design with proper safe area handling

## Next Steps

1. **Maps Integration**: Replace the map placeholder in HomeScreen with actual Maps API
2. **Icons**: Replace placeholder tab icons with proper vector icons
3. **State Management**: Implement Redux or Zustand for global state
4. **API Integration**: Add actual API calls in the services folder
5. **Components**: Build reusable UI components in the components folder

## Running the Project

```bash
# Install dependencies
npm install

# Run on Android
npx react-native run-android

# Run on iOS
npx react-native run-ios
``` 