import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from "react-native";
//galio
import { Block, Text, theme } from "galio-framework";
//argon
import { Images, argonTheme } from "../constants";
import AddToCartCard from '../components/AddToCartCard';

const { height, width } = Dimensions.get("screen");
import { AntDesign } from '@expo/vector-icons';
import { Button } from "../components";
const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;


class AddToCart extends React.Component {

  state = {
    selectedArticle: {
      title: 'Oops something went wrong. Please go back and retry.',
      image: 'https://lyricixt.com/wp-content/uploads/2019/06/Sad-Face-Song-Lyrics-Bahari-1280x720.jpg',
      cta: 'View article',
      price: 'XXX',
    },
    numberToAdd: 1,
  }

  componentWillMount() {
    if (this.props.navigation.state.params) {
      console.log("Product Selected");
      console.log(this.props.navigation.state.params);
      this.state.selectedArticle = this.props.navigation.state.params.selectedArticle;
    }
  }

  render() {
    return (
      <Block center style={{ backgroundColor: theme.COLORS.WHITE, alignItems: 'center', justifyContent: 'center', marginVertical: height * 0.02, borderRadius: 20, width: width * 0.84 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <Block style={styles.group, { alignItems: 'center', justifyContent: 'center' }}>

            <Block>
              <Block style={{ paddingHorizontal: theme.SIZES.BASE, marginVertical: theme.SIZES.BASE }}>

                <Block style={{ marginTop: height * 0.2 }}>
                  <AddToCartCard item={this.state.selectedArticle} full />
                </Block>

                <Block>
                  <Block style={{ marginVertical: height * 0.03, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { if (this.state.numberToAdd != 1) { this.setState({ numberToAdd: this.state.numberToAdd - 1 }) } }}>
                      <AntDesign name="minuscircleo" size={38} color="red" style={{ opacity: 0.5 }} />
                    </TouchableOpacity>

                    <Block style={{ height: 50, width: 50, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, borderRadius: 10, borderColor: argonTheme.COLORS.BORDER_COLOR, borderWidth: 1 }}>
                      <Text size={14} bold>{this.state.numberToAdd}</Text>
                    </Block>

                    <TouchableOpacity onPress={() => { this.setState({ numberToAdd: this.state.numberToAdd + 1 }) }}>
                      <AntDesign name="pluscircleo" size={38} color="blue" style={{ opacity: 0.5 }} />
                    </TouchableOpacity>
                  </Block>

                  <Text size={14} style={{ alignSelf: 'flex-start', color: argonTheme.COLORS.DEFAULT }}>Subtotal: {(this.state.selectedArticle.price * this.state.numberToAdd).toFixed(2)}</Text>
                  <Text size={14} style={{ alignSelf: 'flex-start', color: argonTheme.COLORS.DEFAULT }}>Convinience Fee: 0.25</Text>
                  <Text size={14} style={{ alignSelf: 'flex-start', marginBottom: height * 0.02, color: argonTheme.COLORS.DEFAULT }}>Tax: {(this.state.selectedArticle.price * this.state.numberToAdd * 0.0825).toFixed(2)}</Text>
                  <Text bold size={18} style={{ alignSelf: 'center', marginBottom: height * 0.02, color: argonTheme.COLORS.ACTIVE }}>${(this.state.selectedArticle.price * this.state.numberToAdd * 1.0825 + 0.25).toFixed(2)}</Text>
                </Block>

                <Button color="primary" style={styles.createButton, { width: width * 0.7, marginBottom: height*0.02 }} onPress={() => {
                  //this.props.navigation.navigate("DeliveryMap", {selectedArticle: this.state.selectedArticle, numberToAdd: this.state.numberToAdd});
                }}>
                  <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                    Buy
                                                </Text>
                </Button>
                </Block>
            </Block>

          </Block>
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

export default AddToCart;
