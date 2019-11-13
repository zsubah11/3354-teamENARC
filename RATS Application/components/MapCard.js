import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Switch } from "../components/";
import { Feather } from '@expo/vector-icons';
import { argonTheme } from '../constants';
const { height, width } = Dimensions.get('screen');

class MapCard extends React.Component {

    state = {
        "switch-1": false,
    };

    toggleSwitch = switchId =>
        this.setState({ [switchId]: !this.state[switchId] });

    callOnPress() {
        this.props.onPressX;
    }
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
                <TouchableWithoutFeedback >
                    <Block
                        row
                        middle
                        space="between"
                        style={{ flex: 1, marginVertical: theme.SIZES.BASE, alignItems: 'center', paddingHorizontal: width * 0.04 }}
                    >
                        <Text bold color={argonTheme.COLORS.DEFAULT} size={14}>{item.name}</Text>
                        <Block row middle>
                            <Text color={argonTheme.COLORS.ACTIVE} style={{ marginRight: width * 0.1 }} size={14}>{item.numItems} items</Text>
                            <Switch
                                value={this.state["switch-1"]}
                                onValueChange={() => {
                                    this.toggleSwitch("switch-1");
                                    this.callOnPress();
                                }}
                                style={{ alignSelf: 'flex-end' }}
                            />
                        </Block>
                    </Block>
                </TouchableWithoutFeedback>
            </Block>
        );
    }
}

MapCard.propTypes = {
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
        minHeight: 30,
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
        shadowRadius: 6,
        shadowOpacity: 0.1,
        elevation: 1,
    },
});

export default withNavigation(MapCard);