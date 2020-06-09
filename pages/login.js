import React, {useState} from 'react';
import {
  Button,
  InputItem,
  List,
  Checkbox,
  WingBlank,
  Toast,
} from '@ant-design/react-native';
import {StatusBar, View} from 'react-native';
import {useDispatch, useSelector, Redirect} from 'umi';
import Loading from '../components/Loading';

const CheckboxItem = Checkbox.CheckboxItem;

function LoginPage({history}) {
  const dispatch = useDispatch();
  const {
    hasSignedIn,
    loading,
    username: _username,
    password: _password,
    rememberMe: _rememberMe,
  } = useSelector(
    ({
      user: {hasSignedIn, username, password, rememberMe},
      loading: {effects},
    }) => ({
      hasSignedIn,
      username,
      password,
      rememberMe,
      loading: effects['user/login'],
    }),
  );
  const [rememberMe, setRememberMe] = useState(_rememberMe);
  const [username, setUsername] = useState(_username);
  const [password, setPassword] = useState(_password);

  function onSubmit() {
    if (!username || !password) {
      Toast.fail('请输入账号和密码！');
      return;
    }
    dispatch({
      type: 'user/login',
      payload: {
        username,
        password,
        rememberMe,
      },
    });
  }

  if (loading) {
    return <Loading />;
  }

  if (hasSignedIn) {
    if (history.length > 1) {
      history.goBack();
    } else {
      return <Redirect to="/" />;
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <StatusBar barStyle="dark-content" />
      <WingBlank size="lg">
        <List>
          <InputItem value={username} onChange={setUsername}>
            账号
          </InputItem>
          <InputItem type="password" value={password} onChange={setPassword}>
            密码
          </InputItem>
          <CheckboxItem
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}>
            Remember me
          </CheckboxItem>
          <List.Item>
            <Button type="primary" onPress={onSubmit}>
              登录
            </Button>
          </List.Item>
        </List>
      </WingBlank>
    </View>
  );
}

LoginPage.title = '登录';

export default LoginPage;
