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

var FAKE_REDDIT_DATA = [{children: {title: 'Title', author: "Tommy Yu", url: 'https://www.washingtonpost.com/news/the-watch/wp/2016/03/10/surprise-nsa-data-will-soon-routinely-be-used-for-domestic-policing-that-has-nothing-to-do-with-terrorism', thumbnail: 'https://i.imgur.com/IxjpT42h.jpg'}},]
var REQUEST_URL = 'https://www.reddit.com/.json';

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

    render() {
      if (this.state.isLoading) {
           return this.renderLoadingView();
       }
        return (
          <ListView
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
                Loading books...
            </Text>
        </View>
    );
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

    renderPost(post) {
       return (
            <TouchableHighlight>
                <View>
                    <View style={styles.container}>
                        <Image
                            source={{uri: post.data.thumbnail}}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{post.data.title}</Text>
                            <Text style={styles.author}>{post.data.author}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
       );
   }



}







module.exports = PostList;
