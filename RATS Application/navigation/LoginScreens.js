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
import Register from "../screens/Register";
import Login from "../screens/Login";
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

const LoginStack = createStackNavigator({
    LoginScreen: {
        screen: Login,


    },
    RegisterScreen: {
        screen: Register,

    }
}, {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
        headerVisible: false,
    }),
    cardStyle: {
        backgroundColor: "#F8F9FE"
    },
    transitionConfig
});


const AppContainer = createAppContainer(LoginStack);
export default AppContainer;