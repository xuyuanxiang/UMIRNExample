import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Card, Grid, WhiteSpace} from '@ant-design/react-native';
import {useSelector} from 'umi';

const data = Array.from(new Array(12)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: `Name${i}`,
}));

export default function HomeScreen() {
  const dataSource = useSelector((state) => state.cards.dataSource);
  return (
    <>
      <Grid data={data} columnNum={4} isCarousel />
      <WhiteSpace size="lg" />
      <ScrollView style={{background: '#f5f5f5'}}>
        {dataSource.map((it, i) => (
          <Card full key={`card_${i}`}>
            <Card.Header
              title="Full Column"
              thumbStyle={{width: 30, height: 30}}
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra="this is extra"
            />
            <Card.Body>
              <View style={{height: 42}}>
                <Text style={{marginLeft: 16}}>{it}</Text>
              </View>
            </Card.Body>
            <Card.Footer
              content="footer content"
              extra="footer extra content"
            />
          </Card>
        ))}
        <WhiteSpace size="lg" />
      </ScrollView>
    </>
  );
}
