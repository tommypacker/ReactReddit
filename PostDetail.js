'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';


var styles = StyleSheet.create({
    container: {
        marginTop: 75,
        alignItems: 'center'
    },
    image: {
        width: 107,
        height: 165,
        padding: 10
    },
    description: {
        padding: 10,
        fontSize: 15,
        color: '#656565'
    }
});

class PostDetail extends Component {
  render(){
    var post = this.props.post;
    var description = (typeof post.data.title !== 'undefined') ? post.data.title : '';
    return (
      <View style={styles.container}>
        
          <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

module.exports = PostDetail;
