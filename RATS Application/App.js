import React from 'react';
import { Image } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Block, GalioProvider } from 'galio-framework';

import Screens from './navigation/Screens';
import LoginScreens from './navigation/LoginScreens';
import MainNavigator from './navigation/MainNavigator'
import { Images, articles, argonTheme } from './constants';

console.disableYellowBox=true;

// cache app images
const assetImages = [
  Images.Onboarding,
  Images.LogoOnboarding,
  Images.Logo,
  Images.Pro,
  Images.ArgonLogo,
  Images.iOSLogo,
  Images.androidLogo
];

// cache product images
articles.map(article => assetImages.push(article.image));

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    isLoggedIn: false,
  }

  changeView(){
    this.setState({isLoggedIn: true})
  }

  onSelect = data => {
    this.setState(data);
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      // if (this.state.isLoggedIn) {
        return (<GalioProvider theme={argonTheme}>
          <Block flex>
            <MainNavigator />
          </Block>
        </GalioProvider>);
      // }
      // else {
      //   return (<GalioProvider theme={argonTheme}>
      //     <Block flex>
      //       <LoginScreens viewChange={()=>{this.changeView()}}/>
      //     </Block>
      //   </GalioProvider>);
      // }
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      ...cacheImages(assetImages),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

}
