import React, {useLayoutEffect} from 'react';
import {StatusBar, Text} from 'react-native';
import {List, Modal, Button} from '@ant-design/react-native';
import {connect, Link} from 'umi';

const Item = List.Item;

const ConnectedIndexPage = connect(({foo, loading: {effects}}) => ({
  greeting: foo.greeting,
  loading: effects['foo/fetch'],
}))(({greeting, loading, navigation}) => {
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
      <StatusBar barStyle="light-content" />
      <List
        renderHeader={() => <Text>{loading ? 'Loading...' : greeting}</Text>}>
        <Link to="/home" component={Item} arrow="horizontal">
          主页
        </Link>
        <Link to="/login" component={Item} arrow="horizontal">
          登录页
        </Link>
      </List>
    </>
  );
});

ConnectedIndexPage.title = '菜单';
ConnectedIndexPage.headerTintColor = '#ffffff';
ConnectedIndexPage.headerTitleStyle = {
  fontWeight: 'bold',
};
ConnectedIndexPage.headerStyle = {
  backgroundColor: '#000000',
};

export default ConnectedIndexPage;
