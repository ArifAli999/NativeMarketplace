import { View, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, Pressable, KeyboardAvoidingView, ScrollView, Platform, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAuthStore from '../../authStore'
import * as Location from 'expo-location';
import { AntDesign } from '@expo/vector-icons';
import AnimatedIcon from '../../components/AnimatedIcon';
import { FontAwesome } from '@expo/vector-icons';
import { db, auth } from '../../firebase';
import { doc, setDoc, Timestamp } from 'firebase/firestore';




const SecondStep = ({ route, navigation }) => {

    const { userProfile, addUser, addUserDets } = useAuthStore();
    const { user, lastname, firstn, email, uid, session } = route.params;

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState('');
    const [focused, setFocused] = useState(false);
    const [bio, setBio] = useState('')

    useEffect(() => {
        if (displayCurrentAddress.length > 0) {
            setLoading(false);
        }

    }, [displayCurrentAddress])


    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert(
                'Permission not granted',
                'Allow the app to use location service.',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        }

        setLoading(true)
        let { coords } = await Location.getCurrentPositionAsync();

        if (coords) {
            const { latitude, longitude } = coords;
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude
            });

            for (let item of response) {
                let address = ` ${item.postalCode}, ${item.city}`;

                setDisplayCurrentAddress(address);
            }




        }
    };


    const userData = {


        username: user,
        useruid: uid,
        email: email,
        lastname: lastname,
        firstname: firstn,
        location: displayCurrentAddress,
        bio: bio,

    }

    const saveToDb = async () => {
        const dtref = Timestamp.now()

        setDoc(doc(db, `users`, `${uid}`), {
            username: user,
            useruid: uid,
            Joined: dtref,
            email: email,
            lastname: lastname,
            firstname: firstn,
            location: displayCurrentAddress,
            bio: bio
        }).then(() => {
            alert('Saved')
            addUser(session)
            addUserDets(userData)

        })
    }




    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView className='p-4 bg-red-500 h-full w-full'>

                <View className='flex-1  p-0 rounded'>

                    <View className='p-4 ' >
                        <Text className='text-base text-white font-bold  mt-6 mb-6'> Just one more step, {lastname} </Text>
                    </View>

                    <TouchableOpacity onPress={displayCurrentAddress.length > 0 ? null : () => getLocation()} className='bg-red-700/60 border w-full border-red-400 rounded'>
                        <View className='flex-row items-center justify-between  border-red-400/70 p-4'>
                            <>
                                <TextInput
                                    placeholder='Location'
                                    value={displayCurrentAddress.length > 0 ? displayCurrentAddress : 'Tap to capture your address..'}
                                    editable={false}

                                    placeholderTextColor={'white'}

                                    className=' text-white p-4' />

                                {loading ? (
                                    <View className='mr-4 p-4' >
                                        <AnimatedIcon />
                                    </View>

                                ) : null}

                                {displayCurrentAddress.length > 0 ? (
                                    <View className='mr- p-4' >
                                        <AntDesign name="checkcircleo" size={24} color="lightgreen" />
                                    </View>
                                ) :
                                    loading ? null : (<FontAwesome name="map-pin" size={24} color="white" />)
                                }
                            </>

                        </View>
                    </TouchableOpacity>

                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "height" : "padding"}
                        contentContainerStyle={{ height: '10px' }}
                        keyboardVerticalOffset={100}
                        style={{}}>
                        <ScrollView scrollEnabled='false' className='bg-red-700/80 w-full p-2 max-h-[350px] h-150px mt-6 border border-red-400 rounded'>
                            <TextInput placeholder='About You' placeholderTextColor={'white'}
                                onFocus={() => setFocused(true)}
                                className='text-white p-4  max-h-[250px] h-[100px]  focus:border-purple-500' multiline={true} numberOfLines={5}
                                onChangeText={(text) => setBio(text)}
                                value={bio}



                            />

                        </ScrollView>
                    </KeyboardAvoidingView>




                    <View className='flex-1 justify-end items-center p-4'>
                        <Pressable className='text-red-500 bg-white px-4 py-4 rounded-md flex flex-row justify-between items-center w-full' onPress={() => saveToDb()}>
                            <Text className='text-red-500 font-bold text-sm uppercase'>CONTINUE</Text>
                            <AntDesign name="arrowright" size={24} color="red" />
                        </Pressable>
                    </View>


                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default SecondStep