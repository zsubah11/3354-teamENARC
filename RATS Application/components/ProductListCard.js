import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Feather } from '@expo/vector-icons';
import { argonTheme } from '../constants';
const { height,width } = Dimensions.get('screen');

class ProductListCard extends React.Component {
    render() {
        const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;

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
                <TouchableWithoutFeedback onPress={this.props.onPressX}>
                    <Block flex style={imgContainer}>
                        <Image source={{ uri: item.image }} style={imageStyles} />
                    </Block>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.props.onPressX}>
                    <Block flex space="between" style={styles.cardDescription}>
                        <Text bold size={14} style={styles.cardTitle}>{item.title}</Text>
                        <Block space="between" style={{ flexDirection: 'row' }}>
                            <Text bold size={18} style={{ color: 'green' }}>$ {item.price}</Text>
                            <Block style={{ flexDirection: 'row', alignItems:'flex-end' }}>
                                <Feather name="truck" size={20} color="gray" />
                                <Text size={14} style={{ color: 'gray', marginLeft: width*0.004 }}>1 Day</Text>
                            </Block>
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