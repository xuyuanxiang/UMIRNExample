import React from 'react';
import {Text} from 'react-native';
import {Link} from 'umi';
import {List} from '@ant-design/react-native';

export default function SettingsScreen() {
  return (
    <List renderHeader={() => <Text>Settings!</Text>}>
      <Link to="/login" component={List.Item} arrow="horizontal">
        Go to Login
      </Link>
      <Link to="/user" component={List.Item} arrow="horizontal">
        Go to Another tabs
      </Link>
    </List>
  );
}
