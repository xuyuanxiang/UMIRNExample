import React from 'react';
import {Grid} from '@ant-design/react-native';

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: `Name${i}`,
}));

function HomePage() {
  return <Grid data={data} columnNum={3} isCarousel />;
}

export default HomePage;
