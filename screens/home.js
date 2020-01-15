import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';


export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        { title: 'Star Wars', rating: 5, body: 'lorem ipsum', key: '1'},
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2'},
        { title: 'Not so Final', rating: 3, body: 'lorem ipsum', key: '3'}
    ]);

    const [modalOpen, setModalOpen] = useState(false);


    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen}>
                <View style={styles.modalContent}>
                    <MaterialIcons 
                        name='close'
                        size={24}
                        onPress={() => setModalOpen(false)}
                        style={{...styles.modalToggle, ...styles.modalClose}}
                    />
                    <Text>Hello</Text>
                </View>
            </Modal>
            <MaterialIcons 
                name='add'
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1  
    }
})

