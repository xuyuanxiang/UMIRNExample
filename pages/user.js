import React from 'react';
import {Icon} from '@ant-design/react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserDetailsScreen from '../tabs/UserDetailsScreen';
import UserListScreen from '../tabs/UserListScreen';

const {Navigator, Screen} = createBottomTabNavigator();

function IndexPage() {
  return (
    <Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          // You can return any component that you like here!
          if (route.name === 'UserDetails') {
            return <Icon size={size} name="profile" color={color} />;
          }
        },
      })}>
      <Screen name="UserList" component={UserListScreen} />
      <Screen name="UserDetails" component={UserDetailsScreen} />
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
