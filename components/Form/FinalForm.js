import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import useAuthStore from '../../authStore'
import { AntDesign } from '@expo/vector-icons';
import EducationBox from './EducationBox';
import MultiSelect from './MultiSelect';
import items from '../../data/listItems';
import languages from '../../data/languages';

const FinalForm = ({ formData, setFormData }) => {
    const { formState, userDetails } = useAuthStore();

    const [phone, setPhone] = useState('');



    return (

        <SafeAreaView className='flex'>


            <View className=' p-6 mt-0 border-b border-gray-300 flex-row justify-center w-[100%] items-center'>

                <ScrollView className='flex-row  h-[100%] px-2  '
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>

                    <View className='items-center justify-center flex-row gap-2 mr-2'>
                        <View className='flex-row   rounded-full border border-gray-600 w-10 h-10 items-center justify-center'>
                            <Text className='text-gray-400 text-lg font-semibold'>1</Text>
                        </View>
                        <Text className='text-gray-400 text-base font-semibold '>Personal Info</Text>
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
                        <View className='flex-row   rounded-full border border-[#7c445f] w-10 h-10 items-center justify-center'>
                            <Text className='text-[#7c445f] text-lg font-semibold'>3</Text>
                        </View>
                        <Text className='text-[#7c445f] text-base font-semibold '>Account</Text>
                        <AntDesign name='right' size={16} color='#ccc' />
                    </View>

                </ScrollView>

            </View>

            <View className='border-b border-gray-300 justify-center '>
                <Text className='text-gray-600 p-4 text-base font-semibold'>Account Information </Text>
            </View>

            <TouchableWithoutFeedback className='w-full h-full flex-1' onPress={() => Keyboard.dismiss()}>

                <SafeAreaView className='flex-1  h-full  mr-6 mt-4 ml-6 '>

                    <View className='p-4 '>
                        <Text className='text-gray-400 p text-xs font-semibold mb-2 '>Email</Text>
                        <View className='border border-green-600 px-3 py-3 rounded-md flex-row justify-between items-center'>

                            <TextInput className='' placeholder='Title' value={userDetails.email}
                                returnKeyType={'next'}
                                editable={false}

                            // onSubmitEditing={() => descriptionInput.current.focus()}
                            //  onChangeText={text => setFormData({ ...formData, title: text })} />
                            />


                            <AntDesign name='check' size={20} color='green' />

                        </View>
                    </View>


                    <View className='p-4 '>
                        <Text className='text-gray-400 p text-xs font-semibold mb-2 '>Phone number (Private) </Text>
                        <View className='border border-[#7c445f] px-3 py-3 rounded-md flex-row justify-between items-center'>

                            <TextInput className='w-full px-3' placeholder='Phone Number'
                                value={formData.phone ? formData.phone : phone}
                                maxLength={10}
                                keyboardType='numeric'
                                returnKeyType={'done'}
                                // onSubmitEditing={() => descriptionInput.current.focus()}
                                onChangeText={text => setFormData({ ...formData, phone: text })} />





                        </View>
                    </View>

                </SafeAreaView>
            </TouchableWithoutFeedback>

        </SafeAreaView>

    )
}

export default FinalForm