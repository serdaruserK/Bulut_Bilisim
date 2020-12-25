import React from 'react';
import { Card, CardItem, Body, Text } from 'native-base';
import { View, TouchableOpacity } from 'react-native';

// Redux
import { connect } from 'react-redux';
import { postsSetShow } from '@redux/actions/posts';

const PostDetail = ({ id, title, body }) => {
    const color = '#ffffff';
    return (
        <View style={{
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            minHeight: 85,
            elevation: 25,
            backgroundColor: '#151515'
        }}>
            <Text style={{ color }}>id: {id}</Text>
            <Text style={{ color }}>Başlık: {title}</Text>
            <Text style={{ color }}>Gövde: {body}</Text>
        </View>
    )
}

const Post = props => {
    const { id, title, body, postsSetShow, showPostIndex } = props;

    const onPress = () => postsSetShow(id);

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.5}>
            {showPostIndex === id && <PostDetail id={id} title={title} body={body} />}
            <Card style={{ opacity: showPostIndex !== -1 ? .2 : 1 }}>
                <CardItem header>
                    <Text style={{ fontSize: 20 }}>{title}</Text>
                </CardItem>
                <CardItem>
                    <Body style={{ padding: 10 }}>
                        <Text>{body.substring(0, 25)}...</Text>    
                    </Body>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
}

const mapStateToProps = state => ({
    showPostIndex: state.posts.show
})
export default connect(mapStateToProps, { postsSetShow }) (Post);