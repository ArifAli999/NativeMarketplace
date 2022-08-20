import { View, Text, Keyboard, Platform, TextInput, Pressable, TouchableWithoutFeedback, SafeAreaView, Dimensions, ScrollView, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import useAuthStore from '../../authStore'
import { AntDesign } from '@expo/vector-icons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { MaterialIcons } from '@expo/vector-icons';
import MultiSelect from './MultiSelect';
import items from '../../data/listItems'
import languages from '../../data/languages';
import EducationBox from './EducationBox';


const AdvancedForm = ({ formData, setFormData }) => {


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
                        <View className='flex-row   rounded-full border border-[#7c445f] w-10 h-10 items-center justify-center'>
                            <Text className='text-[#7c445f] text-lg font-semibold'>2</Text>
                        </View>
                        <Text className='text-[#7c445f] text-base font-semibold '>Professional Info</Text>
                        <AntDesign name='right' size={16} color='#ccc' />
                    </View>



                    <View className='items-center justify-center flex-row gap-2 mr-2'>
                        <View className='flex-row   rounded-full border border-gray-600 w-10 h-10 items-center justify-center'>
                            <Text className='text-gray-400 text-lg font-semibold'>3</Text>
                        </View>
                        <Text className='text-gray-400 text-base font-semibold '>Accounts</Text>
                        <AntDesign name='right' size={16} color='#ccc' />
                    </View>
                </ScrollView>

            </View>

            <View className='border-b border-gray-300 justify-center '>
                <Text className='text-gray-600 p-4 text-base font-semibold'>Professional Information </Text>
            </View>

            <SafeAreaView className='flex-1  h-full  mr-6 mt-4 ml-6 '>
                <MultiSelect formData={formData} setFormData={setFormData} listItems={items} label="Skills" />
                <MultiSelect formData={formData} setFormData={setFormData} listItems={languages} label="Languages" />

                {/** Education Box */}

                <EducationBox formData={formData} setFormData={setFormData} />
                {/** Certificate Box */}





            </SafeAreaView>


        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        marginTop: 30,
    },
    title: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 10,
    },
    cardContainer: {
        justifyContent: 'center',
    },
    card: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 10,
        width: 220,
    },
});




export default AdvancedForm