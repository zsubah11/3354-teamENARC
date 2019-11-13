import React from 'react';
import { StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, FlatList, Platform, } from 'react-native';
import { Block, theme, Text } from 'galio-framework';

import users from '../constants/users';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { argonTheme } from '../constants';
import MapCard from "../components/MapCard";
import { AntDesign } from '@expo/vector-icons';
import { Button } from "../components";

const { height, width } = Dimensions.get('screen');

class DeliveryMap extends React.Component {

    state = {
        location: {},
        errorMessage: null,
        packSize: 6,
        markers: [
            {
                latlng: { latitude: 33.001905, longitude: -96.769849 },
                title: "Sam's Club",
                description: "Wholesale Supermarket"
            }
        ],
        activeMarkers: [],
    };

    componentWillMount() {
        if (this.props.navigation.state.params) {
            this.state.selectedArticle = this.props.navigation.state.params.selectedArticle;
            this.state.numberToAdd = this.props.navigation.state.params.numberToAdd;
            console.log(this.state);
        }
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.BestForNavigation });
        this.setState({ location });
    };


    renderMarkers = () => {
        console.log(this.state.activeMarkers);
        return (
            this.state.markers.map(marker => (
                <Marker
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}
                />
            ))

            
        );
    }

    renderArticles = () => {
        return (
            <Block>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.articles}>
                    <Block center style={{ alignItems: 'center', justifyContent: 'center' }}>

                        <MapView style={styles.mapStyle}
                            initialRegion={{
                                latitude: 32.990443,
                                longitude: -96.750806,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            {/* {
                                this.state.location.hasOwnProperty("latlng") != null ? <Marker
                                    coordinate={this.state.location.latlng}
                                    title={"Your Location"}
                                /> : null
                            } */}
                            {this.renderMarkers()}
                        </MapView>


                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.articles}>

                            <Block style={{ marginBottom: height * 0.01, borderColor: argonTheme.COLORS.BORDER_COLOR, borderBottomWidth: 1 }}>
                                <Text center color={argonTheme.COLORS.ACTIVE} size={16} bold style={{ marginBottom: height * 0.02 }}>{this.state.selectedArticle.title}</Text>
                            </Block>

                            <Block flex style={{ marginBottom: height * 0.02 }}>
                                <Block row middle>
                                    <Text bold color={argonTheme.COLORS.DEFAULT} style={{ marginRight: width * 0.1 }} size={14}>Pack Size</Text>
                                    <Block style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => { if (this.state.packSize != 1) { this.setState({ packSize: this.state.packSize - 1 }) } }}>
                                            <AntDesign name="minus" size={22} color="red" style={{ opacity: 0.5 }} />
                                        </TouchableOpacity>

                                        <Block style={{ height: 40, width: 40, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, borderRadius: 10, borderColor: argonTheme.COLORS.BORDER_COLOR, borderWidth: 1 }}>
                                            <Text size={14} bold>{this.state.packSize}</Text>
                                        </Block>

                                        <TouchableOpacity onPress={() => { this.setState({ packSize: this.state.packSize + 1 }) }}>
                                            <AntDesign name="plus" size={22} color="blue" style={{ opacity: 0.5 }} />
                                        </TouchableOpacity>
                                    </Block>
                                </Block>
                            </Block>

                            <Block flex>
                                <FlatList
                                    data={users}
                                    renderItem={({ item }) => <MapCard onPressX={() => {
                                        console.log(item.name + "toggled")
                                        this.setState({
                                            activeMarkers: this.state.activeMarkers.push({name: item.name})
                                        })
                                    }} item={item} horizontal />}
                                    keyExtractor={item => item.name}
                                />
                            </Block>

                            <Text size={14} style={{ alignSelf: 'center', marginTop: height * 0.02, color: argonTheme.COLORS.DEFAULT }}>By Clicking Deliver, I agree to delivering</Text>
                            <Text size={14} style={{ alignSelf: 'center', marginBottom: height * 0.02, color: argonTheme.COLORS.DEFAULT }}>the selected items in the next two days</Text>

                            <Button color="primary" style={styles.createButton, { width: width * 0.7, alignSelf: 'center' }} onPress={() => {

                            }}>
                                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                    DELIVER
                                                </Text>
                            </Button>

                        </ScrollView>


                    </Block>
                </ScrollView>
            </Block>
        )
    }

    render() {
        return (
            <Block flex center style={styles.home}>
                {this.renderArticles()}
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    home: {
        width: width,
    },
    articles: {
        width: width - theme.SIZES.BASE * 2,
        paddingVertical: theme.SIZES.BASE,
    },
    mapStyle: {
        width: width * 0.92,
        height: height * 0.5,
        borderRadius: 20,
    },
});

export default DeliveryMap;
