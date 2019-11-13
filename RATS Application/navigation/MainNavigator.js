//SCREEN NAVIGATION

import React from "react";
import { Easing, Animated } from "react-native";
import {
    createStackNavigator,
    createAppContainer
} from "react-navigation";

import { Block } from "galio-framework";

// screens
import LoginScreens from "../navigation/LoginScreens";
import Screens from "../navigation/Screens";

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

const MainAppStack = createStackNavigator({
    LoginRegister: {
        screen: LoginScreens,


    },
    MainApplication: {
        screen: Screens,

    }
}, {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
        headerVisible: false,
    }),
    transitionConfig
});


const AppContainer = createAppContainer(MainAppStack);
export default AppContainer;