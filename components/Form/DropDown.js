import { View, Text } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons';

const countries = ["Tech & Coding", "Fashion", "Design & Art", "Education"]

const DropDown = ({ formData, setFormData }) => {
    return (
        <View className='p-4 items-center'>
            <SelectDropdown
                data={countries}
                searchPlaceHolder='Search'
                defaultButtonText='Expertise Area'
                buttonStyle={{ backgroundColor: 'transparentq', borderColor: '#7c445f', color: '#7c445f', borderWidth: 0.5, borderRadius: 10, width: '100%', margin: 'auto', padding: 0, }}
                buttonTextStyle={{ color: '#7c445f', fontWeight: '300', fontSize: 16, textAlign: 'left' }}
                dropdownBackgroundColor={{ backgroundColor: '#0000', padding: 100 }}
                rowStyle={{ backgroundColor: 'transparent', padding: 0, borderBottomColor: '#7c445f' }}
                rowTextStyle={{ color: '#7c445f', textAlign: 'center', fontWeight: '300', fontSize: 14, }}
                renderDropdownIcon={() => <AntDesign name="caretdown" size={10} color="#7c445f" style={{ marginRight: 10 }} />}
                onSelect={(selectedItem, index) => {
                    setFormData({
                        ...formData,
                        type: selectedItem
                    })
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }} />
        </View>
    )
}

export default DropDown