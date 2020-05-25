import React from 'react';
import {Icon} from '@ant-design/react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../tabs/SettingsScreen';
import HomeScreen from '../tabs/HomeScreen';

const {Navigator, Screen} = createBottomTabNavigator();

function IndexPage() {
  return (
    <Navigator>
      <Screen
        name="Home"
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            // You can return any component that you like here!
            return <Icon size={size} name="home" color={color} />;
          },
        })}
        component={HomeScreen}
      />
      <Screen
        name="Settings"
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            // You can return any component that you like here!
            return <Icon size={size} name="setting" color={color} />;
          },
        })}
        component={SettingsScreen}
      />
    </Navigator>
  );
}

IndexPage.title = '菜单';
IndexPage.headerTintColor = '#ffffff';
IndexPage.headerTitleStyle = {
  fontWeight: 'bold',
};
IndexPage.headerStyle = {
  backgroundColor: '#000000',
};

export default IndexPage;
