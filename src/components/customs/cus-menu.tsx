import { Button, ButtonText } from '@/components/ui/button';
import {
    AddIcon,
    GlobeIcon,
    Icon,
    PlayIcon,
    SettingsIcon,
} from '@/components/ui/icon';
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu';

function CusMenu() {
  return (
    <Menu
      //@ts-ignore
      placement="bottom end"
      offset={5}
      disabledKeys={['Settings']}
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Menu</ButtonText>
          </Button>
        );
      }}
    >
      <MenuItem key="Add account" textValue="Add account">
        <Icon as={AddIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Add account</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Community" textValue="Community">
        <Icon as={GlobeIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Community</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Plugins" textValue="Plugins">
        <Icon as={PlayIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Plugins</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Settings" textValue="Settings">
        <Icon as={SettingsIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Settings</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};

export default CusMenu;
