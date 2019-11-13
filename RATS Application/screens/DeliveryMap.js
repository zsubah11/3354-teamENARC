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
        width: width,
        height: height*0.8,
        borderRadius: 20,
    },
});

export default DeliveryMap;
