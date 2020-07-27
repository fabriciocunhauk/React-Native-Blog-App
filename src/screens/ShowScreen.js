import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { SimpleLineIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context)

    const BlogPost = state.find(
        BlogPost => BlogPost.id === navigation.getParam('id')
    )

    return (
        <View>
            <Text>{BlogPost.title}</Text>
            <Text>{BlogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
            <SimpleLineIcons style={styles.pencil} name='pencil' size={20} />
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    pencil: {
        marginRight: 20
    }
});

export default ShowScreen;