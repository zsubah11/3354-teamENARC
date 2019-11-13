import React from 'react';
import { StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';
import { Block, theme, Text } from 'galio-framework';

import { Card } from '../components';
import ProductListCard from '../components/ProductListCard'
import articles from '../constants/articles';
import Input from "../components/Input"
import Icon from '../components/Icon';
import Tabs from '../components/Tabs';
import { EvilIcons } from '@expo/vector-icons';
import Button from '../components/Button'

const { height, width } = Dimensions.get('screen');

class Order extends React.Component {
  state = {
    searchBoxValue: "",
  }
  renderArticles = () => {
    return (
      <Block style={{}}>
        <Block style={{ alignSelf: 'center' }}>
          <Text bold color={"grey"} style={{ alignSelf: 'center', marginTop: height * 0.25}}>Find trains running between two stations </Text>
          <Text bold color={"grey"} style={{ alignSelf: 'center', marginBottom: height * 0.02 }}>throughout the day</Text>
          <Input
            right
            color="black"
            style={styles.search}
            placeholder="From"
            placeholderTextColor={'#8898AA'}
            onFocus={() => { }}
            onChangeText={(text) => { this.state.searchBoxValue = text }}
            iconContent={<EvilIcons size={24} color={theme.COLORS.MUTED} name="location" style={{ marginRight: -4 }} />}
          />
          <Input
            right
            color="black"
            style={styles.search}
            placeholder="To"
            placeholderTextColor={'#8898AA'}
            onFocus={() => { }}
            onChangeText={(text) => { this.state.searchBoxValue = text }}
            iconContent={<EvilIcons size={24} color={theme.COLORS.MUTED} name="location" style={{ marginRight: -4 }} />}
          />
          <Button color="primary" style={styles.createButton, { width: width * 0.7, marginVertical: height * 0.06, alignSelf: 'center' }} onPress={() => {
            //this.props.navigation.navigate("DeliveryMap", {selectedArticle: this.state.selectedArticle, numberToAdd: this.state.numberToAdd});
          }}>
            <Text bold size={14} color="white">
              Search Trains
            </Text>
          </Button>
        </Block>
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