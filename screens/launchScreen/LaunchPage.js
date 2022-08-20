import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-web'

const LaunchPage = ({ navigation }) => {

    return (
        <SafeAreaView className='text-white flex-1  h-full w-full -'>
            <View className='flex-1 items-center justify-start mt-10'>
                <Text className='text-4xl text-black font-bold uppercase'>
                    Splash Logo Here.
                </Text>
            </View>


            <View className='w-full items-center justify-center'>
                <Pressable className='border-2  border-red-400  rounded-md w-[80%] mx-auto mb-4  px-4 py-5 '
                    onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text className='text-red-500 font-bold uppercase text-center'>Register</Text>
                </Pressable>
                <Pressable className='bg-red-500 w-[80%] mx-auto px-4 py-5 rounded-md  border-b-4 border-red-800'
                    onPress={() => navigation.navigate('LoginScreen')}>
                    <Text className='text-white font-bold uppercase text-center'>Login</Text>
                </Pressable>
            </View>


        </SafeAreaView>
    )
}

export default LaunchPage