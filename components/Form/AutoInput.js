import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import GradDrop from './GradDropDown';
import { AntDesign } from '@expo/vector-icons';
import Autocomplete from 'react-native-autocomplete-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context';

const AutoInput = ({ formData, setFormData, uniname, setUni }) => {



    const [query, setQuery] = useState('');
    const [allMovies, setAllMovies] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [selecteduni, setSelected] = useState('')




    const fetchData = async (query) => {
        if (query.length > 3) {
            const response = await fetch(`http://universities.hipolabs.com/search?name=${query}`);
            const movies = await response.json();
            setAllMovies(movies);
            return movies;

        }

    }


    const handleInputSubmit = useCallback((ev) => {
        const inputValue = ev.nativeEvent.text
        setSelected(inputValue)
        setUni(inputValue)
        // you can do what you want now

        setFormData({ ...formData, education: { ...formData.education, university: inputValue } })

    })


    const placeholder = "Type your university name.."


    return (
        <Autocomplete
            value={query}
            placeholder={placeholder}
            placeholderTextColor='black'
            onEndEditing={handleInputSubmit}
            // ref for the native text input
            // the ref is useful when you want to access the native text input

            listContainerStyle={{

            }}
            inputContainerStyle={{ borderRadius: 50, borderWidth: 0.5, padding: 8, marginRight: 4, width: '100%', borderColor: '#7c445f' }}
            data={allMovies ? allMovies : 'null'}
            onChangeText={(text) => { setQuery(text); setLoading(false); fetchData(text) }}
            hideResults={isLoading}
            listStyle={{
                maxHeight: 0,
            }}
            flatListProps={{
                keyExtractor: (_, idx) => idx,
                keyboardShouldPersistTaps: 'always',
                renderItem: ({ item: { name } }) => (

                    <TouchableOpacity onPress={() => { setQuery(name); setLoading(true) }} className='p-4 bg-black text-white'>
                        <Text className='text-white text-xs p-0' styles={{ color: 'white' }}>{name}</Text>
                    </TouchableOpacity>

                ),
            }}


        />
    )
}

export default AutoInput