'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
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
    var imageURI = (typeof post.data.thumbnail !== 'undefined') ? post.data.thumbnail : "https://cdn2.iconfinder.com/data/icons/metro-ui-icon-set/128/Reddit.png";
    var url = (typeof post.data.url !== 'undefined') ? post.data.url : "";
    return (
      <View style={styles.container}>
          <Image style={styles.image} source={{uri: imageURI}} />
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.description} onPress={() => Linking.openURL(url).catch(err => console.error('An error occurred', err))}>{url}</Text>
      </View>
    );
  }
}

module.exports = PostDetail;
