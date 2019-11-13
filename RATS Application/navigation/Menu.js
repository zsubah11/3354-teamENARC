//THIS IS THE NAVIGATION DRAWER STRUCTURE

import React from "react";
import { DrawerItems } from "react-navigation";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";
import { Block, theme } from "galio-framework";

import Images from "../constants/Images";


const { height,width } = Dimensions.get("screen");

const Drawer = props => (
  <Block style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
    <Block style={styles.header}>
      <Image style={{height: height*0.1, width: height*0.1, margin: height*0.05, alignSelf: 'center'}} source={Images.Logo} />
    </Block>
    <Block flex>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <DrawerItems {...props} />
      </ScrollView>
    </Block>
  </Block>
);

const Menu = {
  contentComponent: props => <Drawer {...props} />,
  drawerBackgroundColor: "white",
  drawerWidth: width * 0.8,
  contentOptions: {
    activeTintColor: "white",
    inactiveTintColor: "#000",
    activeBackgroundColor: "transparent",
    itemStyle: {
      width: width * 0.75,
      backgroundColor: "transparent"
    },
    labelStyle: {
      fontSize: 18,
      marginLeft: 12,
      fontWeight: "normal"
    },
    itemsContainerStyle: {
      paddingVertical: 16,
      paddingHorizonal: 12,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      overflow: "hidden"
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: 'center',
    height: '10%',
    marginTop: height*0.05,
    marginBottom: height*0.03,
  }
});

export default Menu;
