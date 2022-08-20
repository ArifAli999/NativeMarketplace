import { View, Text } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons';

const years = [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]


const GradDrop = ({ formData, setFormData, year, setYear }) => {
    return (
        <View className=' items-center ml-2  '>
            <SelectDropdown
                data={years}
                searchPlaceHolder='Search'
                defaultButtonText='Year'
                buttonStyle={{ backgroundColor: 'transparent', borderColor: '#7c445f', color: '#7c445f', borderWidth: 0.5, borderRadius: 50, paddingVertical: 10, width: 100 }}
                buttonTextStyle={{ color: '#7c445f', fontWeight: '300', fontSize: 16, textAlign: 'left' }}
                dropdownBackgroundColor={{ backgroundColor: '#0000', padding: 100 }}
                rowStyle={{ backgroundColor: 'fff', padding: 6, }}
                rowTextStyle={{ color: '#000', textAlign: 'center', fontWeight: '300', fontSize: 10, }}
                renderDropdownIcon={() => <AntDesign name="caretdown" size={10} color="#7c445f" style={{ marginRight: 10 }} />}
                onSelect={(selectedItem, index) => {

                    setFormData({ ...formData, education: { ...formData.education, year: selectedItem } })
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

export default GradDrop