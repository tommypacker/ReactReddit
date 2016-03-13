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
            {/* $FlowIssue #7363964 - There's a bug in Flow where you cannot
              * omit a property or set it to undefined if it's inside a shape,
              * even if it isn't required */}
            <Image
              source={getImageSource(this.props.post, 'det')}
              style={styles.cellImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.postTitle} numberOfLines={2}>
                {this.props.post.data.title}
              </Text>
              <Text style={styles.postYear} numberOfLines={1}>
                {this.props.post.data.author}
                {' '}&bull;{' '}
                <Text style={getStyleFromRating(postRating)}>
                  Rating: {getTextFromRating(postRating)}
                </Text>
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
  postTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  postYear: {
    color: '#999999',
    fontSize: 12,
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5,
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
