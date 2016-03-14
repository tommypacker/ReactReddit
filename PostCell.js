'use strict';

var React = require('react-native');
var {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View
} = React;

var getImageSource = require('./getImageSource');
var getStyleFromRating = require('./getStyleFromRating');
var getTextFromRating = require('./getTextFromRating');

var PostCell = React.createClass({
  render: function() {
    var postRating = this.props.post.data.score;
    var TouchableElement = TouchableHighlight;
    return (
      <View>
        <TouchableElement
          onPress={this.props.onSelect}
          onShowUnderlay={this.props.onHighlight}
          onHideUnderlay={this.props.onUnhighlight}>
          <View style={styles.row}>
            <View style={styles.scoreContainer}>
              <Text style={styles.postScore}>
                {this.props.post.data.score}
              </Text>
            </View>
            <Image
              source={getImageSource(this.props.post, 'det')}
              style={styles.cellImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.postTitle} numberOfLines={3}>
                {this.props.post.data.title}
              </Text>
              <Text style={styles.postAuthor} numberOfLines={1}>
                {this.props.post.data.author}
              </Text>
            </View>
          </View>
        </TouchableElement>
        <View style={styles.separator} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  textContainer: {
    flex: 1,
  },
  scoreContainer:{
    width: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
    marginRight: 5
  },
  postAuthor: {
    color: '#999999',
    fontSize: 12,
  },
  postScore:{
    color: '#999999',
    marginRight: 7,
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 7,
  },
  cellImage: {
    backgroundColor: '#dddddd',
    height: 60,
    marginRight: 10,
    width: 60,
  },
  cellBorder: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: StyleSheet.hairlineWidth,
    marginLeft: 4,
  },
  separator: {
     height: 1,
     backgroundColor: '#dddddd'
  },
});

module.exports = PostCell;
