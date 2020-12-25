import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '@components/form/Button';

import List from './news/List';

export const $ = StyleSheet.create({
    app: {
        backgroundColor: '#151515'
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 85
    },
    button: {
        margin: 10
    }
});

const Home = () => {
    const [groupBy, setGroupBy] = useState(false);
    return (
        <View style={$.app}>
            <View style={$.buttons}>
                <Button 
                    style={$.button}
                    title="Karıştır"
                    onPress={() => setGroupBy(false)} />
                <Button 
                    style={$.button}
                    title="Grupla"
                    onPress={() => setGroupBy(true) } />
            </View>
            <List groupBy={groupBy}/>
        </View>
    )
}

export default Home;