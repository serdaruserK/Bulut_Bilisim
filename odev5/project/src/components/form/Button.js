import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import $theme from '@app/theme';

const $ = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: '#ffffff',
        maxHeight: 40,
        borderRadius: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        ...$theme.appText
    }
})


const Button = ({ title, onPress, style = {} }) => {
    return (
        <TouchableOpacity style={[$.button, style]} onPress={onPress} activeOpacity={.6}>
            <Text style={$.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;