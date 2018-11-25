import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      diplayMenu:false
    }
    this._loadScreenAsync = this._loadScreenAsync.bind(this);
  }

  state = {
    isLoadingComplete: true
  };
  _loadScreenAsync = async () => {
    var that = this;
    setTimeout(function(){
      that.setState({diplayMenu:'true'})
    }, 3000);
  }
  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
            
          >
          </AppLoading>
      );
    } else {
      this._loadScreenAsync()
      if(this.state.diplayMenu === false)
        return (
          <View style={styles.container}>
            <Image source={require('../Telemedicine/aplsah.png')} style={styles.backgroundImage} >
            </Image>
          </View>
        )
      else
        return(
          <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
          </View>
        )
    }
  }
  

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width:'100%',
    height:'100%'
     // or 'stretch'
  }
});
