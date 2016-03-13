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
        width: 200,
        height: 200,
        padding: 20
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
    var imageURI = (typeof post.data.thumbnail !== 'undefined') ? post.data.thumbnail : '';
    return (
      <View style={styles.container}>
          <Image style={styles.image} source={{uri: imageURI}} />
          <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

module.exports = PostDetail;
