import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, ButtonText } from '@/components/ui/button';
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from '@/components/ui/drawer';
import { Heading } from '@/components/ui/heading';
import { CloseIcon, Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { SafeAreaView } from 'react-native-safe-area-context';

function CusDrawer() {
  const [showDrawer, setShowDrawer] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>

      <Button onPress={() => setShowDrawer(true)}>
        <ButtonText>Open Drawer</ButtonText>
      </Button>

      <Drawer
        isOpen={showDrawer}
        size="lg"
        anchor="left"
        onClose={() => setShowDrawer(false)}
      >
        <DrawerBackdrop />

        <DrawerContent
          style={{
            paddingBottom: insets.bottom + 20,
            paddingTop : insets.top + 20,
          }}
        >
          <DrawerHeader>
            <Heading size="lg">Menu</Heading>

            <DrawerCloseButton>
              <Icon as={CloseIcon} />
            </DrawerCloseButton>
          </DrawerHeader>

          <DrawerBody>
            <Text>This is the basic drawer component.</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              onPress={() => setShowDrawer(false)}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
          </DrawerFooter>
        </DrawerContent>

      </Drawer>
    </SafeAreaView>
  );
}

export default CusDrawer;