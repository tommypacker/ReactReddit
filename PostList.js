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

var PostCell = require('./PostCell');
var PostDetail = require('./PostDetail');
var PAGE_REQUEST_URL = 'https://www.reddit.com/.json?count=25&after='
var counter = 0;
var lastId = '';

var posts = [];

class PostList extends Component {
    constructor(props) {
         super(props);
         this.state = {
           isLoading: true,
           isLoadingTail: false,
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2
           })
         };
     }

    componentDidMount() {
        this.posts = [],
        this.fetchData();
    }

    fetchData(){
      fetch(PAGE_REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
            dataSource: this.getDataSource(responseData.data.children),
            isLoading: false,
            isLoadingTail: false
        });
      })
      .done();
    }

    render() {
      if (this.state.isLoading) {
           return this.renderLoadingView();
       }
        return (
          <ListView
            onEndReached={this.onEndReached.bind(this)}
            onEndReachedThreshold={5}
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
       counter += 1;
       console.log(lastId);
       if(counter % 25 == 0 && counter > 0){
         lastId = post.data.id;
       }
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

    onEndReached(){
      //console.log("end reached");
      if (this.state.isLoadingTail) {
        // We're already fetching or have all the elements so noop
        return;
      }
      this.setState({
        isLoadingTail: true,
      });
      fetch(PAGE_REQUEST_URL + 't3_' + lastId)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
            dataSource: this.getDataSource(responseData.data.children),
            isLoading: false,
            isLoadingTail: false
        });
      })
      .done();
    }

    getDataSource(morePosts: ListView.DataSource){
      this.posts = this.posts.concat(morePosts);
      return this.state.dataSource.cloneWithRows(this.posts);
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




module.exports = PostList;
