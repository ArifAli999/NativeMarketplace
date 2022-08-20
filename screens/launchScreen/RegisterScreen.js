import { View, Text, TextInput, Pressable, Platform, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, getAdditionalUserInfo } from 'firebase/auth';
import useAuthStore from '../../authStore';




const RegisterScreen = ({ navigation }) => {

    const { userProfile, addUser } = useAuthStore();

    const lastNameInput = useRef()
    const usernameInput = useRef()
    const emailInput = useRef()
    const passwordInput = useRef()

    const [username, setUsername] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');


    const handleSubmit = () => {

        if (username.length < 1) {
            alert('Please enter a username')

        }
        if (lastName.length < 1) {
            alert('Please enter a last name')
        }

        if (email.length < 1) {
            alert('Please enter an email')
        }
        if (password.length < 1) {
            alert('Please enter a password')
        }
        if (firstname.length < 1) {
            alert('Please enter a first name')
        }

        else if (username.length > 2 && lastName.length > 2 && email.length > 2 && password.length > 6 && firstname.length > 0) {

            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {

                    alert('registered')

                    navigation.navigate('SecondStep', {
                        user: username,
                        lastname: lastName,
                        firstn: firstname,
                        email: email,
                        uid: auth.currentUser.uid,
                        session: auth.currentUser
                    });

                })
                .catch((error) => {

                    console.log(error.message)

                });


        }
    }




    return (
        <SafeAreaView className='flex-1  ml-6 mr-6'>
            <AntDesign name="left" size={28} color="red" onPress={() => navigation.goBack()} />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "height" : "padding"}
                contentContainerStyle={{ height: '100px' }}
                keyboardVerticalOffset={10}
                style={{ flex: 1, height: '80%' }}
            >
                <View className='w-full  mt-6 flex-1 '>
                    <View className='p-2 gap-4 mb-6 '>
                        <Text className='text-red-500 font-bold text-base'>Basic Information</Text>
                        <TextInput
                            value={firstname}
                            onChangeText={text => setFirstName(text)}
                            returnKeyType='next'
                            onSubmitEditing={() => lastNameInput.current.focus()}
                            placeholder='First Name'
                            className='border border-gray-300 text-black p-4 '
                        />
                        <TextInput
                            value={lastName}
                            onChangeText={text => setLastName(text)}
                            ref={lastNameInput}
                            returnKeyType='next'
                            onSubmitEditing={() => usernameInput.current.focus()}
                            placeholder='Last Name'
                            className='border border-gray-300 text-black p-4 '
                        />
                    </View>


                    <View className='p-2 gap-4 flex-1 '>
                        <Text className='text-red-500 font-bold text-base'>Account Information</Text>
                        <TextInput
                            value={username}
                            onChangeText={text => setUsername(text)}
                            ref={usernameInput}
                            returnKeyType='next'
                            onSubmitEditing={() => emailInput.current.focus()}
                            placeholder='Username'
                            className='border border-gray-300 text-black p-4 '
                        />
                        <TextInput
                            value={email}
                            onChangeText={text => setEmail(text)}
                            ref={emailInput}
                            returnKeyType='next'
                            onSubmitEditing={() => passwordInput.current.focus()}
                            placeholder='Email'
                            className='border border-gray-300 text-black p-4 '
                        />
                        <TextInput
                            value={password}
                            onChangeText={text => setPassword(text)}
                            ref={passwordInput}
                            returnKeyType='go'
                            onSubmitEditing={Keyboard.dismiss}
                            placeholder='Password'
                            className='border border-gray-300 text-black p-4 '
                        />
                    </View>


                </View>
            </KeyboardAvoidingView>


            <View>
                <Pressable className='text-white bg-red-500 px-4 py-4 rounded-md flex flex-row justify-between' onPress={() => handleSubmit()}>
                    <Text className='text-white font-bold text-sm uppercase'>Register</Text>
                    <AntDesign name="arrowright" size={24} color="white" />
                </Pressable>
            </View>


        </SafeAreaView>
    )
}

export default RegisterScreen