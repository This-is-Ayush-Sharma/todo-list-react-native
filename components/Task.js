import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        // backgroundColor: '#55BCF6',
        backgroundColor:'purple',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,

    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 13,
        height: 13,
        // borderColor: '#55BCF6',
        borderColor:'purple',
        borderWidth: 1.5,
        borderRadius: 3,
    },
    
});
export default Task;