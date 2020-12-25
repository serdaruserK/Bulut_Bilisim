import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { postsGetAll } from '@redux/actions/posts';
import { View, Spinner, Text } from 'native-base';

// Components
import Post from '@components/home/Post';

const Home = props => {
    const { posts, postsGetAll } = props;

    useEffect(() => {
        postsGetAll();
    }, []);

    if (posts.status === 'idle') {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Spinner /></View>
    } else if (posts.status === 'unsuccess') {
        return <View><Text>Bir sorun oluştu.</Text></View>
    }

    return <FlatList
        data={posts.data}
        renderItem={({ item }) => <Post id={item.id} title={item.title} body={item.body} />}
        keyExtractor={item => item.id.toString()}
    />
}


const mapStateToProps = state => ({
    posts: state.posts
});
export default connect(mapStateToProps, { postsGetAll }) (Home);