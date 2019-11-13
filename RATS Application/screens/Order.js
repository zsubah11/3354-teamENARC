import React from 'react';
import { StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import ProductListCard from '../components/ProductListCard'
import articles from '../constants/articles';
import Input from "../components/Input"
import Icon from '../components/Icon';
import Tabs from '../components/Tabs';
import { EvilIcons } from '@expo/vector-icons';

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
        <Input
          right
          color="black"
          editable={false}
          style={styles.search}
          placeholder="Residence Hall South"
          placeholderTextColor={'#8898AA'}
          onFocus={() => { }}
          onChangeText={(text) => { this.state.searchBoxValue = text }}
          iconContent={<EvilIcons size={24} color={theme.COLORS.MUTED} name="location" style={{marginRight: -4}}/>}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}>
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