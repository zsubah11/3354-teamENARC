import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Feather } from '@expo/vector-icons';
import { argonTheme } from '../constants';
import { AntDesign } from '@expo/vector-icons';
import Button from "./Button";
const { height, width } = Dimensions.get('screen');
import * as SecureStore from 'expo-secure-store';

class ProductListCard extends React.Component {

    async getCart() {
        this.setState({ cartValue: JSON.parse(await SecureStore.getItemAsync('cart')) });
    }

    state = {
        numberToAdd: 1,
        cartValue: []
    }
    render() {
        const { navigation, item, horizontal, full, style, ctaColor, imageStyle, index } = this.props;

        const imageStyles = [
            full ? styles.fullImage : styles.horizontalImage,
            imageStyle
        ];
        const cardContainer = [styles.card, styles.shadow, style];
        const imgContainer = [styles.imageContainer,
        horizontal ? styles.horizontalStyles : styles.verticalStyles,
        styles.shadow
        ];

        return (
            <Block row={horizontal} card flex style={cardContainer}>
                <Block flex style={imgContainer}>
                    <Image source={{ uri: item.image }} style={{height: "100%", width: "100%"}} />
                </Block>
                <TouchableWithoutFeedback onPress={this.props.onPressX}>
                    <Block flex space="between" style={styles.cardDescription}>

                        <Block>
                            <Text bold size={14} style={styles.cardTitle, { alignSelf: 'center' }}>{item.title}</Text>
                            <Block style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <Text bold size={18} style={{ color: 'green', alignSelf: 'center' }}>{item.price}</Text>
                            </Block>
                        </Block>

                        <Block style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: height * 0.01 }}>
                            <Button color="primary" style={{ width: width * 0.4 }} onPress={() => {
                                this.props.navigation.navigate("QRCode");
                            }}>
                                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                    View QR Code
                                                </Text>
                            </Button>

                        </Block>
                        <Block style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Button color="primary" style={{ width: width * 0.4 }} onPress={async () => {
                                console.log(index);
                                await this.getCart();
                                this.state.cartValue.splice(index, 1);
                                console.log(this.state.cartValue);
                                SecureStore.setItemAsync("cart", JSON.stringify(this.state.cartValue));
                                this.props.navigation.navigate("Cart");
                            }}>
                                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                    Cancel Pass
                                                </Text>
                            </Button>

                        </Block>

                    </Block>
                </TouchableWithoutFeedback>
            </Block>
        );
    }
}

ProductListCard.propTypes = {
    item: PropTypes.object,
    horizontal: PropTypes.bool,
    full: PropTypes.bool,
    ctaColor: PropTypes.string,
    imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: theme.COLORS.WHITE,
        marginVertical: 0,
        borderWidth: 0,
        minHeight: 114,
        marginBottom: 16
    },
    cardTitle: {
        flex: 1,
        flexWrap: 'wrap',
        paddingBottom: 6
    },
    cardDescription: {
        padding: theme.SIZES.BASE / 2
    },
    imageContainer: {
        borderRadius: 3,
        elevation: 1,
        overflow: 'hidden',
    },
    image: {
        // borderRadius: 3,
    },
    horizontalImage: {
        height: 122,
        width: 'auto',
    },
    horizontalStyles: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    verticalStyles: {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
    },
    fullImage: {
        height: 215
    },
    shadow: {
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.1,
        elevation: 2,
    },
});

export default withNavigation(ProductListCard);