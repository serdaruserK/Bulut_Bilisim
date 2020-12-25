import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import $theme from '@app/theme';
import categories from '@app/categories.json';

const $ = StyleSheet.create({
    card: {
        margin: 10,
        marginTop: 14,
        padding: 5,
        borderColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 3,
        position: 'relative'
    },
    title: {
        ...$theme.appText,
        fontSize: 18,
        marginLeft: 5,
        marginTop: 10
    },
    description: {
        ...$theme.appText,
        padding: 5,
        fontSize: 16
    },
    category: {
        ...$theme.appText,
        position: 'absolute',
        left: 10,
        top: -15,
        backgroundColor: '#151515',
        fontSize: 18,
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 25,
        borderBottomWidth: 0,
        paddingLeft: 5,
        paddingRight: 5
    }
});


const Item = (props) => {
    const { title, description, category } = props;
    const { color: backgroundColor } = categories.find(({ name }) => name === category);
    
    return (
        <View style={[$.card, { backgroundColor }]}>
            <Text style={[$.category, { backgroundColor }]}>{category}</Text>
            <Text style={$.title}>{title}</Text>
            <Text style={$.description}>{description}</Text>
        </View>
    )
}

export default Item;