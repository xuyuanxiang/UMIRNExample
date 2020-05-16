import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'umi';

const ConnectedIndexPage = connect(({foo, loading: {effects}}) => ({
  greeting: foo.greeting,
  loading: effects['foo/fetch'],
}))(({greeting, loading}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>{loading ? 'Loading...' : greeting}</Text>
  </View>
));

export default ConnectedIndexPage;
