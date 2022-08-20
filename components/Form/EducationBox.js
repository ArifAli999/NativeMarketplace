import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import Autocomplete from 'react-native-autocomplete-input';
import { AntDesign } from '@expo/vector-icons';
import GradDrop from './GradDropDown';
import { useNavigation } from '@react-navigation/native';
import DefaultModalContent from './ModalCont';

import Modal from "react-native-modal";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const EducationBox = ({ formData, setFormData }) => {

    const [query, setQuery] = useState('');
    const [allMovies, setAllMovies] = useState(null);
    const [isLoading, setLoading] = useState(true)
    const [isModalVisible, setModalVisible] = useState(false);



    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };







    const fetchData = async (query) => {
        if (query.length > 3) {
            const response = await fetch(`http://universities.hipolabs.com/search?name=${query}`);
            const movies = await response.json();

            setAllMovies(movies);

            return movies;

        }

    }



    // function to fetch data from api based on query string


    return (
        <View className='mt-6 mb-6 ' >
            <View className='flex justify-between flex- w-full mb-4'>
                <View className='flex-row items-center w-full justify-between border border-[#7c445f] rounded-full px-4 py-3 '>
                    <Text className='text-[#7c445f] text-sm font-normal  mb-2 mt-2' > Education</Text >
                    <TouchableOpacity >
                        <AntDesign name='plus' size={24} color='#7c445f'
                            onPress={() => toggleModal()} />
                    </TouchableOpacity>
                </View>
                <View className='flex w-full items-center'>




                    <Modal isVisible={isModalVisible}
                        styles={{ justifyContent: '', margin: 0, backgroundColor: '#fff', width: 300, height: 150 }}
                        useNativeDriver={true}
                        animationIn="fadeIn"

                        hideModalContentWhileAnimating={true}
                    >
                        <KeyboardAvoidingView enabled behavior={Platform.OS === "android" ? undefined : "padding"}>

                            <DefaultModalContent setModalVisible={setModalVisible} formData={formData} setFormData={setFormData} />
                        </KeyboardAvoidingView>
                    </Modal>


                </View>

            </View >

        </View >
    )
}

export default EducationBox