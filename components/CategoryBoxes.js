import { View, Text, TextInput, Keyboard } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';




const CategoryBoxes = () => {
    return (

        <View className='flex flex-row h-[60%]   items-center flex-wrap flex-1' style={{ flexWrap: 'wrap' }}>

            <View className='flex-1  w-full rounded border-[1px] border-[#7c445f] items-center flex-row  justify-between'>

                <View className='p-4'>
                    <FontAwesome name="search" size={24} color="#7c445f" />
                </View>

                <TextInput
                    returnKeyType='go'
                    onSubmitEditing={() => Keyboard.dismiss}
                    className='h-full px- py-6 text-left w-full flex-1 text-black whitespace-pre-wrap' placeholder='What are you looking for?' />

            </View>



            <View className='flex-row w-full gap-2 mt-10 flex-1 '>
                <View className='flex-1 p-4 bg-green-500'>


                </View>
                <View className='flex-1 p-4 bg-green-500'>


                </View>
            </View>


        </View>


    )
}

export default CategoryBoxes