import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



const QuickView = ({ icon, name, icons, color }) => {
    return (
        <View className='mr-2  flex-row justify-between items-center h-full border-[1.5px] rounded-md '
            style={{ borderColor: color }}>

            <View className='px-6 py-2'>
                <Text style={{ color: color }}>{name}</Text>
            </View>
            <View className='px-6  py-2'>
                {icons ? icons : <AntDesign name={icon} size={24} color={color} />}

            </View>
        </View>
    )
}

export default QuickView