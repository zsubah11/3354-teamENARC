import React from 'react';
import { StyleSheet, Dimensions, ScrollView, TouchableWithoutFeedback, Image, FlatList } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import Input from "../components/Input"
import Icon from '../components/Icon';
import Tabs from '../components/Tabs';
import ProductListCard from '../components/ProductListCard - Copy';

const articles = [
  {
    title: 'Train Line Map',
    image: 'https://icon-library.net/images/ticket-png-icon/ticket-png-icon-26.jpg',
    cta: 'View article',
    price: '1.5',
  },
  {
    title: 'Interactive Map',
    image: 'https://icon-library.net/images/ticket-png-icon/ticket-png-icon-26.jpg',
    cta: 'View article',
    price: '10',
  },
]

const data = [
  {
    title: '',
    image: '../assets/map.png',
    cta: 'View article',
  },
]

const { height, width } = Dimensions.get('screen');

class Delivery extends React.Component {
  renderArticles = () => {
    return (
      <Block>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}>

          <Block flex>
            <FlatList
              data={articles}
              renderItem={({ item }) => <ProductListCard onPressX={() => {
                this.props.navigation.navigate("MapView", {
                  selectedArticle: item
                }
                )
              }} item={item} horizontal />}
              keyExtractor={item => item.title}
            />
          </Block>
        </ScrollView>
      </Block>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Delivery;
