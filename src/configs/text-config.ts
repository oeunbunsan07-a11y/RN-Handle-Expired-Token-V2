import { Text, TextInput } from 'react-native';

export function configureGlobalText(): void {
  // Override default props for Text component
  (Text as any).defaultProps = {
    ...((Text as any).defaultProps || {}),
    allowFontScaling: false,
  };

  // Override default props for TextInput component
  (TextInput as any).defaultProps = {
    ...((TextInput as any).defaultProps || {}),
    allowFontScaling: false,
  };
}