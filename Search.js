'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

var SearchReddit = require('./SearchReddit')

var styles = StyleSheet.create({

});

class Search extends Component {
    render() {
        return (
          <NavigatorIOS
          barTintColor = "#cee3f8"
           initialRoute={{
             title: "Search Reddit",
             component: SearchReddit
           }}/>
        );
    }
}


module.exports = Search;
