'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Component,
    ActivityIndicatorIOS,
    TextInput,
    TouchableHighlight
   } = React;

var Searchbar = require('./Searchbar');
var styles = StyleSheet.create({

});

class SearchReddit extends Component {
  constructor(props){
    super(props);
    this.state = {
      subReddit: '',
      isLoading: false,
      errorMessage: ''
    };
  }

  render() {
    var spinner = this.state.isLoading ?
       ( <ActivityIndicatorIOS
           hidden='true'
           size='large'/> ) :
       ( <View/>);
       return (
         <View style={styles.container}>
           <Searchbar
             onSearchChange={this.onSearchChange}
             isLoading={this.state.isLoading}
             onFocus={() =>
               this.refs.listview && this.refs.listview.getScrollResponder().scrollTo({ x: 0, y: 0 })}
           />
           <View style={styles.separator} />
         </View>
       );
  }
}

module.exports = SearchReddit;
