import React from 'react';
import {Button, InputItem, List} from '@ant-design/react-native';

function LoginPage() {
  return (
    <List>
      <InputItem>账号</InputItem>
      <InputItem type="password">账号</InputItem>
      <List.Item>
        <Button type="primary">登录</Button>
      </List.Item>
    </List>
  );
}

export default LoginPage;
