import React from 'react';
import {StatusBar} from 'react-native';
import {Grid} from '@ant-design/react-native';

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: `Name${i}`,
}));

function HomePage({route}) {
  if (__DEV__) {
    console.info('HomePage: route=', route);
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Grid data={data} columnNum={3} isCarousel />
    </>
  );
}

HomePage.title = '主页';
HomePage.headerTintColor = '#000000';
HomePage.headerTitleStyle = {
  fontWeight: 'bold',
};
HomePage.headerStyle = {
  backgroundColor: '#ffffff',
};

export default HomePage;
