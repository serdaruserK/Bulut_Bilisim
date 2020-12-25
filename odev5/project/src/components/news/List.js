import React from 'react';
import { ScrollView } from 'react-native';

// News
import data from '@app/data.json';
import Item from './Item';


const List = ({ groupBy }) => {
    const items = (groupBy ? data.groupBy('category') : data.shuffle()).map((item, index) => 
        <Item
            key={item.category + index}
            title={item.title}
            category={item.category}
            description={item.description} 
        />
    );
    
    return (
        <ScrollView>
            {items}
        </ScrollView>
    )
}

export default List;