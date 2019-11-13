//SCREEN NAVIGATION

import React from "react";
import { Easing, Animated } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

import { Block } from "galio-framework";

// screens
import Order from "../screens/Order";
import Cart from "../screens/Cart";
import Delivery from "../screens/Delivery";
import AddToCart from "../screens/AddToCart";
import Profile from "../screens/Profile";
import Elements from "../screens/Elements";
import Dashboard from "../screens/Dashboard";
import DeliveryMap from "../screens/DeliveryMap";
// drawer
import Menu from "./Menu";
import DrawerItem from "../components/DrawerItem";

// header for screens
import Header from "../components/Header";

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = "Search";

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});

const ElementsStack = createStackNavigator({
  Elements: {
    screen: Elements,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Elements" navigation={navigation} />
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const DashboardStack = createStackNavigator({
  Dashboard1: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Home" navigation={navigation} />
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Profile" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);

const OrderStack = createStackNavigator(
  {
    Order1: {
      screen: Order,
      navigationOptions: ({ navigation }) => ({
      header: <Header title="Routes" navigation={navigation} />
      })
    },
    AddToCart: { 
      screen: AddToCart,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header left={<Block />} white transparent title="" navigation={navigation} />
        ),
        headerTransparent: true
      })
    },
    Cart: {
      screen: Cart,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Your Passes" navigation={navigation} />
        })
    },
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);

const DeliveryStack = createStackNavigator(
  {
    Delivery1: {
      screen: Delivery,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Maps" navigation={navigation} />
      })
    },
    MapView: {
      screen: DeliveryMap,
      navigationOptions: ({ navigation }) => ({
        header: <Header title="Maps" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);

const AppStack = createDrawerNavigator(
  {
    Dashboard: {
      screen: DashboardStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Dashboard" title="Buy Passes" />
        )
      })
    },
    Order: {
      screen: OrderStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="Routes" />
        )
      })
    },
    Deliver: {
      screen: DeliveryStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Home" title="Maps" />
        )
      })
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Profile" title="Profile" />
        )
      })
    },
    // Elements: {
    //   screen: ElementsStack,
    //   navigationOptions: navOpt => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} screen="Elements" title="Elements" />
    //     )
    //   })
    // },
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;