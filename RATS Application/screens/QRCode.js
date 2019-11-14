import React from "react";
import {
  Image,
  Dimensions
} from "react-native";
//galio
import { Block, Text, theme, Input } from "galio-framework";

const { height, width } = Dimensions.get("screen");


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Block flex center style={{justifyContent: 'center', alignItems:'center'}}>
            <Image
              resizeMode="stretch"
              style={{ width: width*0.8, height: width*0.8 }}
              source={require('../assets/imgs/qrcode.png')}
            />
      </Block>
    );
  }
}

export default Dashboard;
