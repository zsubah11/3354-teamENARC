import React from 'react';
import { StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';
import { Block, theme } from 'galio-framework';
import * as SecureStore from 'expo-secure-store';

import CartCard from '../components/CartCard'
import ProductListCard from '../components/ProductListCard';
import Input from "../components/Input"
import Icon from '../components/Icon';
import Tabs from '../components/Tabs';

const { height, width } = Dimensions.get('screen');

class Order extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchBoxValue: "",
      cart: [],
    };

    this.getCart();
  }

  componentDidUpdate(){
    this.getCart();
  }

  async getCart(){
    await this.setState({cart: JSON.parse(await SecureStore.getItemAsync('cart'))});
    return;
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
          onChangeText={(text) => { this.state.searchBoxValue = text }}
          iconContent={<Icon size={16} color={theme.COLORS.MUTED} name="search-zoom-in" family="ArgonExtra" />}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}>
          <Block flex>
            <FlatList
              data={this.state.cart}
              renderItem={({ item,index }) => <CartCard onPressX={() => {

              }} item={item} index={index} horizontal />}
              keyExtractor={({item,index})=>index}
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
    //console.log(this.state.cart);
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