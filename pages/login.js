import React from 'react';
import {Button, InputItem, List} from '@ant-design/react-native';
import {StatusBar} from 'react-native';

function LoginPage() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <List>
        <InputItem>账号</InputItem>
        <InputItem type="password">账号</InputItem>
        <List.Item>
          <Button type="primary">登录</Button>
        </List.Item>
      </List>
    </>
  );
}

LoginPage.title = '登录';
LoginPage.headerTintColor = '#000000';
LoginPage.headerTitleStyle = {
  fontWeight: 'bold',
};
LoginPage.headerStyle = {
  backgroundColor: '#ffffff',
};

export default LoginPage;
