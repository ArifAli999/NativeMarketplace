import { View, Text, KeyboardAvoidingView, Platform, TextInput, Pressable, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons';
import DropDown from '../Form/DropDown';
import useAuthStore from '../../authStore';


const GeneralForm = ({ formData, setFormData, nextPage }) => {

    const { userDetails, userProfile, addToForm, formState } = useAuthStore();
    const descriptionInput = useRef();

    const handleSubmit = () => {
        nextPage();
    }


    return (

        <View className='flex h-full w-full '>

            <View className=' p-6 mt-0 border-b border-gray-300 flex-row justify-center w-[100%] items-center'>

                <ScrollView className='flex-row  h-[100%] px-2  '
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>

                    <View className='items-center justify-center flex-row gap-2 mr-2'>
                        <View className='flex-row   rounded-full border border-[#7c445f] w-10 h-10 items-center justify-center'>
                            <Text className='text-[#7c445f] text-lg font-semibold'>1</Text>
                        </View>
                        <Text className='text-[#7c445f] text-base font-semibold '>Personal Info</Text>
                        <AntDesign name='right' size={16} color='#ccc' />
                    </View>


                    <View className='items-center justify-center flex-row gap-2 mr-2'>
                        <View className='flex-row   rounded-full border border-gray-600 w-10 h-10 items-center justify-center'>
                            <Text className='text-gray-400 text-lg font-semibold'>2</Text>
                        </View>
                        <Text className='text-gray-400 text-base font-semibold '>Professional Info</Text>
                        <AntDesign name='right' size={16} color='#ccc' />
                    </View>



                    <View className='items-center justify-center flex-row gap-2 mr-2'>
                        <View className='flex-row   rounded-full border border-gray-400 w-10 h-10 items-center justify-center'>
                            <Text className='text-gray-400 text-lg font-semibold'>3</Text>
                        </View>
                        <Text className='text-gray-400 text-base font-semibold '>Account</Text>
                        <AntDesign name='right' size={16} color='#ccc' />
                    </View>

                </ScrollView>

            </View>

            <View className='border-b border-gray-300 justify-center '>
                <Text className='text-gray-600 p-4 text-base font-semibold'>General Information</Text>
            </View>

            <TouchableWithoutFeedback className='w-full h-full' onPress={Keyboard.dismiss}>

                <View className='flex-1  h-full  mr-6 ml-6'>


                    <View className='p-4 '>
                        <Text className='text-gray-400 p text-xs font-semibold mb-2 '>Title</Text>
                        <TextInput className='border border-[#7c445f] px-3 py-3 rounded-md' placeholder='Title' value={formData.title}
                            returnKeyType={'next'}
                            onSubmitEditing={() => descriptionInput.current.focus()}
                            onChangeText={text => setFormData({ ...formData, title: text })} />

                    </View>
                    <View className='p-4'>
                        <Text className='text-gray-400 p text-xs font-semibold mb-2 '>Description</Text>
                        <TextInput className='border border-[#7c445f] px-3 py-3 max-h-[90px] rounded-md'
                            ref={descriptionInput}
                            value={formData.description}
                            numberOfLines={5}
                            onChangeText={text => setFormData({ ...formData, description: text })}
                            placeholder='Description' multiline={true}
                        />
                    </View>
                    <View className='p-4'>
                        <Text className='text-gray-400 p text-xs font-semibold mb-2 '>Location</Text>
                        <View className='border border-[#7c445f] px-3 py-3 rounded-md'>
                            <Text>{userDetails.location} </Text>
                        </View>
                    </View>

                    <View className='p-4'>
                        <Text className='text-gray-400 p text-xs font-semibold mb-2 '>Job</Text>
                        <TextInput className='border border-[#7c445f] px-3 py-3 rounded-md' placeholder='What do you do?'
                            value={formData.job}
                            returnKeyType={'next'}
                            onSubmitEditing={() => Keyboard.dismiss}
                            onChangeText={text => setFormData({ ...formData, job: text })} />
                    </View>

                    <DropDown formData={formData} setFormData={setFormData} />
                </View>
            </TouchableWithoutFeedback>



        </View >
    )
}

export default GeneralForm