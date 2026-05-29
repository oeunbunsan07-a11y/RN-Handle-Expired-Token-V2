import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

// This interface merges standard Text props with your component
interface AppTextProps extends TextProps {
  children: React.ReactNode;
}

export default function AppText({ style, children, ...props }: AppTextProps) {
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#222',
    fontFamily : "k1",
  },
});