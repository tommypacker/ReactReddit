'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';

var REQUEST_URL = 'https://www.reddit.com/.json';
var PostCell = require('./PostCell');
var PostDetail = require('./PostDetail');

var styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    thumbnail: {
        width: 60,
        height: 60,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    },
    separator: {
       height: 1,
       backgroundColor: '#dddddd'
    },
    listView: {
      marginTop: 64,
      marginBottom: 49,
      backgroundColor: '#F5FCFF'
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class PostList extends Component {
    constructor(props) {
         super(props);
         this.state = {
           isLoading: true,
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2
           })
         };
     }

    componentDidMount() {
        this.fetchData();
    }

    fetchData(){
      fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.data.children),
            isLoading: false
        });
      })
      .done();
    }

    render() {
      if (this.state.isLoading) {
           return this.renderLoadingView();
       }
        return (
          <ListView navigator={this.props.navigator}
            dataSource={this.state.dataSource}
            renderRow={this.renderPost.bind(this)}
            style={styles.listView}
            />
        );
    }

    renderLoadingView() {
      return (
          <View style={styles.loading}>
              <ActivityIndicatorIOS
                  size='large'/>
              <Text>
                  Loading posts...
              </Text>
          </View>
        );
    }

    renderPost(post) {
       return (
            <PostCell
              key={post.id}
              onSelect={() => this.selectMovie(post)}
              //onHighlight={() => highlightRowFunc(sectionID, rowID)}
              //onUnhighlight={() => highlightRowFunc(null, null)}
              post={post}
            />
       );
   }

   selectMovie(post: Object) {
     this.props.navigator.push({
       title: post.data.title,
       component: PostDetail,
       passProps: {post},
     });
   }

   showPostDetail(post: Object) {
      var PostDetail = require('./PostDetail');
      this.props.navigator.push({
           title: post.data.title,
           component: PostDetail,
           passProps: {post},
       });
   }
}




module.exports = PostList;
