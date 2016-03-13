'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

var PostList = require('./PostList');

var styles = StyleSheet.create({
  container: {
      flex: 1
  }
});

class Home extends Component {
    render() {
        return (
  	       <NavigatorIOS
            style={styles.container}
            ref= 'nav'
            initialRoute={{
              title: "Reddit Home Page",
              component: PostList
            }}/>
        );
    }
}


module.exports = Home;
