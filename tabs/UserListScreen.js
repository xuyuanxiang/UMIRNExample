import React, {useLayoutEffect} from 'react';
import {Text, View} from 'react-native';
import {Icon} from '@ant-design/react-native';

export default function UserListScreen({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarIcon: ({focused, color, size}) => {
        // You can return any component that you like here!
        return <Icon size={size} name="user" color={color} />;
      },
    });
  }, [navigation]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>User List!</Text>
    </View>
  );
}
