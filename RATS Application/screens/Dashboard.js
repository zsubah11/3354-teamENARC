import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions
} from "react-native";
//galio
import { Block, Text, theme, Input } from "galio-framework";
import { EvilIcons } from '@expo/vector-icons';
//argon
import { articles, Images, argonTheme } from "../constants";
import { Card } from "../components";

const { height,width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

const categories = [
  {
    title: 'Drinks',
    image: 'https://www.fodors.com/wp-content/uploads/2019/03/HERO_Worlds_Best_Soda_Bundaberg_shutterstock_679079920.jpg',
    cta: 'View article',
  },
  {
    title: 'Cosmetics',
    image: 'https://miro.medium.com/max/1200/0*a8__BlPyJgnS0bXa.jpg',
    cta: 'View article',
  },
  {
    title: 'Hardware',
    image: 'http://www.3rdstreethardware.com/wp-content/uploads/2017/04/electrical.jpg',
    cta: 'View article',
  },
  {
    title: 'Packaged Food',
    image: 'https://www.foodbusinessnews.net/ext/resources/images/p/a/c/k/a/d/e/d/d/d/12/PackagedFoods_Embedded.jpg',
    cta: 'View article',
  },
  {
    title: 'Sporting Goods',
    image: 'https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F527162%2Fsports-equipment-sporting-goods-balls-getty.jpg&w=700&op=resize',
    cta: 'View article',
  },
];

// const articles = [
//   {
//     title: "Music Album",
//     description:
//       "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
//     image:
//       "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fit=crop&w=840&q=80",
//     price: "$125"
//   },
//   {
//     title: "Events",
//     description:
//       "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
//     image:
//       "https://images.unsplash.com/photo-1543747579-795b9c2c3ada?fit=crop&w=840&q=80",
//     price: "$35"
//   }
// ];

class Dashboard extends React.Component {
  renderProduct = (item, index) => {
    const { navigation } = this.props;

    return (
      <TouchableWithoutFeedback
        style={{ zIndex: 3 }}
        key={`product-${item.title}`}
        onPress={() => navigation.navigate("AddToCart", { selectedArticle: item })}
      >
        <Block center style={styles.productItem}>
          <Image
            resizeMode="cover"
            style={styles.productImage}
            source={{ uri: item.image }}
          />
          <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Text
              center
              size={10}
              color={theme.COLORS.MUTED}
              style={styles.productPrice}
            >
              $ {item.price}
            </Text>
            <Text center size={18}>
              {item.title}
            </Text>
            <Text
              center
              size={10}
              color={theme.COLORS.MUTED}
              style={styles.productDescription}
            >
              {item.description}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };

  renderCards = () => {
    return (
      <Block flex style={styles.group}>
        <Input
          color="black"
          editable={false}
          style={{ marginHorizontal: width * 0.04, width: width * 0.92 }}
          placeholder="  Riverdale"
          placeholderTextColor={'#8898AA'}
          onFocus={() => { }}
          onChangeText={(text) => { this.state.searchBoxValue = text }}
          iconContent={<EvilIcons size={24} color={theme.COLORS.MUTED} name="location" style={{ marginRight: -4 }} />}
        />
        <Block flex>
          {/* ALBUM */}
          <Block flex style={{
            marginTop: theme.SIZES.BASE,
            paddingBottom: theme.SIZES.BASE,
            borderBottomColor: argonTheme.COLORS.BORDER_COLOR,
            borderBottomWidth: 1,
          }}>
            <Text bold color={argonTheme.COLORS.ACTIVE} size={18} style={{ alignSelf: 'center', marginBottom: theme.SIZES.BASE * 4 }}>
               - Types of Passes -
            </Text>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
              contentContainerStyle={{
                paddingHorizontal: theme.SIZES.BASE / 2
              }}
            >
              {articles &&
                articles.map((item, index) =>
                  this.renderProduct(item, index)
                )}
            </ScrollView>
          </Block>

          <Block style={{flex:1, flexDirection: 'row', width:width, backgroundColor:  'black'}}>
            <Image
              resizeMode="stretch"
              style={{width: width, height: height*0.3}}
              source={{ uri: "https://www.hialbarshadubai.com/wp-content/uploads/2014/03/Dubai-Metro.jpg" }}
            />
          </Block> 

          {/* Categories */}
          {/* <Block style={{ paddingHorizontal: theme.SIZES.BASE, marginVertical: theme.SIZES.BASE }}>
            <Text bold color={argonTheme.COLORS.DEFAULT} size={16} style={{ alignSelf: 'center', marginBottom: theme.SIZES.BASE }}>
              Categories
            </Text>

            <Block flex row>
              <Card
                item={categories[0]}
                style={{ marginRight: theme.SIZES.BASE }}
              />
              <Card item={categories[3]} />
            </Block>
            <Block flex row>
              <Card
                item={categories[1]}
                style={{ marginRight: theme.SIZES.BASE }}
              />
              <Card item={categories[2]} />
            </Block>
            <Card item={categories[4]} full />

          </Block> */}

        </Block>
      </Block>
    );
  };


  render() {
    return (
      <Block flex center>
        <ScrollView
          showsVerticalScrollIndicator={false}
          
        >
          {this.renderCards()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER
  },
  group: {
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4
  },
  productItem: {
    width: (cardWidth - theme.SIZES.BASE),
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2
  },
  productImage: {
    width: (width - theme.SIZES.BASE) / 1.7,
    height: (width - theme.SIZES.BASE) / 1.7,
    borderRadius: 3
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE
    // paddingBottom: theme.SIZES.BASE * 2,
  }
});

export default Dashboard;
