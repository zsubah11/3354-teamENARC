import React from 'react';
import { StyleSheet, Dimensions, ScrollView, TouchableWithoutFeedback, Image, FlatList } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import Input from "../components/Input"
import Icon from '../components/Icon';
import Tabs from '../components/Tabs';
import ProductListCard from '../components/ProductListCard';
import articles from '../constants/articles'

const data = [
  {
    title: 'Find items to deliver on a map!',
    image: '../assets/map.png',
    cta: 'View article',
  },
]

const { height, width } = Dimensions.get('screen');

class Delivery extends React.Component {
  renderArticles = () => {
    return (
      <Block>
        <Input
          right
          color="black"
          style={styles.search}
          placeholder="What are you looking for?"
          placeholderTextColor={'#8898AA'}
          onFocus={() => { }}
          iconContent={<Icon size={16} color={theme.COLORS.MUTED} name="search-zoom-in" family="ArgonExtra" />}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}>
          <Block flex>
            <Block card flex style={{
              flexDirection: 'row',
              backgroundColor: theme.COLORS.WHITE,
              marginVertical: 0,
              borderWidth: 0,
              minHeight: 114,
              marginBottom: 16, shadowColor: theme.COLORS.BLACK,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              shadowOpacity: 0.1,
              elevation: 2,
            }}>
              <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate("DeliveryMap")}}>
                <Block flex style={{
                  borderRadius: 3,
                  elevation: 1,
                  overflow: 'hidden',
                  shadowColor: theme.COLORS.BLACK,
                  shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 4,
                  shadowOpacity: 0.1,
                  elevation: 2,
                }}>
                  <Image source={require('../assets/map.png')} style={{
                    width: '100%', height: height * 0.25
                  }} />
                </Block>
              </TouchableWithoutFeedback>
            </Block>

            <Block flex>
              <FlatList
                data={articles}
                renderItem={({ item }) => <ProductListCard onPressX={() => {
                  this.props.navigation.navigate("AddToCart", {
                    selectedArticle: item
                  }
                  )
                }} item={item} horizontal />}
                keyExtractor={item => item.title}
              />
            </Block>
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
