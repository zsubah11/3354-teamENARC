import React from "react";
import {
    StyleSheet,
    Dimensions,
    ScrollView,
    Image,
    ImageBackground,
    Platform,
    KeyboardAvoidingView
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Button, Input } from "../components";
import { ToastAndroid } from 'react-native';
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import { Header } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
const { width, height } = Dimensions.get("screen");
import * as SecureStore from 'expo-secure-store';
import { NavigationActions, StackActions } from 'react-navigation';

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {

    state = {
        selectedArticle: "",
        numberToAdd: "",
        deliveryAddress: {
            street: null,
            city: null,
            postalCode: null,
            state: null,
            country: null,
            phoneNumber: null,
        },
        billingAddress: {
            street: null,
            city: null,
            postalCode: null,
            state: null,
            country: null,
            phoneNumber: null,
        },
        payment: {
            cardName: null,
            creditcardno: null,
            expires: null,
            cvv: null
        },
        editing: false,

    }

    async getCart() {
        this.setState({
            cart: JSON.parse(await SecureStore.getItemAsync('cart'))
        });
    }
    render() {
        return (
            <Block flex style={styles.profile}>
                <Block flex>
                    <ImageBackground
                        source={Images.ProfileBackground}
                        style={styles.profileContainer}
                        imageStyle={styles.profileBackground}
                    >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{ width, marginTop: '25%' }}
                        >
                            <KeyboardAvoidingView behavior='position' enabled style={{ flex: 1 }} >

                                <Block flex style={styles.profileCard}>



                                    <Block style={{ marginTop: 0 }}>
                                        <Block >
                                            <Block style={styles.info}>

                                                <Text bold style={{ alignSelf: 'center' }} size={28} color="#32325D">
                                                    Delivery Address
                    </Text>

                                                <Block>
                                                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                                                        Street Address
                      </Text>
                                                    <Input
                                                        right
                                                        editable={this.state.editing}
                                                        color="black"
                                                        style={styles.search}
                                                        placeholder="2801 Rutford Ave"
                                                        placeholderTextColor={'#8898AA'}
                                                        onFocus={() => { }}
                                                        onChangeText={(text) => { this.state.deliveryAddress.street = text }}
                                                        iconContent={null}
                                                    />
                                                </Block>

                                                <Block>
                                                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                                                        City
                      </Text>
                                                    <Input
                                                        right
                                                        editable={this.state.editing}
                                                        color="black"
                                                        style={styles.search}
                                                        placeholder="Richardson"
                                                        placeholderTextColor={'#8898AA'}
                                                        onFocus={() => { }}
                                                        onChangeText={(text) => { this.state.deliveryAddress.city = text }}
                                                        iconContent={null}
                                                    />
                                                </Block>

                                                <Block>
                                                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                                                        State
                      </Text>
                                                    <Input
                                                        right
                                                        editable={this.state.editing}
                                                        color="black"
                                                        style={styles.search}
                                                        placeholder="Texas"
                                                        placeholderTextColor={'#8898AA'}
                                                        onFocus={() => { }}
                                                        onChangeText={(text) => { this.state.deliveryAddress.state = text }}
                                                        iconContent={null}
                                                    />
                                                </Block>

                                                <Block>
                                                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                                                        Country
                      </Text>
                                                    <Input
                                                        right
                                                        editable={this.state.editing}
                                                        color="black"
                                                        style={styles.search}
                                                        placeholder="United States"
                                                        placeholderTextColor={'#8898AA'}
                                                        onFocus={() => { }}
                                                        onChangeText={(text) => { this.state.deliveryAddress.country = text }}
                                                        iconContent={null}
                                                    />
                                                </Block>

                                                <Block>
                                                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                                                        Postal Code
                      </Text>
                                                    <Input
                                                        right
                                                        editable={this.state.editing}
                                                        type={"number-pad"}
                                                        color="black"
                                                        style={styles.search}
                                                        placeholder="75080"
                                                        placeholderTextColor={'#8898AA'}
                                                        onFocus={() => { }}
                                                        onChangeText={(text) => { this.state.deliveryAddress.postalCode = text }}
                                                        iconContent={null}
                                                    />
                                                </Block>
                                            </Block>
                                        </Block>
                                        <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                                            <Block style={styles.divider} />
                                        </Block>
                                    </Block>

                                    <Block style={{ marginTop: 0 }}>
                                        <Block >
                                            <Block style={styles.info}>

                                                <Text bold style={{ alignSelf: 'center' }} size={28} color="#32325D">
                                                    Payment Information
                    </Text>

                                                <Block>
                                                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                                                        Name on Card*
                      </Text>
                                                    <Input
                                                        right
                                                        color="black"
                                                        style={styles.search}
                                                        placeholder="Mohit Bhole"
                                                        placeholderTextColor={'#8898AA'}
                                                        onFocus={() => { }}
                                                        onChangeText={(text) => { this.state.payment.cardName = text }}
                                                        iconContent={null}
                                                    />
                                                </Block>

                                                <Block>
                                                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                                                        Credit/Debit Card Number*
                      </Text>
                                                    <Input
                                                        right
                                                        color="black"
                                                        style={styles.search}
                                                        placeholder="Card Number"
                                                        placeholderTextColor={'#8898AA'}
                                                        onFocus={() => { }}
                                                        onChangeText={(text) => { this.state.payment.creditcardno = text }}
                                                        iconContent={null}
                                                    />
                                                </Block>

                                                <Block>
                                                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                                                        Expires
                      </Text>
                                                    <Input
                                                        right
                                                        color="black"
                                                        style={styles.search}
                                                        placeholder="MM/YYYY"
                                                        placeholderTextColor={'#8898AA'}
                                                        onFocus={() => { }}
                                                        onChangeText={(text) => { this.state.payment.expires = text }}
                                                        iconContent={null}
                                                    />
                                                </Block>

                                                <Block>
                                                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                                                        Security Code*
                      </Text>
                                                    <Input
                                                        right
                                                        color="black"
                                                        style={styles.search}
                                                        placeholder="CVV (Back of Card)"
                                                        placeholderTextColor={'#8898AA'}
                                                        onFocus={() => { }}
                                                        onChangeText={(text) => { this.state.payment.cvv = text }}
                                                        iconContent={null}
                                                    />
                                                </Block>
                                            </Block>
                                        </Block>
                                        <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                                            <Block style={styles.divider} />
                                        </Block>
                                    </Block>

                                    <Block style={{ marginTop: 0 }}>
                                        <Block >
                                            <Block style={styles.info}>
                                                <Text bold style={{ alignSelf: 'center' }} size={28} color="#32325D">
                                                    Billing Address
                    </Text>
                                                <Block>
                                                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                                                        Street Address
                      </Text>
                                                    <Input
                                                        right
                                                        color="black"
                                                        style={styles.search}
                                                        placeholder="2801 Rutford Ave"
                                                        placeholderTextColor={'#8898AA'}
                                                        onFocus={() => { }}
                                                        onChangeText={(text) => { this.state.billingAddress.street = text }}
                                                        iconContent={null}
                                                    />
                                                </Block>

                                                <Block>
                                                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                                                        City
                      </Text>
                                                    <Input
                                                        right
                                                        editable={this.state.editing}
                                                        color="black"
                                                        style={styles.search}
                                                        placeholder="Richardson"
                                                        placeholderTextColor={'#8898AA'}
                                                        onFocus={() => { }}
                                                        onChangeText={(text) => { this.state.billingAddress.city = text }}
                                                        iconContent={null}
                                                    />
                                                </Block>

                                                <Block>
                                                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                                                        State
                      </Text>
                                                    <Input
                                                        right
                                                        editable={this.state.editing}
                                                        color="black"
                                                        style={styles.search}
                                                        placeholder="Texas"
                                                        placeholderTextColor={'#8898AA'}
                                                        onFocus={() => { }}
                                                        onChangeText={(text) => { this.state.billingAddress.state = text }}
                                                        iconContent={null}
                                                    />
                                                </Block>

                                                <Block>
                                                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                                                        Country
                      </Text>
                                                    <Input
                                                        right
                                                        editable={this.state.editing}
                                                        color="black"
                                                        style={styles.search}
                                                        placeholder="United States"
                                                        placeholderTextColor={'#8898AA'}
                                                        onFocus={() => { }}
                                                        onChangeText={(text) => { this.state.billingAddress.country = text }}
                                                        iconContent={null}
                                                    />
                                                </Block>

                                                <Block>
                                                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                                                        Postal Code
                      </Text>
                                                    <Input
                                                        right
                                                        editable={this.state.editing}
                                                        type={"number-pad"}
                                                        color="black"
                                                        style={styles.search}
                                                        placeholder="75080"
                                                        placeholderTextColor={'#8898AA'}
                                                        onFocus={() => { }}
                                                        onChangeText={(text) => { this.state.billingAddress.postalCode = text }}
                                                        iconContent={null}
                                                    />
                                                </Block>

                                            </Block>

                                        </Block>
                                        <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                                            <Block style={styles.divider} />
                                        </Block>

                                        <Button color="primary" style={styles.createButton, { width: width * 0.5, alignSelf: 'center', marginBottom: 2 * theme.SIZES.BASE }} onPress={
                                            async () => {
                                                await this.getCart();
                                                console.log(this.state.cart);
                                                this.state.selectedArticle = this.props.navigation.getParam("selectedArticle", "");
                                                this.state.numberToAdd = this.props.navigation.getParam('numberToAdd', "");
                                                for (var i = 1; i <= this.state.numberToAdd; i++) {
                                                    this.state.cart.push({
                                                        title: this.state.selectedArticle.title,
                                                        image: this.state.selectedArticle.image,
                                                        cta: 'View article',
                                                        price: "$" + this.state.selectedArticle.price,
                                                    })
                                                }
                                                console.log(this.state.cart)
                                                await SecureStore.setItemAsync('cart', JSON.stringify(this.state.cart));
                                                this.props.navigation.navigate('Cart')
                                                ToastAndroid.show('Item added to Cart', ToastAndroid.SHORT);
                                            }}>
                                            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                                PAY
                                                </Text>
                                        </Button>

                                    </Block>

                                </Block>
                            </KeyboardAvoidingView>
                        </ScrollView>
                    </ImageBackground >
                </Block >

            </Block >
        );
    }
}

const styles = StyleSheet.create({
    profile: {
        marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
        flex: 1
    },
    profileContainer: {
        width: width,
        height: height,
        padding: 0,
        zIndex: 1
    },
    profileBackground: {
        width: width,
        height: height / 2
    },
    profileCard: {
        padding: theme.SIZES.BASE,
        marginHorizontal: theme.SIZES.BASE,
        marginTop: 65,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        zIndex: 2
    },
    info: {
        paddingHorizontal: 40
    },
    avatarContainer: {
        position: "relative",
        marginTop: -80
    },
    avatar: {
        width: 124,
        height: 124,
        borderRadius: 62,
        borderWidth: 0
    },
    nameInfo: {
        marginTop: 35
    },
    divider: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#E9ECEF"
    },
    thumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: "center",
        width: thumbMeasure,
        height: thumbMeasure
    }
});

export default Profile;
