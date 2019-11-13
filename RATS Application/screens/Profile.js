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
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import { Header } from 'react-navigation';

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {

  state = {
    address: {
      street: null,
      city: null,
      postalCode: null,
      state: null,
      country: null,
      phoneNumber: null,
    }
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
                  <Block middle style={styles.avatarContainer}>
                    <Image
                      source={{ uri: Images.ProfilePicture }}
                      style={styles.avatar}
                    />
                  </Block>
                  <Block style={styles.info}>
                    <Block
                      middle
                      row
                      space="evenly"
                      style={{ marginTop: 20, paddingBottom: 24 }}
                    >
                      <Button
                        small
                        style={{ backgroundColor: argonTheme.COLORS.INFO }}
                      >
                        EDIT
                    </Button>
                      <Button
                        small
                        style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
                      >
                        LOGOUT
                    </Button>
                    </Block>
                    <Block row space="between">
                      <Block middle>
                        <Text
                          bold
                          size={12}
                          color="#525F7F"
                          style={{ marginBottom: 4 }}
                        >
                          2K
                      </Text>
                        <Text size={12}>Orders</Text>
                      </Block>

                      <Block middle>
                        <Text
                          bold
                          color="#525F7F"
                          size={12}
                          style={{ marginBottom: 4 }}
                        >
                          15
                      </Text>
                        <Text size={12}>Upvotes</Text>
                      </Block>
                    </Block>
                  </Block>
                  <Block flex>
                    <Block middle style={styles.nameInfo}>
                      <Text bold size={28} color="#32325D">
                        Archie Andrews, 24
                    </Text>
                      <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                        Riverdale, Riverdale Land, USA
                    </Text>
                    </Block>
                    <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                      <Block style={styles.divider} />
                    </Block>
                  </Block>


                  <Block style={{ marginTop: 0 }}>
                    <Block >
                      <Block style={styles.info}>

                        <Text bold style={{ alignSelf: 'center' }} size={28} color="#32325D">
                          Home Address
                    </Text>

                        <Block>
                          <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                            Street Address
                      </Text>
                          <Input
                            right
                            color="black"
                            style={styles.search}
                            placeholder="Street Address"
                            placeholderTextColor={'#8898AA'}
                            onFocus={() => { }}
                            onChangeText={(text) => { this.state.address.street = text }}
                            iconContent={null}
                          />
                        </Block>

                        <Block>
                          <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                            City
                      </Text>
                          <Input
                            right
                            color="black"
                            style={styles.search}
                            placeholder="Street Address"
                            placeholderTextColor={'#8898AA'}
                            onFocus={() => { }}
                            onChangeText={(text) => { this.state.address.city = text }}
                            iconContent={null}
                          />
                        </Block>

                        <Block>
                          <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                            State
                      </Text>
                          <Input
                            right
                            color="black"
                            style={styles.search}
                            placeholder="Street Address"
                            placeholderTextColor={'#8898AA'}
                            onFocus={() => { }}
                            onChangeText={(text) => { this.state.address.state = text }}
                            iconContent={null}
                          />
                        </Block>

                        <Block>
                          <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                            Country
                      </Text>
                          <Input
                            right
                            color="black"
                            style={styles.search}
                            placeholder="Street Address"
                            placeholderTextColor={'#8898AA'}
                            onFocus={() => { }}
                            onChangeText={(text) => { this.state.address.country = text }}
                            iconContent={null}
                          />
                        </Block>

                        <Block>
                          <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                            Postal Code
                      </Text>
                          <Input
                            right
                            type={"number-pad"}
                            color="black"
                            style={styles.search}
                            placeholder="Street Address"
                            placeholderTextColor={'#8898AA'}
                            onFocus={() => { }}
                            onChangeText={(text) => { this.state.address.postalCode = text }}
                            iconContent={null}
                          />
                        </Block>
                      </Block>
                    </Block>
                    <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                      <Block style={styles.divider} />
                    </Block>
                  </Block>
                </Block>

              </KeyboardAvoidingView>
            </ScrollView>
          </ImageBackground>
        </Block>
      </Block>
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
