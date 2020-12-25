import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback, FlatList } from 'react-native';

import data from './data.json';


const Iller = (props) => {
    const { style, ad, Iller } = props;

    return (
        <View style={style}>
            {ad ? (
                <View>
                    <ScrollView>
                        {Iller.map(city =>
                        <View key={city.plaka_kodu}
                            style={{
                                padding: 5
                            }}>
                            <Text>Şehir adı: {city.ad}</Text>
                            <Text>Nüfusu: {city.nufus_sayisi}</Text>
                            <Text>Plaka kodu: {city.plaka_kodu}</Text>
                        </View>)}
                    </ScrollView>
                </View>
            ) : null}
        </View>
    );
}

const Bolgeler = (props) => {
    const { list, style, select, selected } = props;
    
    const renderItem = ({ item }) => (
        <TouchableNativeFeedback onPress={() => select(item)}>
            <Text style={{
                padding: 5,
                fontSize: 16,
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
                ...(selected === item ? { color: 'blue' } : { color: '#000000' })
            }}>{item}</Text>
        </TouchableNativeFeedback>
    )

    return (
        <FlatList 
            data={list}
            renderItem={renderItem}
            keyExtractor={name => name}
            style={style}
        />
    );
}


const App = () => {
    const [selectRegion, setSelectRegion] = useState();

    return (
        <View style={{ flex: 1 }}>
            <Bolgeler 
                list={Object.keys(data)}
                style={{ flexBasis: '50%' }}
                select={region => setSelectRegion(region)}
                selected={selectRegion} />
            <Iller
                ad={selectRegion}
                Iller={selectRegion && data[selectRegion]}
                style={{ flexBasis: '50%' }}
                />
        </View>
    )
}

export default App;