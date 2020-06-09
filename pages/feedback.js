import React from 'react';
import {
  Button,
  TextareaItem,
  List,
  WhiteSpace,
  WingBlank,
} from '@ant-design/react-native';
import {StatusBar} from 'react-native';

function FeedbackPage() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <WhiteSpace />
      <List>
        <TextareaItem
          placeholder="请输入不少于10个字的描述"
          rows={5}
          count={300}
        />
      </List>
      <WhiteSpace size="lg" />
      <WingBlank size="lg">
        <Button type="primary">提交</Button>
      </WingBlank>
    </>
  );
}

FeedbackPage.title = '产品建议';

export default FeedbackPage;
