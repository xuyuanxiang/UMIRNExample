import React from 'react';
import {ActivityIndicator, Result} from '@ant-design/react-native';
import {history} from 'umi';

export default function Loading({error, isLoading}) {
  if (error instanceof Error) {
    return (
      <Result
        title="加载失败"
        message={error.message}
        buttonText="返回重试"
        buttonType="warning"
        onButtonClick={() => history.goBack()}
      />
    );
  }

  return (
    <ActivityIndicator
      animating={isLoading}
      toast
      size="large"
      text="正在加載"
    />
  );
}
