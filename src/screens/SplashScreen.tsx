import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, StatusBar } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { colors } from '../constants/colors';
import { RootStackParamList } from '../types/navigation';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 700,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 6,
        tension: 60,
        useNativeDriver: true,
      }),
    ]).start();

    const timeoutId = setTimeout(() => {
      // Replace so user can't go back to splash
      navigation.reset({ index: 0, routes: [{ name: 'Main' }] });
    }, 1400);

    return () => clearTimeout(timeoutId);
  }, [navigation, opacity, scale]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity,
            transform: [{ scale }],
          },
        ]}
      >
        <View style={styles.logoMark} />
        <Text style={styles.appName}>BarRanker</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoMark: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#ffffff',
    marginBottom: 16,
  },
  appName: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});

export default SplashScreen;


