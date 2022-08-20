import { View, Text } from 'react-native'
import React from 'react'

const CategoryPills = ({ name, icons, icon }) => {
    return (
        <View className=' mr-3 max-w-[220px] min-w-[50px] max-h-[65px] min-h-[60px] flex-row justify-between items-center  border border-[#7c445f] rounded-full mt mb-4'
        >

            <View className='px-6 py-4'>
                <Text className='text-[#7c445f] font-bold font-base'>{name}</Text>
            </View>
            <View className='px-6  py-4'>
                {icons ? icons : <AntDesign name={icon} size={24} color="#7c445f" />}

            </View>
        </View>
    )
}

export default CategoryPills

