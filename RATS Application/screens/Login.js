import React from "react";
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar,
    KeyboardAvoidingView,
    Image,
    TouchableOpacity
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { Header } from 'react-navigation';
import { NavigationActions, StackActions } from 'react-navigation';

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {

    state={
        isLoggedIn:false,
    }
    render() {
        return (
            <Block flex middle>
                <ImageBackground
                    source={Images.RegisterBackground}
                    style={{ width, height, zIndex: 1 }}
                >
                    <KeyboardAvoidingView

                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        behavior="padding"
                        enabled
                    >
                        <Block flex middle>
                            <Block style={styles.registerContainer}>
                                <Block flex={0.25} middle style={styles.socialConnect}>
                                    <Image styles={styles.logo} style={{ height: height * 0.12, width: height * 0.12 }} source={Images.Logo} />
                                </Block>
                                <Block flex style={{ alignItems: 'center', justifyContent: 'space-between', paddingVertical: height * 0.04 }}>
                                    <Block>
                                        <Block flex={0.17} middle style={{ marginBottom: height * 0.04 }}>
                                            <Text color={argonTheme.COLORS.BLACK} size={12}>
                                                Login to Riverdale Rapid Area Transit System
                                            </Text>
                                        </Block>

                                        <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                                            <Input
                                                borderless
                                                placeholder="Username"
                                                iconContent={
                                                    <Icon
                                                        size={16}
                                                        color={argonTheme.COLORS.ICON}
                                                        name="hat-3"
                                                        family="ArgonExtra"
                                                        style={styles.inputIcons}
                                                    />
                                                }
                                            />
                                        </Block>
                                        <Block width={width * 0.8}>
                                            <Input
                                                password
                                                borderless
                                                placeholder="Password"
                                                iconContent={
                                                    <Icon
                                                        size={16}
                                                        color={argonTheme.COLORS.ICON}
                                                        name="padlock-unlocked"
                                                        family="ArgonExtra"
                                                        style={styles.inputIcons}
                                                    />
                                                }
                                            />

                                        </Block>
                                    </Block>
                                    <Block>
                                        <Block middle>
                                            <TouchableOpacity onPress={() => {
                                                this.props.navigation.navigate("RegisterScreen");
                                            }}>
                                                <Text size={14} color={argonTheme.COLORS.ACTIVE}>
                                                    Don't have an account? Register here
                                                </Text>
                                            </TouchableOpacity>
                                            <Button color="primary" style={styles.createButton} onPress={() => {
                                                //AsyncStorage.setItem('loginToken', "12345");
                                                this.setState({isLoggedIn:true});
                                                this.props.navigation.dispatch(
                                                    StackActions.reset({
                                                        index: 0,
                                                        key: null,
                                                        actions: [NavigationActions.navigate({ routeName: "MainApplication" })]
                                                    })
                                                )
                                            }}>
                                                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                                    LOGIN
                                                </Text>
                                            </Button>
                                        </Block>
                                    </Block>
                                </Block>
                            </Block>
                        </Block>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </Block >
        );
    }
}

const styles = StyleSheet.create({
    registerContainer: {
        width: width * 0.9,
        height: height * 0.78,
        backgroundColor: "#F4F5F7",
        borderRadius: 4,
        shadowColor: argonTheme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1,
        overflow: "hidden"
    },
    socialConnect: {
        backgroundColor: argonTheme.COLORS.WHITE,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#8898AA"
    },
    socialButtons: {
        width: 120,
        height: 40,
        backgroundColor: "#fff",
        shadowColor: argonTheme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1
    },
    socialTextButtons: {
        color: argonTheme.COLORS.PRIMARY,
        fontWeight: "800",
        fontSize: 14
    },
    inputIcons: {
        marginRight: 12
    },
    passwordCheck: {
        paddingLeft: 15,
        paddingTop: 13,
        paddingBottom: 30
    },
    createButton: {
        width: width * 0.5,
        marginTop: 25
    }
});

export default Register;
