import React from 'react';
import { StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';
import { Block, theme } from 'galio-framework';

import CartCard from '../components/CartCard'
import ProductListCard from '../components/ProductListCard'
import cart from '../constants/cart';
import Input from "../components/Input"
import Icon from '../components/Icon';
import Tabs from '../components/Tabs';

const { height, width } = Dimensions.get('screen');

class Order extends React.Component {
  state = {
    searchBoxValue: "",
  }
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
          onChangeText={(text) => { this.state.searchBoxValue = text }}
          iconContent={<Icon size={16} color={theme.COLORS.MUTED} name="search-zoom-in" family="ArgonExtra" />}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}>
          <Block flex>
            <FlatList
              data={cart}
              renderItem={({ item }) => <CartCard onPressX={() => {
                
              }} item={item} horizontal />}
              keyExtractor={item => item.title}
            />
          </Block>
        </ScrollView>
      </Block>
    )
  }

  renderSearchArticles = () => {
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.articles}>
      <Block flex>
        <Card onPressX={() => { this.props.navigation.navigate('Pro') }} item={articles[0]} horizontal />
        {/* THIS IS HOW YOU NAVIGATE */}
      </Block>
    </ScrollView>
  }

  render() {
    if (this.state.searchBoxValue == "" || this.state.searchBoxValue == null) {
      return (
        <Block flex center style={styles.home}>
          {this.renderArticles()}
        </Block>
      );
    }
    else {
      <Block flex center style={styles.home}>
        {this.renderSearchArticles()}
      </Block>
    }
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

export default Order;