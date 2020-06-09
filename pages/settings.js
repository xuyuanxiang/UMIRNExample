import React, {useLayoutEffect, useState} from 'react';
import {
  List,
  Switch,
  Modal,
  Button,
  WhiteSpace,
  WingBlank,
} from '@ant-design/react-native';
import {StatusBar} from 'react-native';
import {useDispatch} from 'umi';

function SettingsPage({navigation}) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  // 导航条右侧按钮点击事件
  function onHeaderRightPress() {
    Modal.alert('Title', 'alert content', [
      {
        text: 'Cancel',
        onPress: () => {
          console.log('cancel');
        },
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          console.log('ok');
        },
      },
    ]);
  }

  useLayoutEffect(() => {
    // 添加导航条右侧按钮示例
    navigation.setOptions({
      headerRight: () => (
        <Button type="primary" size="small" onPress={onHeaderRightPress}>
          弹窗
        </Button>
      ),
    });
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <List>
        <List.Item
          onPress={() => setChecked(!checked)}
          extra={<Switch checked={checked} onChange={setChecked} />}>
          开启推送
        </List.Item>
      </List>
      <WhiteSpace size="lg" />
      <WingBlank>
        <Button
          type="warning"
          onPress={() =>
            dispatch({
              type: 'user/signOut',
            })
          }>
          退出登录
        </Button>
      </WingBlank>
    </>
  );
}

SettingsPage.title = '设置';

export default SettingsPage;
