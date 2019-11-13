import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
import Input from "../components/Input"
import Icon from '../components/Icon';
import Tabs from '../components/Tabs';

const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderArticles = () => {
    return (
      <Block>
        <Input
          right
          color="black"
          style={styles.search}
          placeholder="What are you looking for?"
          placeholderTextColor={'#8898AA'}
          onFocus={() => {}}
          iconContent={<Icon size={16} color={theme.COLORS.MUTED} name="search-zoom-in" family="ArgonExtra" />}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}>
          <Block flex>
            <Card item={articles[0]} horizontal />
            <Block flex row>
              <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
              <Card item={articles[2]} />
            </Block>
            <Card item={articles[3]} horizontal />
            <Card item={articles[4]} full />
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

export default Home;
