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
           barTintColor = "#cee3f8"
            style={styles.container}
            ref= 'nav'
            initialRoute={{
              title: "Reddit Front Page",
              component: PostList
            }}/>
        );
    }
}


module.exports = Home;
